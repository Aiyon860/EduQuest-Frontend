import {
  type LinkBreadcrumbType,
  BreadcrumbNavigation,
} from "@/components/BreadcrumbNavigation";
import { CircleArrowRight } from "lucide-react";
import { useLocation, Link } from "react-router";
import FileUploadModal from "@/components/FileUpload";
import { useState, useEffect } from "react";
import { capitalize, slugify } from "@/lib/stringManipulation";
import bgMapel1 from "@/assets/mapel/bg-mapel-1.webp";
import bgMapel2 from "@/assets/mapel/bg-mapel-2.webp";
import bgMapel3 from "@/assets/mapel/bg-mapel-3.webp";
import bgMapel4 from "@/assets/mapel/bg-mapel-4.webp";

interface MataPelajaran {
  id_mata_pelajaran: string;
  nama_mata_pelajaran: string;
  progress: number;
}

const bgVariants = [
  bgMapel1,
  bgMapel2,
  bgMapel3,
  bgMapel4,
];

const Mapel = () => {
  const [isFileModalOpen, setIsFileModalOpen] = useState(false);
  const [mapelData, setMapelData] = useState<MataPelajaran[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { pathname } = useLocation();
  const semester = parseFloat(pathname.split("/")[5]);
  const jenjang = pathname.split("/")[2];
  const tingkat = pathname.split("/")[3];

  const valid = semester >= 1 && semester <= 2;

  const links: LinkBreadcrumbType[] = [
    { label: jenjang.toUpperCase(), href: `/jenjang/${jenjang}` },
    { label: `Kelas ${tingkat}`, href: `/jenjang/${jenjang}/${tingkat}` },
    { label: `Semester ${semester}`, href: `/jenjang/${jenjang}/${tingkat}` },
    { label: "Mata Pelajaran" },
  ];

  useEffect(() => {
    if (!valid) return;
  
    const fetchData = async () => {
      setLoading(true);
  
      const callApi = async (token: string) => {
        const res = await fetch(`/api/mapel/${jenjang}/${tingkat}/${semester}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) {
          if (res.status === 401) throw new Error("unauthorized");
          throw new Error("Failed to fetch data");
        }
        return res.json();
      };
  
      try {
        const token = sessionStorage.getItem("accessToken");
        if (!token) throw new Error("no_token");
  
        let data;
        try {
          data = await callApi(token);
        } catch (err) {
          if ((err as Error).message === "unauthorized") {
            const refreshToken = localStorage.getItem("refreshToken");

            const refreshRes = await fetch("/api/auth/refresh", {
              method: "POST",
              headers: {
                Authorization: `Bearer ${refreshToken}`,
              },
            });
            if (!refreshRes.ok) throw new Error("refresh_failed");
  
            const refreshData = await refreshRes.json();
            if (!refreshData.accessToken) throw new Error("invalid_refresh_response");
  
            sessionStorage.removeItem("accessToken");
            sessionStorage.setItem("accessToken", refreshData.accessToken);
  
            data = await callApi(refreshData.accessToken);
          } else {
            throw err;
          }
        }
  
        setMapelData(data.data || []);
        setError(null);
      } catch (err) {
        setError((err as Error).message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [jenjang, tingkat, semester, valid]);
  

  return (
    <section className="sm:ml-64 mb-12">
      <div className="px-4 py-8 max-w-screen-xl mx-auto flex flex-col gap-4">
        <BreadcrumbNavigation deepLevel={links.length} links={links} />
        <div className="w-full flex items-center justify-between">
          <h2 className="text-2xl tracking-tight font-bold text-gray-900">
            Mata Pelajaran
          </h2>
          <button
            className="m-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-seemibold px-4 py-2 rounded-lg hover:cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all focus:outline-none"
            onClick={() => setIsFileModalOpen(true)}
          >
            Pilih File Jadwal
          </button>
          <FileUploadModal
            endpoint={`/api/jadwal/${jenjang}/${tingkat}/${semester}`}
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

        {valid && loading && <p className="text-center text-gray-500">Loading...</p>}

        {valid && error && <p className="text-center text-red-500">{error}</p>}

        {valid && !loading && mapelData.length === 0 && (
          <p className="text-center text-gray-500">
            Belum ada mata pelajaran pada semester ini
          </p>
        )}

        {valid && mapelData.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
            {mapelData.map((mapel, index) => {
              const slug = slugify(mapel.nama_mata_pelajaran);
              const bgFile = bgVariants[index % bgVariants.length];
              return (
                <div
                  key={mapel.id_mata_pelajaran}
                  className="w-full h-auto rounded-2xl shadow-lg flex flex-col justify-center p-4 bg-white gap-4"
                >
                  <div className="w-full h-72 bg-white rounded-lg">
                    <img
                      src={bgFile}
                      alt={mapel.nama_mata_pelajaran}
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
                    {capitalize(slug)}
                  </h5>
                  <Link
                    to={`${pathname.replace(/\/$/, "")}/mapel/${slug}`}
                    className="w-full mt-1 px-3 py-2 text-sm text-center font-medium text-white bg-[#FF6D00] rounded-lg hover:brightness-90 flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Pilih Mapel</span>
                    <CircleArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Mapel;