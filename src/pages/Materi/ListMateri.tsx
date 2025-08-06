const ListMateri = () => {
    const materi = [
        "Proses Terjadinya Hujan",
        "Hewan Karnivora dan Herbivora",
        "Sistem Pencernaan Hewan",
        "Rantai Makanan",
        "Daur Air",
    ];

    return (
        <section className="w-full px-5 py-20 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <h2 className="text-2xl font-extrabold text-gray-900">
                    Materi Semester 1 <span className="font-normal">| IPA</span>
                </h2>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <input
                        type="text"
                        placeholder="Cari Materi"
                        className="border border-gray-300 rounded-full px-4 py-2 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="flex gap-2">
                        <button className="bg-[#003566] text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-blue-800">
                            Pilih File Materi
                        </button>
                        <button className="bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-orange-600">
                            Buat Soal
                        </button>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                {materi.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center bg-white border border-gray-200 rounded-lg shadow-sm px-2 py-2"
                    >
                        <div className="bg-[#003566] text-white w-10 h-10 flex items-center justify-center rounded-md font-bold mr-4">
                            {index + 1}
                        </div>
                        <span className="text-gray-900 font-medium">
                            {item}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ListMateri;
