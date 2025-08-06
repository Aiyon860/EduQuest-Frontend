import Foto from "@/assets/fitur1.png";

const dataMapel = [
    {
        nama: "Matematika",
        link: "#",
        bg: "/images/bg-matematika.jpg",
        kelas: "Kelas 9",
        materi: "Persamaan Kuadrat",
    },
    {
        nama: "IPA",
        link: "#",
        bg: "/images/bg-ipa.jpg",
        kelas: "Kelas 8",
        materi: "Sistem Pernapasan",
    },
    {
        nama: "IPS",
        link: "#",
        bg: "/images/bg-ips.jpg",
        kelas: "Kelas 7",
        materi: "Kerajaan Hindu Buddha",
    },
];

const MisiHarian = () => {
    return (
        <section className="w-full flex flex-col items-center justify-center">
            <div className="px-4 py-8 max-w-screen-xl mx-auto">
                <div className="w-full flex flex-col items-center justify-between mb-10 sm:flex-row">
                    <h2 className="text-2xl tracking-tight font-bold text-gray-900">Misi Harian</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
                    {dataMapel.map((mapel, index) => (
                        <div
                            key={index}
                            className="w-[240px] h-[320px] bg-cover bg-center border border-gray-200 rounded-lg shadow-md flex flex-col justify-between"
                            style={{
                                backgroundImage: `url(${Foto})`,
                            }}
                        >
                            <div className="bg-white bg-opacity-80 p-3 rounded-b-lg mt-auto text-left">
                                <h5 className="text-lg font-bold text-gray-800">{mapel.nama}</h5>
                                <p className="text-xs text-gray-700">Kelas: {mapel.kelas}</p>
                                <p className="text-xs text-gray-700 mb-2">Materi: {mapel.materi}</p>
                                <a
                                    href={mapel.link}
                                    className="w-full mt-1 inline-block px-3 py-1 text-sm text-center font-medium text-white bg-blue-700 rounded hover:bg-blue-800"
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

export default MisiHarian;
