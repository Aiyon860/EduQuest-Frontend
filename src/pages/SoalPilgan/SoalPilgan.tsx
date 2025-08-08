import FaceDetect from "../FaceDetect/FaceDetect";

const LatihanSoal = () => {
    const soal = {
        nomor: 1,
        pertanyaan: "Bahan dasar untuk pembuatan pensil adalah seperti....",
        pilihan: {
            A: "Arang",
            B: "Grafit",
            C: "Timah",
            D: "Besi"
        }
    };

    return (
        <section className="sm:ml-64">
            <div className="w-full px-4 py-10 max-w-screen-xl">
                <div className="mb-6">
                    <h2 className="text-2xl font-extrabold text-gray-900">
                        Latihan Soal <span className="font-normal">| IPA</span>
                    </h2>
                </div>

                <div className="flex items-start bg-white border border-gray-200 rounded-lg shadow-sm px-4 py-3 mb-6">
                    <div className="bg-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-md font-bold mr-4">
                        {soal.nomor}
                    </div>
                    <span className="text-gray-900 font-medium">
                        {soal.pertanyaan}
                    </span>
                </div>

                <div className="space-y-4 mb-6">
                    {Object.entries(soal.pilihan).map(([key, value]) => (
                        <div
                            key={key}
                            className="flex items-center bg-white border border-gray-200 rounded-lg shadow-sm px-4 py-3"
                        >
                            <div className="bg-[#003566] text-white w-8 h-8 flex items-center justify-center rounded-md font-bold mr-4">
                                {key}
                            </div>
                            <span className="text-gray-800">{value}</span>
                        </div>
                    ))}
                </div>
                    <div className="flex justify-center">
                        <FaceDetect />
                    </div>
                <div className="flex justify-end">
                    <button className="flex items-center gap-1 bg-[#003566] hover:bg-blue-800 text-white px-4 py-2 rounded-md text-sm font-medium">
                        Next
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default LatihanSoal;
