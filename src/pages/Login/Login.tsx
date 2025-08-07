import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import GambarMasuk from "@/assets/vector.webp";
import Logo from "@/assets/eduquest.webp";
import { useAuth } from "@/hooks/useAuth";

interface LoginFormValues {
  email: string;
  password: string;
}

const Login = () => {
  const { refreshUser } = useAuth();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    setLoading(true);
    setServerError(null);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Login gagal");
      }

      sessionStorage.setItem("accessToken", result.accessToken);
      localStorage.setItem("refreshToken", result.refreshToken);

      refreshUser();

      navigate("/dashboard", { replace: true });
    } catch (error: unknown) {
      if (error instanceof Error) {
        setServerError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-5">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Illustration */}
        <div className="hidden md:block bg-blue-100">
          <img
            src={GambarMasuk}
            alt="Ilustrasi EduQuest"
            className="object-cover w-full h-full"
          />
        </div>

      {/* Right Form */}
        <div className="p-8 md:p-12 flex flex-col justify-center gap-4">
          {/* Logo & Heading */}
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
              Silakan Masuk Untuk Melanjutkan Belajar!
            </p>
          </div>

          {/* Server Error */}
          {serverError && (
            <div className="mb-4 text-red-600 text-sm font-medium">
              {serverError}
            </div>
          )}

          {/* Form */}
          <form className="w-full text-left" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: "Email wajib diisi" })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="name@flowbite.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", { required: "Password wajib diisi" })}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300"
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="flex justify-center items-center w-full">
              <button
                type="submit"
                disabled={loading}
                className={`text-white ${
                  loading ? "bg-[#FFA347]" : "bg-[#FF8500] hover:brightness-90"
                } focus:ring-2 focus:ring-offset-2 focus:outline-none focus:ring-[#FF8500] font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center transition-all hover:cursor-pointer`}
              >
                {loading ? "Processing..." : "Login"}
              </button>
            </div>
          </form>

          <span className="text-center text-xs text-gray-500">
            Belum punya akun?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Buat Akun
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
