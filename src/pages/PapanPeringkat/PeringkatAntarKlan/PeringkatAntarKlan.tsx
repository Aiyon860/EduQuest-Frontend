import { Shield } from "lucide-react";
import { useState, useEffect } from "react";

interface Siswa {
  id_siswa: string;
  nama_depan: string;
  nama_belakang: string;
  poin_total: number;
}

interface Clan {
  id_klan: string;
  nama_klan: string;
  siswa: Siswa[];
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

const PeringkatAntarKlan = () => {
  const [clans, setClans] = useState<Clan[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchClans = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/clan");
        const json: ApiResponse<Clan[]> = await res.json();
        if (json.success) {
          setClans(json.data);
        }
      } catch (err) {
        console.error("Gagal memuat data klan:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchClans();
  }, []);

  const getTotalXP = (anggota: Siswa[]) =>
    anggota.reduce((acc, siswa) => acc + (+siswa.poin_total || 0), 0);

  return (
    <section className="sm:ml-64">
      <div className="px-4 py-8 max-w-screen-xl mx-auto w-xs sm:w-full">
        <h2 className="text-2xl font-bold text-left text-gray-900 mb-6">
          Peringkat Antar Klan
        </h2>

        <div className="relative overflow-x-auto bg-white rounded-sm shadow">
          <table className="w-full text-sm text-center text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">Nama Klan</th>
                <th className="px-6 py-3">Jumlah Anggota</th>
                <th className="px-6 py-3">Kontribusi XP</th>
                <th className="px-6 py-3">Misi Harian</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={4} className="px-6 py-4 text-center">
                    Memuat data...
                  </td>
                </tr>
              ) : (
                clans.map((klan) => (
                  <tr key={klan.id_klan} className="bg-white border-b">
                    <td
                      className="px-6 py-4 flex items-center gap-2 font-medium text-gray-900 whitespace-nowrap cursor-pointer hover:underline"
                      onClick={() =>
                        (window.location.href = `/clans/antarklan?nama=${encodeURIComponent(
                          klan.nama_klan
                        )}`)
                      }
                    >
                      <Shield className="w-6 h-6 text-blue-600" />
                      {klan.nama_klan}
                    </td>
                    <td className="px-6 py-4">{klan.siswa.length}/50</td>
                    <td className="px-6 py-4">
                      {getTotalXP(klan.siswa).toLocaleString()} XP
                    </td>
                    <td className="px-6 py-4">Misi A</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center mt-4 gap-2 items-center text-sm sm:justify-end">
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
