import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";
import GambarMasuk from "@/assets/vector.webp";
import Logo from "@/assets/eduquest.webp";
import { Link, useNavigate } from "react-router";

interface FormValues {
  nama_depan: string;
  nama_belakang: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    setServerError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Terjadi kesalahan saat mendaftar");
      }

      setSuccessMessage("Registrasi berhasil! Silakan login.");
      navigate("/login", { replace: true });
      reset();
    } catch (error: unknown) {
      if (error instanceof Error) {
        setServerError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50 p-5">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left image */}
        <div className="hidden md:block bg-blue-100">
          <img
            src={GambarMasuk}
            alt="Ilustrasi EduQuest"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right form */}
        <div className="p-8 md:p-12 flex flex-col justify-center gap-4">
          <div className="mb-6 text-left">
            <div className="w-12 h-12 mb-2 hover:cursor-pointer">
              <Link to="/">
                <img src={Logo} alt="EduQuest Logo" />
              </Link>
            </div>
            <h2 className="mt-10 text-2xl font-bold text-gray-800">
              Selamat Datang di EduQuest!
            </h2>
            <p className="text-left text-sm text-gray-500 mt-1">
              Silakan buat akun terlebih dahulu
            </p>
          </div>

          {/* Error/success messages */}
          {serverError && (
            <div className="mb-4 text-red-600 text-sm font-medium">
              {serverError}
            </div>
          )}
          {successMessage && (
            <div className="mb-4 text-green-600 text-sm font-medium">
              {successMessage}
            </div>
          )}

          <form className="w-full text-left" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col sm:flex-row gap-0 sm:gap-4 w-full">
              {/* Nama Depan */}
              <div className="mb-5 w-full">
                <label
                  htmlFor="nama_depan"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Nama Depan
                </label>
                <input
                  type="text"
                  id="nama_depan"
                  {...register("nama_depan", {
                    required: "Nama depan wajib diisi",
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="John"
                />
                {errors.nama_depan && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.nama_depan.message}
                  </p>
                )}
              </div>

              {/* Nama Belakang */}
              <div className="mb-5 w-full">
                <label
                  htmlFor="nama_belakang"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Nama Belakang
                </label>
                <input
                  type="text"
                  id="nama_belakang"
                  {...register("nama_belakang", {
                    required: "Nama belakang wajib diisi",
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Doe"
                />
                {errors.nama_belakang && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.nama_belakang.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email wajib diisi",
                  pattern: {
                    value: emailRegex,
                    message: "Format email tidak valid",
                  },
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: "Password wajib diisi",
                  pattern: {
                    value: passwordRegex,
                    message:
                      "Password harus minimal 6 karakter dan mengandung huruf besar, kecil, angka, dan simbol (!@#$%^&*)",
                  },
                })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <div className="flex justify-center items-center w-full">
              <button
                type="submit"
                disabled={loading}
                className={`text-white ${
                  loading ? "bg-[#FFA347]" : "bg-[#FF8500] hover:brightness-90"
                } focus:ring-4 focus:outline-none focus:ring-[#FF8500] font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center transition-all hover:cursor-pointer`}
              >
                {loading ? "Processing..." : "Sign Up"}
              </button>
            </div>
          </form>

          <span className="text-center text-xs text-gray-500">
            Sudah punya akun?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
