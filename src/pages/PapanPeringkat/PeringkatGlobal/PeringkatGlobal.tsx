import { useState, useEffect } from "react";

interface Siswa {
  id_siswa: string;
  nama_depan: string;
  nama_belakang: string;
  poin_total: string;
  id_jenjang: string;
  id_kelas: string;
  id_klan: string;
}

interface Klan {
  id_klan: string;
  nama_klan: string;
}

const getJenjangOptions = () => ["SD", "SMP", "SMA"];
const getKelasOptions = () => Array.from({ length: 12 }, (_, i) => i + 1);

const PeringkatGlobal = () => {
  const [selectedJenjang, setSelectedJenjang] = useState("");
  const [selectedKelas, setSelectedKelas] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dataSiswa, setDataSiswa] = useState<(Siswa & { nama_klan?: string })[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [siswaRes, clanRes] = await Promise.all([
          fetch("http://localhost:3000/api/siswa").then((r) => r.json()),
          fetch("http://localhost:3000/api/clan").then((r) => r.json()),
        ]);

        if (siswaRes.success && clanRes.success) {
          const clans: Klan[] = clanRes.data.map((c: any) => ({
            id_klan: c.id_klan,
            nama_klan: c.nama_klan,
          }));

          const merged = siswaRes.data
            .map((s: Siswa) => {
              const clan = clans.find((c) => c.id_klan === s.id_klan);
              return {
                ...s,
                nama_klan: clan ? clan.nama_klan : "-",
              };
            })
            .sort((a: Siswa, b: Siswa) => Number(b.poin_total) - Number(a.poin_total));

          setDataSiswa(merged);
        }
      } catch (err) {
        console.error("Gagal fetch data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = dataSiswa
    .filter((s) =>
      selectedJenjang ? s.id_jenjang === selectedJenjang : true
    )
    .filter((s) =>
      selectedKelas ? s.id_kelas === selectedKelas : true
    )
    .filter((s) =>
      `${s.nama_depan} ${s.nama_belakang}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
    .map((s, index) => ({
      peringkat: index + 1,
      nama: `${s.nama_depan} ${s.nama_belakang}`,
      xp: Number(s.poin_total),
      klan: s.nama_klan || "-",
    }));

  return (
    <section className="sm:ml-64">
      <div className="px-4 py-8 max-w-screen-xl mx-auto w-xs sm:w-full">
        <div className="grid grid-cols-1 gap-4 mb-6">
          <h2 className="text-2xl font-bold text-left text-gray-900">
            Papan Peringkat Global
          </h2>
          <div className="grid grid-cols-[auto_auto_1fr] items-center gap-2 mb-6 w-full">
            <select
              value={selectedJenjang}
              onChange={(e) => setSelectedJenjang(e.target.value)}
              className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-md w-full"
            >
              <option value="" disabled>
                Jenjang
              </option>
              {getJenjangOptions().map((jenjang, idx) => (
                <option key={idx} value={String(idx + 1)}>
                  {jenjang}
                </option>
              ))}
            </select>
            <select
              value={selectedKelas}
              onChange={(e) => setSelectedKelas(e.target.value)}
              className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-md w-full"
            >
              <option value="" disabled>
                Kelas
              </option>
              {getKelasOptions().map((kelas) => (
                <option key={kelas} value={String(kelas)}>
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.15 6.15z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="relative overflow-x-auto bg-white rounded-lg shadow">
          {loading ? (
            <p className="p-4">Loading...</p>
          ) : (
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3">Peringkat</th>
                  <th className="px-6 py-3">Nama Siswa</th>
                  <th className="px-6 py-3">Total XP</th>
                  <th className="px-6 py-3">Klan</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((siswa, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b border-gray-200"
                  >
                    <th className="px-6 py-4 font-medium text-gray-900">
                      {siswa.peringkat}
                    </th>
                    <td className="px-6 py-4">{siswa.nama}</td>
                    <td className="px-6 py-4">{siswa.xp}</td>
                    <td className="px-6 py-4">{siswa.klan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <div className="flex justify-center gap-2 items-center text-sm m-5 sm:justify-end">
        <button
          className="px-4 py-1.5 rounded-md bg-blue-700 text-white disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          ⬅ Previous
        </button>
        <span className="px-3 py-1.5 rounded bg-white border">1</span>
        <span className="text-gray-500">...</span>
        <span className="px-3 py-1.5 rounded bg-white border">5</span>
        <button
          className="px-4 py-1.5 rounded-md bg-blue-700 text-white"
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next ➡
        </button>
      </div>
    </section>
  );
};

export default PeringkatGlobal;
