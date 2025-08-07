import Foto from "@/assets/vector.webp";
import { CircleArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router";

const dataSemester = [
  { nama: "Semester 1", link: "1", progress: 80 },
  { nama: "Semester 2", link: "2", progress: 40 },
];

const Semester = () => {
  const { pathname } = useLocation();
  const jenjang = pathname.split("/")[2];
  const kelas = parseInt(pathname.split("/")[3]);

  let valid = true;

  if (jenjang === "sd" && !(kelas >= 1 && kelas <= 6)) {
    valid = false;
  }

  if (jenjang === "smp" && !(kelas >= 7 && kelas <= 9)) {
    valid = false;
  }

  if (jenjang === "sma" && !(kelas >= 10 && kelas <= 12)) {
    valid = false;
  }

  return (
    <section className="sm:ml-64 mb-12">
      <div className="px-4 py-8 max-w-screen-xl mx-auto">
        <div className="w-full flex flex-col items-center justify-between mb-10 sm:flex-row">
          <h2 className="text-2xl tracking-tight font-bold text-gray-900">
            Semester
          </h2>
          <button className="m-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg">
            Pilih File Jadwal
          </button>
        </div>
        {valid ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
            {dataSemester.map((semester, index) => (
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
                    style={{ width: `${semester.progress}%` }}
                  ></div>
                </div>
                <h5 className="text-lg font-bold text-gray-800">
                  {semester.nama}
                </h5>
              <Link
                to={`${pathname.replace(/\/$/, "")}/semester/${semester.link}`}
                className="w-full mt-1 px-3 py-2 text-sm text-center font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 flex items-center justify-center gap-2 transition-colors"
              >
                <span>Pilih Semester</span>
                <CircleArrowRight className="w-4 h-4"/>
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

export default Semester;
