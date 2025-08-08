import BreadcrumbNavigation, { type LinkBreadcrumbType } from "@/components/BreadcrumbNavigation";
import { useLocation } from "react-router";
import { capitalize } from "@/lib/stringManipulation";

const DetailMateri = () => {
  const { pathname } = useLocation();

  const jenjang = pathname.split("/")[2];
  const tingkat = pathname.split("/")[3];
  const semester = parseFloat(pathname.split("/")[5]);
  const mapel = pathname.split("/")[7];
  const namaMateri = pathname.split("/")[9];

  const unsluggedNamaMateri = namaMateri.replace(/-/g, " ");

  const links: LinkBreadcrumbType[] = [
    { label: jenjang.toUpperCase(), href: `/jenjang/${jenjang}` },
    { label: `Kelas ${tingkat}`, href: `/jenjang/${jenjang}/${tingkat}` },
    { label: `Semester ${semester}`, href: `/jenjang/${jenjang}/${tingkat}/semester/${semester}` },
    { label: capitalize(mapel), href: `/jenjang/${jenjang}/${tingkat}/semester/${semester}/mapel/${mapel}` },
    { label: "Materi", href: `/jenjang/${jenjang}/${tingkat}/semester/${semester}/mapel/${mapel}`},
    { label: capitalize(unsluggedNamaMateri) },

  ];

  return (
    <section className="sm:ml-64">
      <div className="w-full px-4 py-10 max-w-screen-xl mx-auto flex flex-col gap-8">
        <BreadcrumbNavigation deepLevel={links.length} links={links} />

        <div className="flex flex-col gap-4">
          <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-sm px-4 py-3">
            <div className="bg-[#003566] text-white w-10 h-10 flex items-center justify-center rounded-md font-bold mr-4">
              1
            </div>
            <span className="text-gray-900 font-medium text-base">
              {capitalize(unsluggedNamaMateri)}
            </span>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
            <div className="space-y-4 text-gray-800 text-justify text-sm leading-relaxed">
              <p>
                Proses terjadinya hujan berawal dari sinar matahari yang membawa
                energi panas menyebabkan adanya proses evaporasi. Dalam proses
                evaporasi, air yang berada di bumi (laut, danau, sungai serta
                badan air lainnya) menguap karena panas tersebut lalu menghasilkan
                uap-uap air. Uap-uap air terangkat ke udara dan mengalami proses
                kondensasi.
              </p>
              <p>
                Dalam proses kondensasi, uap-uap air berubah menjadi embun yang
                diakibatkan oleh suhu di sekitar uap air lebih rendah daripada
                titik embun air. Suhu udara yang semakin tinggi membuat
                titik-titik dari embun semakin banyak dan memadat lalu membentuk
                menjadi awan.
              </p>
              <p>
                Adanya perbedaan tekanan udara di langit menyebabkan pergerakan
                udara atau yang biasa kita kenal dengan angin. Angin menggerakkan
                awan yang membawa butir-butir air menuju tempat dengan suhu yang
                lebih rendah. Awan-awan yang terkumpul bergabung menjadi awan
                besar yang berwarna kelabu (proses ini dinamakan koalensi).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailMateri;
