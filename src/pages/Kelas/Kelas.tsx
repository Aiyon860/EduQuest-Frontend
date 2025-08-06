import Foto from "@/assets/fitur1.png";
const progress = 80;
const dataKelas = [
    { nama: "Kelas 1", link: "#", bg: "/images/bg-kelas1.jpg" },
    { nama: "Kelas 2", link: "#", bg: "/images/bg-kelas2.jpg" },
    { nama: "Kelas 3", link: "#", bg: "/images/bg-kelas3.jpg" },
    { nama: "Kelas 4", link: "#", bg: "/images/bg-kelas4.jpg" },
    { nama: "Kelas 5", link: "#", bg: "/images/bg-kelas5.jpg" },
    { nama: "Kelas 6", link: "#", bg: "/images/bg-kelas6.jpg" },
];


const Kelas = () => {
    return (
        <section className="w-full flex flex-col items-center justify-center">
            <div className="px-4 py-8 max-w-screen-xl mx-auto">
                <div className="w-full flex flex-col items-center justify-between mb-5 sm:flex-row">
                    <h2 className="text-2xl tracking-tight font-bold text-gray-900">Kelas SD</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
                    {dataKelas.map((kelas, index) => (
                        <div
                            key={index}
                            className="w-[200px] h-[300px] bg-cover bg-center border border-gray-200 rounded-lg shadow-md flex flex-col justify-between"
                            style={{
                                backgroundImage: `url(${Foto})`,
                            }}
                        >
                            <div className="bg-white bg-opacity-80 p-3 rounded-b-lg mt-auto">
                                <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                                    <div
                                        className="h-2 bg-blue-600 rounded-full"
                                        style={{ width: `${progress}%` }}
                                    ></div>
                                </div>
                                <h5 className="text-lg font-bold text-gray-800">{kelas.nama}</h5>
                                <a
                                    href={kelas.link}
                                    className="w-full mt-2 inline-block px-3 py-1 text-sm font-medium text-white bg-blue-700 rounded hover:bg-blue-800"
                                >
                                    Read more
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Kelas;
