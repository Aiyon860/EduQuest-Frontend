import { useState } from "react";
import Foto from "@/assets/fitur1.webp";

const BuatKlan = () => {
  const [namaKlan, setNamaKlan] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = sessionStorage.getItem("accessToken");
    if (!token) return alert("Token tidak ditemukan");

    const formData = new URLSearchParams();
    formData.append("nama_klan", namaKlan);
    formData.append("deskripsi", deskripsi);

    try {
      const res = await fetch("http://localhost:3000/api/clan/create", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      const json = await res.json();
      if (json.success) {
        alert("Klan berhasil dibuat!");
        window.location.href = `/clans/antarklan?nama=${encodeURIComponent(namaKlan)}`;
      } else {
        alert("Gagal membuat klan: " + json.message);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Terjadi kesalahan saat membuat klan.");
    }
  };

  return (
    <section className="sm:ml-64 px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-2">

        <div className="p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-200">
          <img src={Foto} alt="Foto Fitur" className="rounded-xl w-full h-auto mb-4" />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 text-center">Buat Klanmu Sendiri!</h5>
        </div>

        <div className="p-6">
          <form className="text-left space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Nama Klan</label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="The King"
                required
                value={namaKlan}
                onChange={(e) => setNamaKlan(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Deskripsi</label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Deskripsi klan"
                required
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Buat
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BuatKlan;

