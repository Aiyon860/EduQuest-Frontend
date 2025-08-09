import { useEffect, useState } from "react";

type Penghargaan = {
  id_penghargaan: number;
  nama_penghargaan: string;
  detail_penghargaan: string;
  lambang: string;
  tipe_penghargaan: {
    id_tipe_penghargaan: number | string;
    nama_tipe_penghargaan: string;
  };
};

const BadgeGrid = ({ id_tipe_penghargaan }: { id_tipe_penghargaan: number }) => {
  const [badges, setBadges] = useState<Penghargaan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/penghargaan")
      .then((res) => res.json())
      .then((data: Penghargaan[]) => {
        const filtered = data.filter(
          (badge) =>
            Number(badge.tipe_penghargaan.id_tipe_penghargaan) === id_tipe_penghargaan
        );
        setBadges(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal mengambil data penghargaan:", err);
        setLoading(false);
      });
  }, [id_tipe_penghargaan]);

  if (loading) {
    return <div className="text-center text-sm text-gray-500">Loading badges...</div>;
  }

  if (badges.length === 0) {
    return (
      <div className="text-sm text-gray-500">
        Belum ada penghargaan untuk kategori ini.
      </div>
    );
  }

  const kategori = badges[0]?.tipe_penghargaan?.nama_tipe_penghargaan;

  return (
    <div className="mt-4">
      {kategori && (
        <h3 className="text-lg font-semibold mb-2 text-left">{kategori}</h3>
      )}

      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 rounded-md p-2 w-full justify-items-start">
        {badges.map((badge) => (
          <div key={badge.id_penghargaan} className="relative group">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl">
              <span>{badge.lambang}</span>
            </div>

            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 hidden group-hover:flex flex-col items-center bg-white text-gray-900 text-sm rounded-xl p-4 shadow-xl w-56 z-50 transition-all duration-300">
              <div className="text-3xl mb-2">
                <span>{badge.lambang}</span>
              </div>
              <h3 className="font-bold">{badge.nama_penghargaan}</h3>
              <p className="text-center text-xs mt-1">{badge.detail_penghargaan}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BadgeGrid;
