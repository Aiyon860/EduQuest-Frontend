import { Shield, User } from "lucide-react";
import { useState } from "react";
const generateClanMembers = () => [
  { nama: "Agus Hat", xp: 69000, misi: "Misi A" },
  { nama: "Dimas Laptop", xp: 69000, misi: "Misi A" },
  { nama: "Riko Phone", xp: 69000, misi: "Misi A" },
  { nama: "Jamal Mouse", xp: 69000, misi: "Misi A" },
  { nama: "Budi Clock", xp: 69000, misi: "Misi A" },
  { nama: "Deddy T-shirt", xp: 69000, misi: "Misi A" },
  { nama: "Owi Monitor", xp: 69000, misi: "Misi A" },
  { nama: "Owo Keyboard Ngawi", xp: 69000, misi: "Misi A" },
];

const KlanSaya = () => {
  const anggota = generateClanMembers();
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <section className="sm:ml-64">
      <div className="px-4 py-8 max-w-screen-xl mx-auto w-xs sm:w-full text-left">
        <h2 className="text-3xl font-bold mb-8">NGAWI SITE KLAN</h2>

        <div className="bg-white rounded-lg shadow p-4 mb-6 w-full max-w-md">
          <p>Peringkat: <strong>#2</strong> dari 24 Clan</p>
          <p>Anggota: <strong>{anggota.length} orang</strong></p>
          <p>Total XP Clan: <strong>74.300 XP</strong></p>
        </div>

        <div className="flex gap-4 mb-6">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg">Keluar Klan</button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg">Log Aktivitas</button>
        </div>

        <div className="relative overflow-x-auto bg-white rounded-lg shadow w-full">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">Anggota</th>
                <th className="px-6 py-3">Kontribusi XP</th>
                <th className="px-6 py-3">Misi Harian</th>
              </tr>
            </thead>
            <tbody>
              {anggota.map((item, index) => (
                <tr key={index} className="bg-white border-b border-gray-200">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                    {item.nama}
                  </td>
                  <td className="px-6 py-4">{item.xp.toLocaleString()} XP</td>
                  <td className="px-6 py-4">{item.misi}</td>
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

export default KlanSaya;
