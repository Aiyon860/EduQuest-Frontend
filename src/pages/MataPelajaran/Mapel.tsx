import Foto from "@/assets/vector.webp";
import { CircleArrowRight } from "lucide-react";
import { useLocation, Link } from "react-router";

const dataMapel = [
  { nama: "Matematika", link: "matematika", bg: "/images/bg-matematika.jpg", progress: 80 },
  { nama: "IPA", link: "ipa", bg: "/images/bg-ipa.jpg", progress: 60 },
  { nama: "IPS", link: "ips", bg: "/images/bg-ips.jpg", progress: 40 },
  { nama: "PKN", link: "pkn", bg: "/images/bg-pkn.jpg", progress: 20 },
  { nama: "Bahasa Indonesia", link: "bahasa-indonesia", bg: "/images/bg-bahasa.jpg", progress: 0 },
  { nama: "Bahasa Inggris", link: "bahasa-inggris", bg: "/images/bg-inggris.jpg", progress: 80 },
];

const Mapel = () => {
  const { pathname } = useLocation();
  const semester = parseInt(pathname.split("/")[4]);

  let valid = true;

  if (semester < 1 || semester > 2) {
    valid = false;
  }

  return (
    <section className="sm:ml-64 mb-12">
      <div className="px-4 py-8 max-w-screen-xl mx-auto">
        <div className="w-full flex flex-col items-center justify-between mb-10 sm:flex-row">
          <h2 className="text-2xl tracking-tight font-bold text-gray-900">
            Mata Pelajaran
          </h2>
          <button className="m-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg">
            Pilih File Jadwal
          </button>
        </div>
        {valid ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {dataMapel.map((mapel, index) => (
            <div
                key={index}
                className="w-full h-auto rounded-2xl shadow-lg flex flex-col justify-center p-4 bg-white gap-4"
            >
              <div className="w-full h-72 bg-white rounded-lg">
                <img src={Foto} alt="gambar misi harian" className="object-cover w-full h-full rounded-lg" />
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                  <div
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: `${mapel.progress}%` }}
                  ></div>
                </div>
                <h5 className="text-lg font-bold text-gray-800">
                  {mapel.nama}
                </h5>
                <Link
                to={`${pathname.replace(/\/$/, "")}/mapel/${mapel.link}`}
                className="w-full mt-1 px-3 py-2 text-sm text-center font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 flex items-center justify-center gap-2 transition-colors"
              >
                <span>Pilih Mapel</span>
                <CircleArrowRight className="w-4 h-4"/>
              </Link>
            </div>
          ))}
        </div>
        ) : (
          <p className="text-center text-gray-500">
            Maaf, semester tidak ditemukan
          </p>
        )}
      </div>
    </section>
  );
};

export default Mapel;
