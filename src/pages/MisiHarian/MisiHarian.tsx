import Foto from "@/assets/vector.webp";
import { CircleArrowRight } from "lucide-react";
import { Link } from "react-router";

const dataMapel = [
  {
    nama: "Matematika",
    link: "#",
    bg: "/images/bg-matematika.jpg",
    kelas: "Kelas 9",
    materi: "Persamaan Kuadrat",
  },
  {
    nama: "IPA",
    link: "#",
    bg: "/images/bg-ipa.jpg",
    kelas: "Kelas 8",
    materi: "Sistem Pernapasan",
  },
  {
    nama: "IPS",
    link: "#",
    bg: "/images/bg-ips.jpg",
    kelas: "Kelas 7",
    materi: "Kerajaan Hindu Buddha",
  },
];

const MisiHarian = () => {
  return (
    <section className="sm:ml-64">
      <div className="px-4 py-8 max-w-screen mx-auto">
        <div className="w-full flex flex-col items-center justify-between mb-10 sm:flex-row">
          <h2 className="text-3xl tracking-tight font-bold text-gray-900">
            Misi Harian
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
          {dataMapel.map((mapel, index) => (
            <div
              key={index}
              className="w-full h-96 rounded-2xl shadow-lg flex flex-col justify-center p-4 bg-white gap-4"
            >
              <div className="w-full h-52 bg-white rounded-lg">
                <img src={Foto} alt="gambar misi harian" className="object-cover w-full h-full rounded-lg" />
              </div>
              <div className="bg-white rounded-b-lg mt-auto text-left">
                <h5 className="text-lg font-bold text-gray-800">
                  {mapel.nama}
                </h5>
                <p className="text-sm text-gray-700">Kelas: {mapel.kelas}</p>
                <p className="text-sm text-gray-700 mb-2">
                  Materi: {mapel.materi}
                </p>
              </div>
              <Link
                to={mapel.link}
                className="w-full mt-1 px-3 py-2 text-sm text-center font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 flex items-center justify-center gap-2 transition-colors"
              >
                <span>Kerjakan</span>
                <CircleArrowRight className="w-4 h-4"/>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MisiHarian;
