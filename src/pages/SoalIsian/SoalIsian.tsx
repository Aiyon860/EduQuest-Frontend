const LatihanSoal = () => {
    const soal = {
        nomor: 3,
        teks: `Di lingkungan sekitar kita, terdapat berbagai hal yang berhubungan dengan ilmu pengetahuan alam. Contohnya, ketika manusia bernapas, organ utama yang digunakan adalah _________. Air di permukaan bumi dapat berubah menjadi uap melalui proses _________ akibat panas matahari. Ketika kita merasa demam, kita bisa mengetahui suhu tubuh menggunakan alat yang disebut _________. Di sekolah, kamu mungkin pernah bermain dengan benda yang dapat menarik paku atau jarum, benda itu disebut _________. Selain itu, tumbuhan juga memiliki bagian yang menyerap air dan mineral dari dalam tanah agar bisa tumbuh, bagian itu disebut _________.`,
        pilihan: [
            "paru-paru",
            "evaporasi",
            "termometer",
            "magnet",
            "akar"
        ]
    };

    return (
        <section className="w-full px-4 py-10 max-w-4xl mx-auto">
            <div className="mb-6">
                <h2 className="text-2xl font-extrabold text-gray-900">
                    Latihan Soal <span className="font-normal">| IPA</span>
                </h2>
            </div>

            <div className="flex items-start bg-white border border-gray-200 rounded-lg shadow-sm px-4 py-4 mb-6">
                <div className="bg-orange-500 text-white w-60 h-10 flex items-center justify-center rounded-md font-bold mr-4">
                    {soal.nomor}
                </div>
                <p className="text-gray-900 text-left font-medium">{soal.teks}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                {soal.pilihan.map((item, index) => (
                    <div
                        key={index}
                        className="bg-yellow-400 text-black font-semibold text-center py-2 rounded cursor-pointer hover:bg-yellow-500"
                    >
                        {item}
                    </div>
                ))}
            </div>

            <div className="flex justify-between">
                <button className="flex items-center gap-1 bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md text-sm font-medium">
                    Previous
                </button>
                <button className="flex items-center gap-1 bg-[#003566] hover:bg-blue-800 text-white px-4 py-2 rounded-md text-sm font-medium">
                    Next
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default LatihanSoal;
