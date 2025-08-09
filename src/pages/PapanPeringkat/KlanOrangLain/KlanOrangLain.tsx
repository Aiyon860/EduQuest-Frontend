import { useEffect, useState } from "react";
import { User } from "lucide-react";

interface AnggotaKlan {
  id_siswa: string;
  nama_depan: string;
  nama_belakang: string;
  poin_total: number;
}

interface Klan {
  id_klan: number;
  nama_klan: string;
  siswa: AnggotaKlan[];
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

interface AnggotaTabel {
  nama: string;
  xp: number;
  misi: string;
}

const KlanOrangLain = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [namaKlan, setNamaKlan] = useState("...");
  const [sudahMasukKlan, setSudahMasukKlan] = useState(false);
  const [anggota, setAnggota] = useState<AnggotaTabel[]>([]);
  const [loading, setLoading] = useState(true);
  const [idKlan, setIdKlan] = useState<number | null>(null);

  useEffect(() => {
    const fetchUserStatus = async () => {
      try {
        const token = sessionStorage.getItem("accessToken");
        if (!token) throw new Error("Token not found");

        const res = await fetch("http://localhost:3000/api/auth/me/full", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        const json: ApiResponse<{ id_klan: number | null }> = await res.json();
        if (json.success && json.data.id_klan) {
          setSudahMasukKlan(true);
        }
      } catch (err) {
        console.error("Gagal cek status user:", err);
      }
    };

    fetchUserStatus();
  }, []);

  useEffect(() => {
    const fetchKlan = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const nama = params.get("nama");
        if (!nama) return;

        const res = await fetch(
          `http://localhost:3000/api/clan/by-name?nama=${encodeURIComponent(nama)}`
        );
        const json: ApiResponse<Klan> = await res.json();

        if (json.success) {
          const klan = json.data;
          setNamaKlan(klan.nama_klan);
          setIdKlan(klan.id_klan);

          const anggotaFormatted: AnggotaTabel[] = klan.siswa.map((s) => ({
            nama: `${s.nama_depan} ${s.nama_belakang}`,
            xp: s.poin_total,
            misi: "Belum tersedia",
          }));

          setAnggota(anggotaFormatted);
        }
      } catch (error) {
        console.error("Gagal memuat klan:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchKlan();
  }, []);

  const handleMasukKlan = async () => {
    if (!idKlan) return alert("ID klan tidak ditemukan");

    const konfirmasi = confirm(`Yakin ingin bergabung dengan klan "${namaKlan}"?`);
    if (!konfirmasi) return;

    try {
      const token = sessionStorage.getItem("accessToken");
      if (!token) throw new Error("Token tidak ditemukan");

      const res = await fetch("http://localhost:3000/api/clan/join", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id_klan: idKlan }),
      });

      const json: ApiResponse<null> = await res.json();
      if (json.success) {
        alert("Berhasil bergabung dengan klan!");
        window.location.href = `/clans/antarklan?nama=${encodeURIComponent(namaKlan)}`;
      } else {
        alert("Gagal bergabung: " + json.message);
      }
    } catch (error) {
      console.error("Error saat masuk klan:", error);
      alert("Terjadi kesalahan saat masuk ke klan.");
    }
  };

  if (loading) {
    return <div className="sm:ml-64 p-6">Loading...</div>;
  }

  return (
    <section className="sm:ml-64">
      <div className="px-4 py-8 max-w-screen-xl mx-auto">
        <h2 className="text-2xl font-bold text-left text-gray-900 mb-4 uppercase">
          {namaKlan}
        </h2>

        <div className="mb-4 p-4 text-left w-full max-w-md rounded-lg bg-white shadow text-sm text-gray-700">
          <p><strong>Motto:</strong> "Belajar itu petualangan, bukan beban."</p>
          <p><strong>Anggota:</strong> {anggota.length} orang</p>
          <p><strong>Total XP Clan:</strong> {anggota.reduce((acc, curr) => acc + curr.xp, 0).toLocaleString()} XP</p>
        </div>

        <div className="flex justify-start gap-2 items-center text-sm">
          <button
            onClick={handleMasukKlan}
            disabled={sudahMasukKlan}
            className={`mb-6 font-semibold py-2 px-4 rounded shadow text-white ${
              sudahMasukKlan ? "bg-gray-400 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600"
            }`}
          >
            {sudahMasukKlan ? "Sudah Bergabung" : "Masuk Klan"}
          </button>
        </div>

        <div className="relative overflow-x-auto bg-white rounded-lg shadow">
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

export default KlanOrangLain;
