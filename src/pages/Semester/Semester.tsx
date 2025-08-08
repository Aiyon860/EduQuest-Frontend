import Foto from "@/assets/vector.webp";
import BreadcrumbNavigation, {
  type LinkBreadcrumbType,
} from "@/components/BreadcrumbNavigation";
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

  const links: LinkBreadcrumbType[] = [
    { label: jenjang.toUpperCase(), href: `/jenjang/${jenjang}` },
    { label: `Kelas ${kelas}`, href: `/jenjang/${jenjang}` },
    { label: "Semester" },
  ];

  return (
    <section className="sm:ml-64 mb-12">
      <div className="px-4 py-8 max-w-screen-xl mx-auto flex flex-col gap-4">
        <BreadcrumbNavigation deepLevel={links.length} links={links} />
        <div className="w-full flex items-center justify-between">
          <h2 className="text-2xl tracking-tight font-bold text-gray-900">
            Semester
          </h2>
        </div>
        {!valid && (
          <p className="text-center text-gray-500">
            Maaf, tidak ada semester pada kelas ini
          </p>
        )}
        {valid && dataSemester.length === 0 && (
          <p className="text-center text-gray-500">
            Belum ada semester pada kelas ini
          </p>
        )}
        {valid && dataSemester.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
            {dataSemester.map((semester, index) => (
                <div
                  key={index}
                  className="w-full h-auto rounded-2xl shadow-lg flex flex-col justify-center p-4 bg-white gap-4"
                >
                  <div className="w-full h-72 bg-white rounded-lg">
                    <img
                      src={Foto}
                      alt="gambar misi harian"
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                  <div className="w-full flex gap-4">
                    <div
                      className={`w-full h-2 ${
                        semester.progress < 25
                          ? "bg-[#FFD7D7]"
                          : semester.progress < 50
                          ? "bg-[#FFF5CC]"
                          : "bg-[#D1FFDB]"
                      } rounded-full mt-2`}
                    >
                      <div
                        className={`h-2 ${
                          semester.progress < 25
                            ? "bg-[#FF4A4A]"
                            : semester.progress < 50
                            ? "bg-[#FFB200]"
                            : "bg-[#13C525]"
                        } rounded-full`}
                        style={{ width: `${semester.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm">{semester.progress}%</span>
                  </div>
                  <h5 className="text-lg font-bold text-gray-800">
                    {semester.nama}
                  </h5>
                  <Link
                    to={`${pathname.replace(/\/$/, "")}/semester/${
                      semester.link
                    }`}
                    className="w-full mt-1 px-3 py-2 text-sm text-center font-medium text-white bg-[#FF6D00] rounded-lg hover:brightness-90 flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Pilih Semester</span>
                    <CircleArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Semester;
