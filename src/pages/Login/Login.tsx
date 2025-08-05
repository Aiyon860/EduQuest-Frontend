import GambarMasuk from "@/assets/vector.png";
import Logo from "@/assets/eduquest.png";

const Login = () => {
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
        <div className="p-8 md:p-12 flex flex-col justify-center">
          {/* Logo & Heading */}
          <div className="mb-6 text-left">
            <div className="w-12 h-12 mb-2">
              {/* Ganti dengan ikon/logo sesuai keinginan */}
              <img src={Logo} alt="EduQuest Logo" />
            </div>
            <h2 className="mt-10 text-2xl font-bold text-gray-800">
              Selamat Datang di EduQuest!
            </h2>
            <p className="text-left text-sm text-gray-500 mt-1">
              Silakan Masuk Untuk Melanjutkan Belajar!
            </p>
          </div>

          {/* Form */}
          <form className="w-full text-left">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
                required
              />
            </div>
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300     "
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-900 "
              >
                Remember me
              </label>
            </div>
            <div className="flex justify-center items-center w-full">
              <button
                type="submit"
                className="text-white bg-[#FF8500] hover:brightness-90 focus:ring-4 focus:outline-none focus:ring-[#FF8500] font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center transition-all hover:cursor-pointer"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
