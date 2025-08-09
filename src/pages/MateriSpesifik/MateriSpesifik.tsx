import { useEffect, useState, useMemo, useRef } from "react";
import BreadcrumbNavigation, { type LinkBreadcrumbType } from "@/components/BreadcrumbNavigation";
import { useLocation } from "react-router";
import { capitalize } from "@/lib/stringManipulation";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

interface MateriDetail {
  judul: string;
  deskripsi: string;
  pdf: ArrayBuffer;
}

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
    { label: "Materi", href: `/jenjang/${jenjang}/${tingkat}/semester/${semester}/mapel/${mapel}` },
    { label: capitalize(unsluggedNamaMateri) },
  ];

  const [materiDetail, setMateriDetail] = useState<MateriDetail | null>(null);
  const [pdfFile, setPdfFile] = useState<Uint8Array | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const lastPageRef = useRef<HTMLDivElement | null>(null);
  const alertTriggeredRef = useRef(false); // prevent multiple alerts

  const memoizedPdfFile = useMemo(() => {
    return pdfFile ? { data: pdfFile } : null;
  }, [pdfFile]);

  useEffect(() => {
    let isMounted = true;

    const fetchMateri = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`/api/materi/${jenjang}/${tingkat}/${semester}/${mapel}/${namaMateri}`, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem("accessToken")}`,
          },
        });
        if (!res.ok) throw new Error("Gagal mengambil data materi");

        const data = await res.json();

        if (!isMounted) return;

        setMateriDetail({
          judul: capitalize(data.data.judul),
          deskripsi: data.data.deskripsi,
          pdf: data.data.pdf,
        });

        if (data.data.pdf) {
          const sourceBuffer = data.data.pdf.data;
          const newView = new Uint8Array(sourceBuffer);
          setPdfFile(newView);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Terjadi kesalahan saat memuat materi");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchMateri();
    return () => {
      isMounted = false;
    };
  }, [jenjang, tingkat, semester, mapel, namaMateri]);

  // IntersectionObserver to detect last page scroll
  useEffect(() => {
    if (!lastPageRef.current) return;

    // Capture the current ref value to use in cleanup
    const currentElement = lastPageRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Check if the element is at least 50% visible
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            if (!alertTriggeredRef.current) {
              alertTriggeredRef.current = true;
              alert("You have reached 50% of the last page!");
            }
          }
        });
      },
      {
        threshold: [0.5], // Trigger when 50% visible
      }
    );

    observer.observe(currentElement);

    return () => {
      // Use the captured element reference instead of lastPageRef.current
      observer.unobserve(currentElement);
    };
  }, [numPages]);

  if (loading) {
    return (
      <section className="sm:ml-64">
        <div className="w-full px-4 py-10 max-w-screen-xl mx-auto">
          <p className="text-center text-gray-500">Memuat materi...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="sm:ml-64">
        <div className="w-full px-4 py-10 max-w-screen-xl mx-auto">
          <p className="text-center text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  if (!materiDetail) {
    return (
      <section className="sm:ml-64">
        <div className="w-full px-4 py-10 max-w-screen-xl mx-auto">
          <p className="text-center text-gray-500">Materi tidak ditemukan</p>
        </div>
      </section>
    );
  }

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
              {materiDetail.judul}
            </span>
          </div>

          {/* PDF Viewer */}
          {memoizedPdfFile && (
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex justify-center h-screen overflow-y-auto">
              <Document
                file={memoizedPdfFile}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                onLoadError={(error) => {
                  console.error("PDF load error:", error);
                  setError("Gagal memuat PDF. Format file mungkin tidak didukung.");
                }}
                loading={<p className="text-center text-gray-500">Memuat PDF...</p>}
                error={<p className="text-center text-red-500">Gagal memuat PDF</p>}
              >
                {Array.from({ length: numPages }, (_, i) => {
                  const isLastPage = i + 1 === numPages;
                  return (
                    <div
                      key={i}
                      ref={isLastPage ? lastPageRef : null}
                    >
                      <Page
                        pageNumber={i + 1}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        className="mb-4"
                        width={Math.min(800, window.innerWidth - 100)}
                      />
                    </div>
                  );
                })}
              </Document>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DetailMateri;