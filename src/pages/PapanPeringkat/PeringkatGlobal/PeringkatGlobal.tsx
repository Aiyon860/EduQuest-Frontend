import { useState } from "react";

const generateSiswaDummy = () => {
    return [
        { peringkat: 1, nama: "Ahmad R", xp: 1250, klan: "Singa" },
        { peringkat: 2, nama: "Bella S", xp: 1200, klan: "Elang" },
        { peringkat: 3, nama: "Citra L", xp: 1150, klan: "Singa" },
        { peringkat: 4, nama: "Dion T", xp: 1120, klan: "Macan" },
        { peringkat: 5, nama: "Eka M", xp: 1100, klan: "Elang" },
        { peringkat: 6, nama: "Fajar N", xp: 1070, klan: "Singa" },
        { peringkat: 7, nama: "Gina P", xp: 1050, klan: "Macan" },
        { peringkat: 8, nama: "Hari Q", xp: 1025, klan: "Elang" },
        { peringkat: 9, nama: "Intan R", xp: 1000, klan: "Macan" },
        { peringkat: 10, nama: "Joko S", xp: 980, klan: "Singa" },
    ];
};

const getJenjangOptions = () => ["SD", "SMP", "SMA"];
const getKelasOptions = () => Array.from({ length: 12 }, (_, i) => i + 1);

const currentData = generateSiswaDummy();

const PeringkatGlobal = () => {
    const [selectedJenjang, setSelectedJenjang] = useState("");
    const [selectedKelas, setSelectedKelas] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <section className="sm:ml-64">

            <div className="px-4 py-8 max-w-screen-xl mx-auto w-xs sm:w-full">
                <div className="grid grid-cols-1 gap-4 mb-6">
                    <h2 className="text-2xl font-bold text-left text-gray-900">Papan Peringkat Global</h2>
                    <div className="grid grid-cols-[auto_auto_1fr] md:grid-cols-[auto_auto_1fr] items-center gap-2 md:gap-4 mb-6 w-full">
                        <select
                            value={selectedJenjang}
                            onChange={(e) => setSelectedJenjang(e.target.value)}
                            className="bg-orange-500 text-white text-left font-semibold px-4 py-2 rounded-md focus:outline-none w-full"
                        >
                            <option value="" disabled selected>
                                Jenjang
                            </option>
                            {getJenjangOptions().map((jenjang) => (
                                <option key={jenjang} value={jenjang}>
                                    {jenjang}
                                </option>
                            ))}
                        </select>
                        <select
                            value={selectedKelas}
                            onChange={(e) => setSelectedKelas(e.target.value)}
                            className="bg-orange-500 text-white text-left font-semibold px-4 py-2 rounded-md focus:outline-none w-full"
                        >
                            <option value="" disabled selected>
                                Kelas
                            </option>
                            {getKelasOptions().map((kelas) => (
                                <option key={kelas} value={kelas}>
                                    {kelas}
                                </option>
                            ))}
                        </select>
                        <div className="relative w-full">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Cari Peringkat"
                                className="border rounded-full px-4 py-2 pl-10 w-full focus:outline-none"
                            />
                            <svg
                                className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.15 6.15z" />
                            </svg>
                        </div>
                    </div>

                </div>

                <div className="relative overflow-x-auto bg-white rounded-lg shadow">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">Peringkat</th>
                                <th scope="col" className="px-6 py-3">Nama Siswa</th>
                                <th scope="col" className="px-6 py-3">Total XP</th>
                                <th scope="col" className="px-6 py-3">Klan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.map((siswa, index) => (
                                <tr key={index} className="bg-white border-b border-gray-200">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {siswa.peringkat}
                                    </th>
                                    <td className="px-6 py-4">{siswa.nama}</td>
                                    <td className="px-6 py-4">{siswa.xp}</td>
                                    <td className="px-6 py-4">{siswa.klan}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex justify-center gap-2 items-center text-sm m-5 sm:justify-end">
                <button
                    className="px-4 py-1.5 rounded-md bg-blue-700 text-white flex items-center gap-1 disabled:opacity-50"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    ⬅ Previous
                </button>
                <span className="px-3 py-1.5 rounded bg-white border">1</span>
                <span className="text-gray-500">...</span>
                <span className="px-3 py-1.5 rounded bg-white border">5</span>
                <button
                    className="px-4 py-1.5 rounded-md bg-blue-700 text-white flex items-center gap-1"
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                    Next ➡
                </button>
            </div>
        </section>
    );
};

export default PeringkatGlobal;
