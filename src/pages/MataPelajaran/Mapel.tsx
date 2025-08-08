import Foto from "@/assets/vector.webp";
import {
  type LinkBreadcrumbType,
  BreadcrumbNavigation,
} from "@/components/BreadcrumbNavigation";
import { CircleArrowRight } from "lucide-react";
import { useLocation, Link } from "react-router";
import FileUploadModal from "@/components/FileUpload";
import { useState } from "react";

const dataMapel = [
  {
    nama: "Matematika",
    link: "matematika",
    bg: "/images/bg-matematika.jpg",
    progress: 80,
  },
  { nama: "IPA", link: "ipa", bg: "/images/bg-ipa.jpg", progress: 60 },
  { nama: "IPS", link: "ips", bg: "/images/bg-ips.jpg", progress: 40 },
  { nama: "PKN", link: "pkn", bg: "/images/bg-pkn.jpg", progress: 20 },
  {
    nama: "Bahasa Indonesia",
    link: "bahasa-indonesia",
    bg: "/images/bg-bahasa.jpg",
    progress: 0,
  },
  {
    nama: "Bahasa Inggris",
    link: "bahasa-inggris",
    bg: "/images/bg-inggris.jpg",
    progress: 80,
  },
];

const Mapel = () => {
  const [isFileModalOpen, setIsFileModalOpen] = useState(false);

  const { pathname } = useLocation();
  const semester = parseFloat(pathname.split("/")[5]);

  let valid = true;

  if (semester < 1 || semester > 2) {
    valid = false;
  }

  const jenjang = pathname.split("/")[2];
  const tingkat = pathname.split("/")[3];

  const links: LinkBreadcrumbType[] = [
    { label: jenjang.toUpperCase(), href: `/jenjang/${jenjang}` },
    { label: `Kelas ${tingkat}`, href: `/jenjang/${jenjang}/${tingkat}` },
    { label: `Semester ${semester}`, href: `/jenjang/${jenjang}/${tingkat}` },
    { label: "Mata Pelajaran" },
  ];

  return (
    <section className="sm:ml-64 mb-12">
      <div className="px-4 py-8 max-w-screen-xl mx-auto flex flex-col gap-4">
        <BreadcrumbNavigation deepLevel={links.length} links={links} />
        <div className="w-full flex items-center justify-between">
          <h2 className="text-2xl tracking-tight font-bold text-gray-900">
            Mata Pelajaran
          </h2>
          <button className="m-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all focus:outline-none" onClick={() => setIsFileModalOpen(true)}>
            Pilih File Jadwal
          </button>
          <FileUploadModal
            endpoint="/api/jadwal"
            isOpen={isFileModalOpen}
            onClose={() => setIsFileModalOpen(false)}
            limitSize={1}
            permittedFormats={["xlsx"]}
          />
        </div>
        {!valid && (
          <p className="text-center text-gray-500">
            Maaf, tidak ada mata pelajaran pada semester ini
          </p>
        )}
        {valid && dataMapel.length === 0 && (
          <p className="text-center text-gray-500">
            Belum ada mata pelajaran pada semester ini
          </p>
        )}
        {valid && dataMapel.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
            {dataMapel.map((mapel, index) => (
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
                      mapel.progress < 25
                        ? "bg-[#FFD7D7]"
                        : mapel.progress < 50
                        ? "bg-[#FFF5CC]"
                        : "bg-[#D1FFDB]"
                    } rounded-full mt-2`}
                  >
                    <div
                      className={`h-2 ${
                        mapel.progress < 25
                          ? "bg-[#FF4A4A]"
                          : mapel.progress < 50
                          ? "bg-[#FFB200]"
                          : "bg-[#13C525]"
                      } rounded-full`}
                      style={{ width: `${mapel.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm">{mapel.progress}%</span>
                </div>
                <h5 className="text-lg font-bold text-gray-800">
                  {mapel.nama}
                </h5>
                <Link
                  to={`${pathname.replace(/\/$/, "")}/mapel/${mapel.link}`}
                  className="w-full mt-1 px-3 py-2 text-sm text-center font-medium text-white bg-[#FF6D00] rounded-lg hover:brightness-90 flex items-center justify-center gap-2 transition-all"
                >
                  <span>Pilih Mapel</span>
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

export default Mapel;
