import { Shield, User } from "lucide-react";
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

  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="px-4 py-8 max-w-screen-xl mx-auto w-3xl">
        <h2 className="text-3xl font-bold mb-2">NGAWI SITE KLAN</h2>

        <div className="bg-white border rounded-lg shadow p-4 mb-6 w-full max-w-md">
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
    </section>
  );
};

export default KlanSaya;
