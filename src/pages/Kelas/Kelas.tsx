import BreadcrumbNavigation, {
  type LinkBreadcrumbType,
} from "@/components/BreadcrumbNavigation";
import { CircleArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";

import number1 from "@/assets/numbers/number-1.webp";
import number2 from "@/assets/numbers/number-2.webp";
import number3 from "@/assets/numbers/number-3.webp";
import number4 from "@/assets/numbers/number-4.webp";
import number5 from "@/assets/numbers/number-5.webp";
import number6 from "@/assets/numbers/number-6.webp";
import number7 from "@/assets/numbers/number-7.webp";
import number8 from "@/assets/numbers/number-8.webp";
import number9 from "@/assets/numbers/number-9.webp";
import number10 from "@/assets/numbers/number-10.webp";
import number11 from "@/assets/numbers/number-11.webp";
import number12 from "@/assets/numbers/number-12.webp";

interface KelasData {
  id_kelas: string;
  posisi_kelas: string;
  progress: number;
}

const kelasImages = [
  number1,
  number2,
  number3,
  number4,
  number5,
  number6,
  number7,
  number8,
  number9,
  number10,
  number11,
  number12,
];

const Kelas = () => {
  const { pathname } = useLocation();
  const jenjang = pathname.split("/")[2];

  const [kelasData, setKelasData] = useState<KelasData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Validasi jenjang
  const validJenjang = ["sd", "smp", "sma"].includes(jenjang);

  const links: LinkBreadcrumbType[] = [
    { label: jenjang?.toUpperCase(), href: `/jenjang/${jenjang}` },
    { label: "Kelas" },
  ];

  useEffect(() => {
    if (!validJenjang) return;

    const fetchData = async () => {
      setLoading(true);

      const callApi = async (token: string) => {
        const res = await fetch(`/api/kelas/${jenjang}`, {
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
            if (!refreshData.accessToken)
              throw new Error("invalid_refresh_response");

            sessionStorage.setItem("accessToken", refreshData.accessToken);
            data = await callApi(refreshData.accessToken);
          } else {
            throw err;
          }
        }

        setKelasData(data.data || []);
        setError(null);
      } catch (err) {
        setError((err as Error).message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [jenjang, validJenjang]);

  // Get image index range based on jenjang
  const getImageIndex = (index: number) => {
    if (jenjang === "sd") return index % 6; // 0–5 → number 1–6
    if (jenjang === "smp") return (index % 3) + 6; // 6–8 → number 7–9
    if (jenjang === "sma") return (index % 3) + 9; // 9–11 → number 10–12
    return 0;
  };

  return (
    <section className="sm:ml-64 mb-12">
      <div className="px-4 py-8 max-w-screen-xl mx-auto flex flex-col gap-4">
        <BreadcrumbNavigation deepLevel={links.length} links={links} />

        <div className="w-full flex items-center justify-between">
          <h2 className="text-2xl tracking-tight font-bold text-gray-900">
            Kelas {jenjang?.toUpperCase()}
          </h2>
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

        {validJenjang && !loading && kelasData.length === 0 && (
          <p className="text-center text-gray-500">
            Belum ada kelas pada jenjang ini
          </p>
        )}

        {validJenjang && !loading && kelasData.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
            {kelasData.map((kelas, index) => {
              const imgFile = kelasImages[getImageIndex(index)];
              return (
                <div
                  key={index}
                  className="w-full h-auto rounded-2xl shadow-lg flex flex-col justify-center p-4 bg-white gap-4"
                >
                  <div className="w-full h-72 bg-white rounded-lg">
                    <img
                      src={imgFile}
                      alt={`Kelas ${kelas.posisi_kelas}`}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>

                  <div className="w-full flex gap-4">
                    <div
                      className={`w-full h-2 ${
                        kelas.progress < 25
                          ? "bg-[#FFD7D7]"
                          : kelas.progress < 50
                          ? "bg-[#FFF5CC]"
                          : "bg-[#D1FFDB]"
                      } rounded-full mt-2`}
                    >
                      <div
                        className={`h-2 ${
                          kelas.progress < 25
                            ? "bg-[#FF4A4A]"
                            : kelas.progress < 50
                            ? "bg-[#FFB200]"
                            : "bg-[#13C525]"
                        } rounded-full`}
                        style={{ width: `${kelas.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm">{kelas.progress}%</span>
                  </div>

                  <h5 className="text-lg font-bold text-gray-800">
                    Kelas {kelas.posisi_kelas}
                  </h5>

                  <Link
                    to={`${pathname.replace(/\/$/, "")}/${kelas.posisi_kelas}`}
                    className="w-full mt-1 px-3 py-2 text-sm text-center font-medium text-white bg-[#FF6D00] rounded-lg hover:brightness-90 flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Masuk Kelas</span>
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

export default Kelas;