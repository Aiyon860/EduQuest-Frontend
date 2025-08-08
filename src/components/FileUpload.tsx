import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { useDropzone } from "react-dropzone";

type FileExtension = "pdf" | "doc" | "docx" | "xlsx";
type LimitSizeTypes = 1 | 50; // MB

interface ModalProps {
  endpoint: string,
  permittedFormats: FileExtension[];
  limitSize: LimitSizeTypes;
  isOpen: boolean;
  onClose: () => void;
}

type FormValues = {
  file: FileList | null;
};

const extensionToMime: Record<FileExtension, string> = {
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
};

const FileUploadModal = ({
  endpoint,
  isOpen,
  onClose,
  permittedFormats,
  limitSize,
}: ModalProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const [uploadResult, setUploadResult] = useState<"success" | "error" | null>(
    null
  );
  const [uploadError, setUploadError] = useState<string | null>(null);

  const watchedFile = watch("file")?.[0];

  // Build accept object for react-dropzone dynamically
  const acceptConfig = permittedFormats.reduce((acc, ext) => {
    acc[extensionToMime[ext]] = [`.${ext}`];
    return acc;
  }, {} as Record<string, string[]>);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        const fileList = {
          0: acceptedFiles[0],
          length: 1,
          item: (index: number) => acceptedFiles[index],
        } as unknown as FileList;

        setValue("file", fileList);
        await trigger("file");
      }
    },
    [setValue, trigger]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptConfig,
    maxFiles: 1,
    maxSize: limitSize * 1024 * 1024,
  });

  const onSubmit = async (data: FormValues) => {
    setUploadResult(null);
    const file = data.file?.[0];

    if (!file) {
      setUploadResult("error");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const uploadFile = async (accessToken: string) => {
      return await fetch(endpoint, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      });
    };

    try {
      const accessToken = sessionStorage.getItem("accessToken");

      if (!accessToken) throw new Error("Access token missing");

      let res = await uploadFile(accessToken);

      if (res.status === 403) {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) throw new Error("Refresh token missing");

        res = await uploadFile(refreshToken);
      }

      if (!res.ok) {
        const errorData = await res.json();
        setUploadError(errorData.message);
        throw new Error(errorData.message);
      }

      setUploadResult("success");
      reset();
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      }
      setUploadResult("error");
    }
  };

  const closeModal = () => {
    onClose();
    reset();
    setUploadResult(null);
    setValue("file", null);
    trigger("file");
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl border border-gray-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                  📁
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-left">
                    Unggah File
                  </h2>
                  <p className="text-xs text-gray-500">
                    {`Pilih file (${permittedFormats
                      .map((ext) => ext.toUpperCase())
                      .join(", ")}) maks. ${limitSize}MB`}
                  </p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-700 text-xl hover:cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <label
                {...getRootProps()}
                className={`block border border-dashed border-gray-300 p-6 rounded-lg text-center text-gray-500 text-sm mb-4 cursor-pointer transition ${
                  isDragActive ? "bg-blue-50 border-blue-400 text-blue-600" : ""
                }`}
              >
                <input
                  {...getInputProps()}
                  {...register("file", {
                    required: "File wajib diunggah",
                    validate: {
                      isSupported: (files) => {
                        const type = files?.[0]?.type;
                        return (
                          (type &&
                            permittedFormats.some(
                              (ext) => extensionToMime[ext] === type
                            )) ||
                          `File harus salah satu dari: ${permittedFormats
                            .map((ext) => ext.toUpperCase())
                            .join(", ")}`
                        );
                      },
                      maxSize: (files) => {
                        const fileSize = files?.[0]?.size;
                        return (
                          (fileSize !== undefined &&
                            fileSize <= limitSize * 1024 * 1024) ||
                          `Ukuran file maks. ${limitSize}MB`
                        );
                      },
                    },
                  })}
                />
                <div className="text-2xl mb-2">📤</div>
                <p className="font-medium">Klik atau tarik file ke sini</p>
                <p className="text-xs">
                  {permittedFormats.map((ext) => ext.toUpperCase()).join(", ")}{" "}
                  saja, maks. {limitSize}MB
                </p>
              </label>

              {watchedFile && (
                <div className="text-sm text-gray-700 mb-4 text-center">
                  <p>
                    <strong>📄 {watchedFile.name}</strong>
                  </p>
                  <p className="text-xs">
                    Ukuran: {(watchedFile.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
              )}

              {errors.file && (
                <p className="text-red-500 text-sm mb-2 text-center">
                  {errors.file.message}
                </p>
              )}

              {isSubmitting && (
                <div className="text-sm text-blue-500 text-center mb-4 animate-pulse">
                  Sedang mengunggah...
                </div>
              )}

              {uploadResult === "success" && (
                <div className="text-green-600 text-sm text-center mb-4">
                  ✅ Berhasil diunggah!
                </div>
              )}
              {uploadResult === "error" && (
                <div className="text-red-600 text-sm text-center mb-4">
                  ❌ {uploadError}
                </div>
              )}

              <div className="flex justify-between mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-700 text-white px-6 py-2 rounded-md font-semibold disabled:bg-gray-400 hover:bg-blue-800"
                >
                  {isSubmitting ? "Mengirim..." : "Simpan"}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={isSubmitting}
                  className="border border-gray-300 px-6 py-2 rounded-md font-semibold text-gray-700 hover:bg-gray-100"
                >
                  Batal
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default FileUploadModal;