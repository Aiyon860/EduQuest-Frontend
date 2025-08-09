import { useEffect, useState } from "react";

interface Aktivitas {
  id_aktivitas_terakhir: string;
  id_jenis_aktivitas_terakhir: string;
  nama_aktivitas_terakhir: string;
  detail_aktivitas: string;
  tanggal_aktivitas_terakhir: string;
}

interface ApiResponse {
  success: boolean;
  data: Aktivitas[];
}

const AktivitasTerakhir = () => {
  const [aktivitas, setAktivitas] = useState<Aktivitas[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const icons = ["📅", "🎯", "🏆", "💡", "📚", "🔥"];

  useEffect(() => {
    const fetchAktivitas = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/aktivitas-terakhir");
        const json: ApiResponse = await res.json();
        if (json.success) {
          setAktivitas(json.data);
        }
      } catch (error) {
        console.error("Gagal fetch aktivitas terakhir:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAktivitas();
  }, []);

  const formatTanggal = (tanggalISO: string) => {
    const dateObj = new Date(tanggalISO);
    return dateObj.toLocaleString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow">
      <h2 className="text-xl font-bold text-gray-900 mb-6 text-left">
        Aktivitas Terakhir
      </h2>
      {loading ? (
        <p className="text-gray-500">Memuat...</p>
      ) : (
        <ul className="space-y-4">
          {aktivitas.map((item) => {
            const randomIcon = icons[Math.floor(Math.random() * icons.length)];
            return (
              <li
                key={item.id_aktivitas_terakhir}
                className="flex items-start space-x-4 text-left"
              >
                <div className={`p-3 rounded-xl text-xl bg-purple-100`}>
                  <span>{randomIcon}</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">
                    {item.detail_aktivitas}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {formatTanggal(item.tanggal_aktivitas_terakhir)}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default AktivitasTerakhir;
