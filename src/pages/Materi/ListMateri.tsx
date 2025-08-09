import BreadcrumbNavigation, { type LinkBreadcrumbType } from "@/components/BreadcrumbNavigation";
import { Link, useLocation } from "react-router";
import { capitalize, slugify } from "@/lib/stringManipulation";
import FileUploadModal from "@/components/FileUpload";
import { useState, useEffect } from "react";
import JumlahSoalModal from "@/components/JumlahSoal";

interface MateriData {
  judul: string;
  deskripsi: string;
}

const ListMateri = () => {
  const [isPilihMateriModalOpen, setIsPilihMateriModalOpen] = useState(false);
  const [isJumlahSoalModalOpen, setIsJumlahSoalModalOpen] = useState(false);

  const [materi, setMateri] = useState<MateriData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { pathname } = useLocation();
  const jenjang = pathname.split("/")[2];
  const tingkat = pathname.split("/")[3];
  const semester = parseFloat(pathname.split("/")[5]);
  const mapel = pathname.split("/")[7];

  const validJenjang = ["sd", "smp", "sma"].includes(jenjang);

  const links: LinkBreadcrumbType[] = [
    { label: jenjang?.toUpperCase(), href: `/jenjang/${jenjang}` },
    { label: `Kelas ${tingkat}`, href: `/jenjang/${jenjang}/${tingkat}` },
    { label: `Semester ${semester}`, href: `/jenjang/${jenjang}/${tingkat}` },
    { label: capitalize(mapel), href: `/jenjang/${jenjang}/${tingkat}/semester/${semester}` },
    { label: "Materi" },
  ];

  useEffect(() => {
    if (!validJenjang) return;

    const fetchData = async () => {
      setLoading(true);

      const callApi = async (token: string) => {
        const res = await fetch(`/api/materi/${jenjang}/${tingkat}/${semester}/${mapel}`, {
          headers: { Authorization: `Bearer ${token}` },
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

            sessionStorage.setItem("accessToken", refreshData.accessToken);
            data = await callApi(refreshData.accessToken);
          } else {
            throw err;
          }
        }

        setMateri(data.data || []);
        setError(null);
      } catch (err) {
        setError((err as Error).message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [jenjang, tingkat, semester, mapel, validJenjang]);

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
              <button
                className="bg-[#003566] text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-blue-800 transition-all hover:cursor-pointer"
                onClick={() => setIsPilihMateriModalOpen(true)}
              >
                Pilih File Materi
              </button>
              <FileUploadModal
                endpoint={`/api/materi/${jenjang}/${tingkat}/${semester}/${mapel}`}
                isOpen={isPilihMateriModalOpen}
                onClose={() => setIsPilihMateriModalOpen(false)}
                limitSize={50}
                permittedFormats={["pdf", "doc", "docx"]}
              />
              {materi && materi.length > 0 &&
                <>
                  <button
                    className="bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-orange-600 transition-all hover:cursor-pointer"
                    onClick={() => setIsJumlahSoalModalOpen(true)}
                  >
                    Buat Soal
                  </button>
                  <JumlahSoalModal
                    isOpen={isJumlahSoalModalOpen}
                    onClose={() => setIsJumlahSoalModalOpen(false)}
                  />
                </>
              }
            </div>
          </div>
        </div>

        {!validJenjang && (
          <p className="text-center text-gray-500">
            Maaf, jenjang tidak ditemukan
          </p>
        )}

        {validJenjang && loading && (
          <p className="text-center text-gray-500">Loading...</p>
        )}

        {validJenjang && error && (
          <p className="text-center text-red-500">{error}</p>
        )}

        {validJenjang && !loading && materi.length === 0 && (
          <p className="text-center text-gray-500">
            Belum ada materi pada semester ini
          </p>
        )}

        {validJenjang && !loading && materi.length > 0 && (
          <div className="space-y-4">
            {materi.map((item, index) => {
              return (
                <Link
                  to={`/jenjang/${jenjang}/${tingkat}/semester/${semester}/mapel/${mapel}/materi/${slugify(item.judul)}`}
                  key={index}
                  className="flex items-center bg-white border border-gray-200 rounded-lg shadow-sm px-2 py-2 hover:bg-gray-200 transition-all hover:cursor-pointer"
                >
                  <div className="bg-[#003566] text-white w-10 h-10 flex items-center justify-center rounded-md font-bold mr-4">
                    {index + 1}
                  </div>
                  <span className="text-gray-900 font-medium">{item.judul}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ListMateri;