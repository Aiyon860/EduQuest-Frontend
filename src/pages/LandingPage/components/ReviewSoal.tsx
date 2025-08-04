const ReviewSoal = () => {
    const progress = 80;
    const soalKe = 1;
    const totalSoal = 5;
    const jawabanBenar = 4;
    const jawaban = 'B. Grafit';
    const benar = true;
    const penjelasan = `Pensil menggunakan grafit sebagai bahan utamanya untuk menulis atau menggambar.

Lebih tepatnya, inti pensil (yang sering disebut "mata pensil") terbuat dari campuran grafit dan tanah liat. Campuran ini kemudian dibakar dan dibentuk menjadi batang tipis. Jumlah tanah liat dan grafit menentukan tingkat kekerasan atau kelembutan pensil.`;

    return (
        <section className="w-full max-w-5xl mx-auto px-4 py-10">
            {/* Judul dan Progress */}
            <div className="mb-6">
                <h2 className="text-2xl font-extrabold text-gray-900">
                    Review Soal <span className="font-normal">| IPA</span> <span className="text-gray-500">#{soalKe}</span>
                </h2>
                <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                    <div
                        className="h-2 bg-blue-600 rounded-full"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
                <div className="w-full lg:w-3/4">
                    {/* Pertanyaan */}
                    <div className="mb-4 text-gray-800 font-semibold bg-gray-100 px-4 py-2 rounded-lg border border-gray-300">
                        Pertanyaan {soalKe}/{totalSoal}: Bahan dasar untuk pembuatan pensil adalah seperti....
                    </div>

                    {/* Jawaban dan Status */}
                    <p className="mb-2 text-left font-medium text-gray-900">Jawabanmu : {jawaban}</p>

                    <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="bg-sky-200 text-sky-800 px-4 py-1 rounded-md font-semibold">
                            Jawaban benar!
                        </span>
                        <span className="bg-yellow-200 text-yellow-800 px-4 py-1 rounded-md font-semibold">
                            Materi : Pengetahuan Bahan Baku
                        </span>
                    </div>

                    {/* Penjelasan */}
                    <div className="bg-white border border-gray-300 rounded-lg p-4 mb-6">
                        {penjelasan.split('\n').map((paragraf, idx) => (
                            <p key={idx} className="mb-2 text-gray-800">{paragraf}</p>
                        ))}
                    </div>
                </div>

                {/* Navigasi Soal */}
                <div className="flex flex-col gap-4 items-center w-full lg:w-1/4">
                    <div className="bg-blue-600 text-white w-full text-center p-4 rounded-lg font-bold text-xl shadow-md">
                        <div>{jawabanBenar}/{totalSoal}</div>
                        <div className="text-sm font-normal">
                            Kamu menjawab<br />{jawabanBenar} soal dengan benar
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-2 w-full">
                        {[1, 2, 3, 4, 5].map((num) => (
                            <div
                                key={num}
                                className={`flex items-center gap-2 px-3 py-2 rounded-md shadow-sm text-sm font-medium
                                ${num === 2 ? 'bg-red-100 text-red-600' :
                                    'bg-blue-100 text-blue-700'}`}
                            >
                                {num === 2 ? '✖' : '✔'} Pertanyaan {num}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tombol Next */}
            <div className="flex justify-end mt-6">
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

export default ReviewSoal;
