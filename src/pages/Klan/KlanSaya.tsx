import { User } from "lucide-react";
import { useState, useEffect } from "react";

interface Anggota {
  id_siswa: string;
  nama_depan: string;
  nama_belakang: string;
  poin_total: number;
}

interface Klan {
  id_klan: string;
  nama_klan: string;
  poin_total: number;
}

interface ProfileClan {
  klan: Klan | null;
  anggota: Anggota[];
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

const KlanSaya = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [profile, setProfile] = useState<ProfileClan | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClanData = async () => {
      try {
        const token = sessionStorage.getItem("accessToken");
        if (!token) throw new Error("Token not found");

        const res = await fetch("http://localhost:3000/api/clan/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const json: ApiResponse<ProfileClan> = await res.json();
        if (json.success) {
          setProfile(json.data);
        }
      } catch (err) {
        console.error("Gagal memuat klan:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchClanData();
  }, []);

  const handleKeluarKlan = async () => {
    const konfirmasi = confirm("Apakah kamu yakin ingin keluar dari klan?");
    if (!konfirmasi) return;

    try {
      const token = sessionStorage.getItem("accessToken");
      if (!token) throw new Error("Token tidak ditemukan");

      const res = await fetch("http://localhost:3000/api/clan/leave", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const json: ApiResponse<null> = await res.json();
      if (json.success) {
        alert("Berhasil keluar dari klan");
        setProfile({ klan: null, anggota: [] });
      } else {
        alert("Gagal keluar dari klan: " + json.message);
      }
    } catch (error) {
      console.error("Error saat keluar klan:", error);
      alert("Terjadi kesalahan saat keluar dari klan.");
    }
  };

  return (
    <section className="sm:ml-64">
      <div className="px-4 py-8 max-w-screen-xl mx-auto w-xs sm:w-full text-left">
        <h2 className="text-3xl font-bold mb-8">
          {loading
            ? "Memuat klan..."
            : profile?.klan?.nama_klan ?? "Nama klan tidak ditemukan"}
        </h2>

        <div className="bg-white rounded-lg shadow p-4 mb-6 w-full max-w-md">
          <p>
            Peringkat: <strong>#2</strong> dari 24 Clan
          </p>
          <p>
            Anggota: <strong>{profile?.anggota.length ?? 0} orang</strong>
          </p>
          <p>
            Total XP Clan: <strong>{profile?.klan?.poin_total ?? 0} XP</strong>
          </p>
        </div>

        <div className="flex gap-4 mb-6">
          <button
            onClick={handleKeluarKlan}
            disabled={!profile?.klan}
            className={`px-6 py-2 rounded-lg font-semibold text-white ${profile?.klan
                ? "bg-orange-500 hover:bg-orange-600"
                : "bg-gray-400 cursor-not-allowed"
              }`}
          >
            Keluar Klan
          </button>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg">
            Log Aktivitas
          </button>
          <button
            onClick={() => (window.location.href = "/clans/buat")}
            disabled={!!profile?.klan}
            className={`font-semibold px-6 py-2 rounded-lg text-white ${profile?.klan
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600"
              }`}
          >
            Buat Klan
          </button>

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
              {profile?.anggota.map((item, index) => (
                <tr key={index} className="bg-white border-b border-gray-200">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                    {item.nama_depan} {item.nama_belakang}
                  </td>
                  <td className="px-6 py-4">
                    {item.poin_total.toLocaleString()} XP
                  </td>
                  <td className="px-6 py-4">Misi A</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
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
