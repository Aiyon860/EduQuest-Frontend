import { useEffect, useState } from "react";
import { User } from "lucide-react"; // pastikan kamu sudah menginstall lucide-react

const dummyAnggota = [
  {
    nama: "Agus Hat",
    xp: 69000,
    misi: "Misi A",
  },
  {
    nama: "Dimas Laptop",
    xp: 69000,
    misi: "Misi A",
  },
  {
    nama: "Riko Phone",
    xp: 69000,
    misi: "Misi A",
  },
  {
    nama: "Jamal Mouse",
    xp: 69000,
    misi: "Misi A",
  },
  {
    nama: "Budi Clock",
    xp: 69000,
    misi: "Misi A",
  },
  {
    nama: "Deddy T-shirt",
    xp: 69000,
    misi: "Misi A",
  },
  {
    nama: "Owi Monitor",
    xp: 69000,
    misi: "Misi A",
  },
  {
    nama: "Owo Keyboard Ngawi",
    xp: 69000,
    misi: "Misi A",
  },
];

const KlanOrangLain = () => {
  const [namaKlan, setNamaKlan] = useState("Nama Klan");
  const [anggota, setAnggota] = useState(dummyAnggota);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nama = params.get("nama");
    if (nama) setNamaKlan(nama);
  }, []);

  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="px-4 py-8 max-w-screen-xl mx-auto w-2xl">
        <h2 className="text-2xl font-bold text-left text-gray-900 mb-4 uppercase">
          {namaKlan}
        </h2>

        <div className="mb-4 p-4 border rounded-lg bg-white shadow text-sm text-gray-700">
          <p><strong>Motto:</strong> "Belajar itu petualangan, bukan beban."</p>
          <p><strong>Anggota:</strong> {anggota.length} orang</p>
          <p><strong>Total XP Clan:</strong> {anggota.reduce((acc, curr) => acc + curr.xp, 0).toLocaleString()} XP</p>
        </div>

        <button className="mb-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded shadow">
          Masuk Klan
        </button>

        <div className="relative overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">Anggota</th>
                <th scope="col" className="px-6 py-3">Kontribusi XP</th>
                <th scope="col" className="px-6 py-3">Misi Harian</th>
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

export default KlanOrangLain;
