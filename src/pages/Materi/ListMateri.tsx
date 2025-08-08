import BreadcrumbNavigation, { type LinkBreadcrumbType } from "@/components/BreadcrumbNavigation";
import { Link, useLocation } from "react-router";
import { capitalize } from "@/lib/stringManipulation";
import FileUploadModal from "@/components/FileUpload";
import { useState } from "react";
import JumlahSoalModal from "@/components/JumlahSoal";

const ListMateri = () => {
  const [isPilihMateriModalOpen, setIsPilihMateriModalOpen] = useState(false);
  const [isJumlahSoalModalOpen, setIsJumlahSoalModalOpen] = useState(false);

  const { pathname } = useLocation();
  const jenjang = pathname.split("/")[2];
  const tingkat = pathname.split("/")[3];
  const semester = parseFloat(pathname.split("/")[5]);
  const mapel = pathname.split("/")[7];

  const materi = [
    {
      nama: "Proses Terjadinya Hujan",
      slug: "proses-terjadinya-hujan",
    },
    {
      nama: "Hewan Karnivora dan Herbivora",
      slug: "hewan-karnivora-dan-herbivora",
    },
    {
      nama: "Sistem Pencernaan Hewan",
      slug: "sistem-pencernaan-hewan",
    },
    {
      nama: "Rantai Makanan",
      slug: "rantai-makanan",
    },
    {
      nama: "Daur Air",
      slug: "daur-air",
    },
  ];

  const links: LinkBreadcrumbType[] = [
    { label: jenjang.toUpperCase(), href: `/jenjang/${jenjang}` },
    { label: `Kelas ${tingkat}`, href: `/jenjang/${jenjang}/${tingkat}` },
    { label: `Semester ${semester}`, href: `/jenjang/${jenjang}/${tingkat}` },
    { label: capitalize(mapel), href: `/jenjang/${jenjang}/${tingkat}/semester/${semester}` },
    { label: "Materi" },
  ];

  return (
    <section className="sm:ml-64">
      <div className="px-4 py-8 max-w-screen-xl mx-auto w-full flex flex-col gap-4">
        <BreadcrumbNavigation deepLevel={links.length} links={links} />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h2 className="text-2xl font-extrabold text-gray-900">
            Materi Semester {semester} <span className="font-normal">| {capitalize(mapel)}</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="Cari Materi"
              className="border border-gray-300 rounded-full px-4 py-2 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex gap-2">
              <button className="bg-[#003566] text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-blue-800 transition-all hover:cursor-pointer" onClick={() => setIsPilihMateriModalOpen(true)}>
                Pilih File Materi
              </button>
              <FileUploadModal
                endpoint="/api/materi"
                isOpen={isPilihMateriModalOpen}
                onClose={() => setIsPilihMateriModalOpen(false)}
                limitSize={50}
                permittedFormats={["pdf", "doc", "docx"]}
              />
              <button className="bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-orange-600 transition-all hover:cursor-pointer" onClick={() => setIsJumlahSoalModalOpen(true)}>
                Buat Soal
              </button>
              <JumlahSoalModal
                isOpen={isJumlahSoalModalOpen}
                onClose={() => setIsJumlahSoalModalOpen(false)}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {!materi && (
            <p className="text-center text-gray-500">
              Belum ada materi pada semester ini
            </p>
          )}
          {materi && materi.length === 0 && (
            <p className="text-center text-gray-500">
              Belum ada materi pada semester ini
            </p>
          )}
          {materi && materi.length > 0 && materi.map((item, index) => (
            <Link
              to={`/jenjang/${jenjang}/${tingkat}/semester/${semester}/mapel/${mapel}/materi/${item.slug}`}
              key={index}
              className="flex items-center bg-white border border-gray-200 rounded-lg shadow-sm px-2 py-2 hover:bg-gray-200 transition-all hover:cursor-pointer"
            >
              <div className="bg-[#003566] text-white w-10 h-10 flex items-center justify-center rounded-md font-bold mr-4">
                {index + 1}
              </div>
              <span className="text-gray-900 font-medium">{item.nama}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListMateri;
