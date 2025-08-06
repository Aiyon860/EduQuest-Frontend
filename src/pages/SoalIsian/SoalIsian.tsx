import React, { useState } from "react";

type JawabanKey = "pertama" | "kedua" | "ketiga" | "keempat" | "kelima";

const LatihanSoal: React.FC = () => {
    const soal = {
        nomor: 3,
        pilihan: ["paru-paru", "evaporasi", "termometer", "magnet", "akar"],
    };

    const [jawaban, setJawaban] = useState<Record<JawabanKey, string>>({
        pertama: "",
        kedua: "",
        ketiga: "",
        keempat: "",
        kelima: "",
    });

    const [availableOptions, setAvailableOptions] = useState<string[]>(soal.pilihan);
    const [dragItem, setDragItem] = useState<string>("");
    const [selectedItem, setSelectedItem] = useState<string | null>(null); // Mobile tap support

    const handleDrop = (e: React.DragEvent<HTMLSpanElement>, posisi: JawabanKey) => {
        e.preventDefault();
        if (!jawaban[posisi] && dragItem) {
            setJawaban((prev) => ({ ...prev, [posisi]: dragItem }));
            setAvailableOptions((prev) => prev.filter((item) => item !== dragItem));
            setDragItem("");
        }
    };

    const handleDragStart = (item: string) => {
        setDragItem(item);
    };

    const handleDragFromJawaban = (posisi: JawabanKey) => {
        const current = jawaban[posisi];
        if (current) {
            setAvailableOptions((prev) => [...prev, current]);
            setJawaban((prev) => ({ ...prev, [posisi]: "" }));
            setDragItem(current);
        }
    };

    const handleClickJawaban = (posisi: JawabanKey) => {
        const current = jawaban[posisi];

        if (current && !selectedItem) {
            setAvailableOptions((prev) => [...prev, current]);
            setJawaban((prev) => ({ ...prev, [posisi]: "" }));
            return;
        }

        if (!current && selectedItem) {
            setJawaban((prev) => ({ ...prev, [posisi]: selectedItem }));
            setAvailableOptions((prev) => prev.filter((item) => item !== selectedItem));
            setSelectedItem(null);
        }
    };

    return (
        <div className="flex justify-center sm:ml-64">
            <section className="w-full px-4 py-10 max-w-4xl">
                <div className="mb-6">
                    <h2 className="text-2xl font-extrabold text-gray-900">
                        Latihan Soal <span className="font-normal">| IPA</span>
                    </h2>
                </div>

                <div className="flex items-start bg-white border border-gray-200 rounded-lg shadow-sm px-4 py-4 mb-6">
                    <div className="bg-orange-500 text-white w-120 sm:w-60 h-10 flex items-center justify-center rounded-md font-bold mr-4">
                        {soal.nomor}
                    </div>
                    <p className="text-gray-900 text-left font-medium leading-relaxed">
                        Di lingkungan sekitar kita, terdapat berbagai hal yang berhubungan dengan ilmu pengetahuan alam. Contohnya, ketika manusia bernapas, organ utama yang digunakan adalah{" "}
                        <span
                            onDrop={(e) => handleDrop(e, "pertama")}
                            onDragOver={(e) => e.preventDefault()}
                            draggable={!!jawaban.pertama}
                            onDragStart={() => handleDragFromJawaban("pertama")}
                            onClick={() => handleClickJawaban("pertama")}
                            className={`border-b-2 border-gray-400 px-2 inline-block min-w-[80px] cursor-move ${
                                jawaban.pertama ? "bg-orange-400 text-white font-semibold rounded" : ""
                            }`}
                        >
                            {jawaban.pertama || "______"}
                        </span>
                        . Air di permukaan bumi dapat berubah menjadi uap melalui proses{" "}
                        <span
                            onDrop={(e) => handleDrop(e, "kedua")}
                            onDragOver={(e) => e.preventDefault()}
                            draggable={!!jawaban.kedua}
                            onDragStart={() => handleDragFromJawaban("kedua")}
                            onClick={() => handleClickJawaban("kedua")}
                            className={`border-b-2 border-gray-400 px-2 inline-block min-w-[80px] cursor-move ${
                                jawaban.kedua ? "bg-orange-400 text-white font-semibold rounded" : ""
                            }`}
                        >
                            {jawaban.kedua || "______"}
                        </span> akibat panas matahari. Ketika kita merasa demam, kita bisa mengetahui suhu tubuh menggunakan alat yang disebut{" "}
                        <span
                            onDrop={(e) => handleDrop(e, "ketiga")}
                            onDragOver={(e) => e.preventDefault()}
                            draggable={!!jawaban.ketiga}
                            onDragStart={() => handleDragFromJawaban("ketiga")}
                            onClick={() => handleClickJawaban("ketiga")}
                            className={`border-b-2 border-gray-400 px-2 inline-block min-w-[80px] cursor-move ${
                                jawaban.ketiga ? "bg-orange-400 text-white font-semibold rounded" : ""
                            }`}
                        >
                            {jawaban.ketiga || "______"}
                        </span>. Di sekolah, kamu mungkin pernah bermain dengan benda yang dapat menarik paku atau jarum, benda itu disebut{" "}
                        <span
                            onDrop={(e) => handleDrop(e, "keempat")}
                            onDragOver={(e) => e.preventDefault()}
                            draggable={!!jawaban.keempat}
                            onDragStart={() => handleDragFromJawaban("keempat")}
                            onClick={() => handleClickJawaban("keempat")}
                            className={`border-b-2 border-gray-400 px-2 inline-block min-w-[80px] cursor-move ${
                                jawaban.keempat ? "bg-orange-400 text-white font-semibold rounded" : ""
                            }`}
                        >
                            {jawaban.keempat || "______"}
                        </span>. Selain itu, tumbuhan juga memiliki bagian yang menyerap air dan mineral dari dalam tanah agar bisa tumbuh, bagian itu disebut{" "}
                        <span
                            onDrop={(e) => handleDrop(e, "kelima")}
                            onDragOver={(e) => e.preventDefault()}
                            draggable={!!jawaban.kelima}
                            onDragStart={() => handleDragFromJawaban("kelima")}
                            onClick={() => handleClickJawaban("kelima")}
                            className={`border-b-2 border-gray-400 px-2 inline-block min-w-[80px] cursor-move ${
                                jawaban.kelima ? "bg-orange-400 text-white font-semibold rounded" : ""
                            }`}
                        >
                            {jawaban.kelima || "______"}
                        </span>.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                    {availableOptions.map((item, index) => (
                        <div
                            key={index}
                            draggable
                            onDragStart={() => handleDragStart(item)}
                            onClick={() => setSelectedItem(item)}
                            className={`bg-yellow-400 text-black font-semibold text-center py-2 rounded cursor-move hover:bg-yellow-500 
                            ${selectedItem === item ? "ring-4 ring-blue-500" : ""}`}
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
        </div>
    );
};

export default LatihanSoal;
