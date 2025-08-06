import { Shield } from "lucide-react";
import { useState } from "react";

const dummyData = [
  {
    namaKlan: "EduQuest Emperor",
    avatar: "https://via.placeholder.com/40",
    jumlahAnggota: "50/50",
    kontribusiXP: "69.000 XP",
    misiHarian: "Misi A",
  },
  // Duplikat sesuai jumlah baris di tabel
  {
    namaKlan: "EduQuest Emperor",
    avatar: "https://via.placeholder.com/40",
    jumlahAnggota: "50/50",
    kontribusiXP: "69.000 XP",
    misiHarian: "Misi A",
  },
  {
    namaKlan: "EduQuest Emperor",
    avatar: "https://via.placeholder.com/40",
    jumlahAnggota: "50/50",
    kontribusiXP: "69.000 XP",
    misiHarian: "Misi A",
  },
  {
    namaKlan: "EduQuest Emperor",
    avatar: "https://via.placeholder.com/40",
    jumlahAnggota: "50/50",
    kontribusiXP: "69.000 XP",
    misiHarian: "Misi A",
  },
  {
    namaKlan: "EduQuest Emperor",
    avatar: "https://via.placeholder.com/40",
    jumlahAnggota: "50/50",
    kontribusiXP: "69.000 XP",
    misiHarian: "Misi A",
  },
  {
    namaKlan: "EduQuest Emperor",
    avatar: "https://via.placeholder.com/40",
    jumlahAnggota: "50/50",
    kontribusiXP: "69.000 XP",
    misiHarian: "Misi A",
  },
  {
    namaKlan: "EduQuest Emperor",
    avatar: "https://via.placeholder.com/40",
    jumlahAnggota: "50/50",
    kontribusiXP: "69.000 XP",
    misiHarian: "Misi A",
  },
  {
    namaKlan: "EduQuest Emperor",
    avatar: "https://via.placeholder.com/40",
    jumlahAnggota: "50/50",
    kontribusiXP: "69.000 XP",
    misiHarian: "Misi A",
  },
];

const PeringkatAntarKlan = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="px-4 py-8 max-w-screen-xl mx-auto w-2xl">
        <h2 className="text-2xl font-bold text-left text-gray-900 mb-6">
          Peringkat Antar Klan
        </h2>

        <div className="relative overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nama Klan
                </th>
                <th scope="col" className="px-6 py-3">
                  Jumlah Anggota
                </th>
                <th scope="col" className="px-6 py-3">
                  Kontribusi XP
                </th>
                <th scope="col" className="px-6 py-3">
                  Misi Harian
                </th>
              </tr>
            </thead>
            <tbody>
                {dummyData.map((klan, index) => (
                    <tr key={index} className="bg-white border-b">
                    <td
                        className="px-6 py-4 flex items-center gap-2 font-medium text-gray-900 whitespace-nowrap cursor-pointer hover:underline"
                        onClick={() => window.location.href = `/clans/oranglain?nama=${encodeURIComponent(klan.namaKlan)}`}

                    >
                        <Shield className="w-6 h-6 text-blue-600" />
                        {klan.namaKlan}
                    </td>

                <td className="px-6 py-4">{klan.jumlahAnggota}</td>
                <td className="px-6 py-4">{klan.kontribusiXP}</td>
                <td className="px-6 py-4">{klan.misiHarian}</td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end mt-4 gap-2 items-center text-sm">
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
      </div>
    </section>
  );
};

export default PeringkatAntarKlan;
