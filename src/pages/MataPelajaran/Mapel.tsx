import Foto from "@/assets/fitur1.png";

const dataMapel = [
    { nama: "Matematika", link: "#", bg: "/images/bg-matematika.jpg" },
    { nama: "IPA", link: "#", bg: "/images/bg-ipa.jpg" },
    { nama: "IPS", link: "#", bg: "/images/bg-ips.jpg" },
    { nama: "PKN", link: "#", bg: "/images/bg-pkn.jpg" },
    { nama: "Bahasa Indonesia", link: "#", bg: "/images/bg-bahasa.jpg" },
    { nama: "Bahasa Inggris", link: "#", bg: "/images/bg-inggris.jpg" },
];

const Mapel = () => {
    return (
        <section className="w-full flex flex-col items-center justify-center">
            <div className="px-4 py-8 max-w-screen-xl mx-auto">
                <div className="w-full flex flex-col items-center justify-between mb-10 sm:flex-row">
                    <h2 className="text-2xl tracking-tight font-bold text-gray-900">Mata Pelajaran</h2>
                    <button className="m-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg">
                        Pilih File Jadwal
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
                    {dataMapel.map((mapel, index) => (
                        <div
                            key={index}
                            className="w-[200px] h-[300px] bg-cover bg-center border border-gray-200 rounded-lg shadow-md flex flex-col justify-between"
                            style={{
                                backgroundImage: `url(${Foto})`,
                            }}
                        >
                            <div className="bg-white bg-opacity-80 p-3 rounded-b-lg mt-auto">
                                <h5 className="text-lg font-bold text-gray-800">{mapel.nama}</h5>
                                <a
                                    href={mapel.link}
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

export default Mapel;
