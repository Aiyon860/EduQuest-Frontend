import Foto from "@/assets/vector.webp";
import { CircleArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router";

const dataKelas = [
  { nama: "Kelas 1", link: "1", bg: "/images/bg-kelas1.jpg", progress: 80 },
  { nama: "Kelas 2", link: "2", bg: "/images/bg-kelas2.jpg", progress: 60 },
  { nama: "Kelas 3", link: "3", bg: "/images/bg-kelas3.jpg", progress: 40 },
  { nama: "Kelas 4", link: "4", bg: "/images/bg-kelas4.jpg", progress: 20 },
  { nama: "Kelas 5", link: "5", bg: "/images/bg-kelas5.jpg", progress: 10 },
  { nama: "Kelas 6", link: "6", bg: "/images/bg-kelas6.jpg", progress: 80 },
  { nama: "Kelas 7", link: "7", bg: "/images/bg-kelas7.jpg", progress: 80 },
  { nama: "Kelas 8", link: "8", bg: "/images/bg-kelas8.jpg", progress: 60 },
  { nama: "Kelas 9", link: "9", bg: "/images/bg-kelas9.jpg", progress: 40 },
  { nama: "Kelas 10", link: "10", bg: "/images/bg-kelas10.jpg", progress: 20 },
  { nama: "Kelas 11", link: "11", bg: "/images/bg-kelas11.jpg", progress: 40 },
  { nama: "Kelas 12", link: "12", bg: "/images/bg-kelas12.jpg", progress: 80 },
];

const Kelas = () => {
  const { pathname } = useLocation();
  const kelas = pathname.split("/").pop();
  let start = 0;
  let end = 0;

  if (kelas === "sd") {
    start = 0;
    end = 5;
  } else if (kelas === "smp") {
    start = 6;
    end = 8;
  } else if (kelas === "sma") {
    start = 9;
    end = 11;
  }

  return (
    <section className="sm:ml-64">
      <div className="px-4 py-8 max-w-screen-xl mx-auto">
        <div className="w-full flex flex-col items-center justify-between mb-5 sm:flex-row">
          <h2 className="text-2xl tracking-tight font-bold text-gray-900">
            Kelas {kelas?.toUpperCase() ?? "-"}
          </h2>
        </div>
        
        {kelas === "sd" || kelas === "smp" || kelas === "sma" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
            {dataKelas.slice(start, end + 1).map((kelas, index) => (
              <div
                key={index}
                className="w-full h-96 rounded-2xl shadow-lg flex flex-col justify-center p-4 bg-white gap-4"
              >
                <div className="w-full h-52 bg-white rounded-lg">
                  <img
                    src={Foto}
                    alt="gambar misi harian"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <div className="w-full flex gap-4">
                  <div className={`w-full h-2 ${kelas.progress < 25 ? "bg-[#FFD7D7]" : kelas.progress < 50 ? "bg-[#FFF5CC]" : "bg-[#D1FFDB]"} rounded-full mt-2`}>
                    <div
                      className={`h-2 ${kelas.progress < 25 ? "bg-[#FF4A4A]" : kelas.progress < 50 ? "bg-[#FFB200]" : "bg-[#13C525]"} rounded-full`}
                      style={{ width: `${kelas.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm">{kelas.progress}%</span>
                </div>
                <h5 className="text-lg font-bold text-gray-800">
                  {kelas.nama}
                </h5>
                <Link
                  to={`${pathname.replace(/\/$/, "")}/${kelas.link}`}
                  className="w-full mt-1 px-3 py-2 text-sm text-center font-medium text-white bg-[#FF6D00] rounded-lg hover:brightness-90 flex items-center justify-center gap-2 transition-all"
                >
                  <span>Masuk Kelas</span>
                  <CircleArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            Maaf, kelas tidak ditemukan
          </p>
        )}
      </div>
    </section>
  );
};

export default Kelas;
