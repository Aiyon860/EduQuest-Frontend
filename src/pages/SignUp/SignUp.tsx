import GambarMasuk from "@/assets/vector.png";
import Logo from "@/assets/eduquest.png";

const SignUp = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white p-5">
            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">

                <div className="hidden md:block bg-blue-100">
                    <img
                        src={GambarMasuk}
                        alt="Ilustrasi EduQuest"
                        className="object-cover w-full h-full"
                    />
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="mb-6 text-left">
                        <div className="w-12 h-12 mb-2">
                            <img src={Logo} alt="EduQuest Logo" />
                        </div>
                        <h2 className="mt-10 text-2xl font-bold text-gray-800">Selamat Datang di EduQuest!</h2>
                        <p className="text-left text-sm text-gray-500 mt-1">Silakan buat akun terlebih dahulu</p>
                    </div>

                    <form className="space-y-8">
                        <div>
                            <label className="block text-left text-gray-700 font-medium mb-1">Nama</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>
                        <div>
                            <label className="block text-left text-gray-700 font-medium mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="JohnDoe@gmail.com"
                                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>
                        <div>
                            <label className="block text-left text-gray-700 font-medium mb-1">Kata Sandi</label>
                            <input
                                type="password"
                                placeholder="8+ Character"
                                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded transition"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
