import React, { useState } from "react";

const FileUploadBox = () => {
    const [fileName, setFileName] = useState("");
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setFileName(file.name);
        setUploading(true);
        setProgress(0);

        // Simulasi progress upload
        const fakeProgress = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(fakeProgress);
                    setUploading(false);
                }
                return prev + 10;
            });
        }, 200);

        // Di sini kamu bisa kirim ke backend pakai fetch/axios
        // const formData = new FormData();
        // formData.append("file", file);
        // await fetch("/api/upload", { method: "POST", body: formData });
    };

    return (
        <div className="justify-center flex mt-50">
            <div className="sm:ml-64 bg-white rounded-xl p-6 w-full max-w-md shadow-md border border-gray-200">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                            📁
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold text-left">Masukkan File</h2>
                            <p className="text-xs text-gray-500">
                                Pilih dan Masukkan File Mata Pelajaran
                            </p>
                        </div>
                    </div>
                </div>

                <label className="block border border-dashed border-gray-300 p-6 rounded-lg text-center text-gray-500 text-sm mb-4 cursor-pointer">
                    <input
                        type="file"
                        accept=".pdf"
                        className="hidden"
                        onChange={handleFile}
                    />
                    <div className="text-2xl mb-2">📤</div>
                    <p className="font-medium">Pilih file atau tarik ke sini</p>
                    <p className="text-xs">CSV, Excel formats, up to 50MB</p>
                </label>

                {fileName && (
                    <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-red-600 text-white text-xs px-2 py-1 rounded-md font-semibold">
                                pdf
                            </div>
                            <div className="text-sm text-gray-700 truncate max-w-[150px]">{fileName}</div>
                        </div>
                        <button
                            className="text-gray-400"
                            onClick={() => {
                                setFileName("");
                                setProgress(0);
                                setUploading(false);
                            }}
                        >
                            ✕
                        </button>
                    </div>
                )}

                {uploading && (
                    <div className="mb-4">
                        <div className="text-xs text-gray-500 mb-1">
                            {progress}% • <span className="animate-pulse">Uploading...</span>
                        </div>
                        <div className="h-1 bg-gray-200 rounded-full">
                            <div
                                className="h-full bg-blue-500 rounded-full"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex justify-between mt-4">
                    <button
                        disabled={!fileName}
                        className="bg-blue-700 text-white px-6 py-2 rounded-md font-semibold disabled:bg-gray-400"
                    >
                        Save
                    </button>
                    <button
                        className="border border-gray-300 px-6 py-2 rounded-md font-semibold text-gray-700"
                        onClick={() => {
                            setFileName("");
                            setProgress(0);
                            setUploading(false);
                        }}
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FileUploadBox;
