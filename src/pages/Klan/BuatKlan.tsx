import Foto from "@/assets/fitur1.webp";

const BuatKlan = () => {
    return (
        <section className="sm:ml-64 px-4 py-8">
            <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-2">
                {/* KIRI - Gambar dan Judul */}
                <div className="p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-200">
                    <img src={Foto} alt="Foto Fitur" className="rounded-xl w-full h-auto mb-4" />
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 text-center">Buat Klanmu Sendiri!</h5>
                </div>

                {/* KANAN - Form */}
                <div className="p-6">
                    <form className="text-left space-y-5">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Nama Klan</label>
                            <input
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="The King"
                                required
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file_input">
                                Masukkan Badge Klan
                            </label>
                            <input
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                                id="file_input"
                                type="file"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Motto Klan</label>
                            <input
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="The King"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                        >
                            Buat
                            <svg
                                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default BuatKlan;
