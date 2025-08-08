import AreaChart from "./Chart";
import AktivitasTerakhir from "./AktivitasTerakhir";
import { Award } from "lucide-react";
import ProgressBelajar from "./components/Progress";
import RekomendasiMateri from "./components/Rekomendasi";
import { useState, useEffect } from "react";


const Dashboard = () => {
  const [firstName, setFirstName] = useState("...");
  const [lastName, setLastName] = useState("")
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = sessionStorage.getItem("accessToken");
        if (!token) throw new Error("Token tidak ditemukan");

        const res = await fetch("http://localhost:3000/api/auth/me/full", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const json = await res.json();
        if (json.success) {
          setFirstName(json.data.nama_depan || "");
          setLastName(json.data.nama_belakang || "");
        }
      } catch (err) {
        console.error("Gagal memuat data user:", err);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <section>
        <div className="p-5 sm:ml-64">
          <div className="pt-10 pb-10">
            <h1 className="text-xl font-bold mb-2 text-left">Selamat Datang, {firstName} {lastName}</h1>
          </div>

          <div className="bg-white rounded-md shadow-md p-4 mb-6 border-l-8 border-orange-500">
            <p className="text-sm font-semibold mb-2 text-left sm:text-lg">
              "Seseorang yang tidak pernah membuat kesalahan, sebenarnya tidak pernah mencoba sesuatu yang baru."
              - Albert Einstein
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-xs justify-center sm:max-w-md justify-start">
            <div className="bg-white rounded-md shadow-md p-4 border-l-8 border-orange-500 text-left">
              <p className="text-sm text-gray-600">Peringkat Global</p>
              <h1 className="text-2xl font-bold text-gray-900">#1</h1>
            </div>
            <div className="bg-white rounded-md shadow-md p-4 border-l-8 border-orange-500 text-left">
              <p className="text-sm text-gray-600">Skor Terkini</p>
              <h1 className="text-2xl font-bold text-gray-900">12.000 XP</h1>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-8 sm:flex-row sm:items-start sm:justify-between">

            <div className="flex flex-col gap-5 sm:w-1/2 lg:w-2/3">

              <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <h1 className="text-2xl font-bold text-gray-900">Grafik Pengerjaan Soal</h1>
                  <button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                    type="button"
                  >
                    Pilih Filter
                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                  </button>
                </div>
                <div className="mt-4">
                  <AreaChart />
                </div>
              </div>

              <div>
                <ProgressBelajar />
              </div>

              <div>
                <RekomendasiMateri />
              </div>
            </div>

            <div className="flex flex-col gap-5 sm:w-1/2 lg:w-1/3">
              <AktivitasTerakhir />
              <div className="bg-white rounded-md shadow-md p-4 border-l-8 border-orange-500">
                <h3 className="text-lg font-semibold mb-2 text-left">Terbaru</h3>
                <div className="grid grid-cols-5 gap-2 mt-2 p-2 w-full">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                      <Award size={20} color="white" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
