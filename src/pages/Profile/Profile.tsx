import { useState } from "react";
import { Award } from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <section>
      <div className="p-5 sm:ml-64 mb-16">
        <div className="flex justify-end w-full">
          <button
            onClick={() => setIsEditing(true)}
            className={`px-5 py-2 ${
              isEditing
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#023E8A] hover:bg-[#023E8A]/80 focus:ring-2 focus:outline-none focus:ring-[#023E8A] hover:cursor-pointer transition-all focus:ring-offset-2"
            } text-white rounded-md font-semibold`}
            disabled={isEditing}
          >
            Edit Profile
          </button>
        </div>

        <div className="flex flex-col items-center w-full py-2 px-5 md:flex-row border-b border-black mb-4">
          <div className="m-5 w-20 h-20 rounded-full bg-[#023E8A] flex items-center justify-center text-white text-2xl font-bold">
            J
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold">John Doe</h2>
            <p className="text-gray-600">Student</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2 text-left">
            <div className="mb-5">
              <label htmlFor="nama-depan" className="block mb-2 text-sm font-medium text-gray-900">
                Nama Depan
              </label>
              <input
                type="text"
                id="nama-depan"
                defaultValue="John"
                disabled={!isEditing}
                className={`border text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500 ${
                  isEditing
                    ? "bg-gray-50 border-gray-300 text-gray-900"
                    : "bg-gray-100 text-gray-500 border-gray-200 cursor-not-allowed"
                }`}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                type="email"
                id="email"
                defaultValue="JohnDoe@gmail.com"
                disabled={!isEditing}
                className={`border text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500 ${
                  isEditing
                    ? "bg-gray-50 border-gray-300 text-gray-900"
                    : "bg-gray-100 text-gray-500 border-gray-200 cursor-not-allowed"
                }`}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="asal-sekolah" className="block mb-2 text-sm font-medium text-gray-900">
                Asal Sekolah
              </label>
              <input
                type="text"
                id="asal-sekolah"
                defaultValue="SMP NEGERI 1 NGAWI BARAT"
                disabled={!isEditing}
                className={`border text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500 ${
                  isEditing
                    ? "bg-gray-50 border-gray-300 text-gray-900"
                    : "bg-gray-100 text-gray-500 border-gray-200 cursor-not-allowed"
                }`}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="alamat" className="block mb-2 text-sm font-medium text-gray-900">
                Alamat
              </label>
              <input
                type="text"
                id="alamat"
                defaultValue="Jalan Ngawi Barat 1, No. 6, Kecamatan Ambangawi"
                disabled={!isEditing}
                className={`border text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500 ${
                  isEditing
                    ? "bg-gray-50 border-gray-300 text-gray-900"
                    : "bg-gray-100 text-gray-500 border-gray-200 cursor-not-allowed"
                }`}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="lahir" className="block mb-2 text-sm font-medium text-gray-900">
                Lahir
              </label>
              <input
                type="text"
                id="lahir"
                defaultValue="20 Desember 1945"
                disabled={!isEditing}
                className={`border text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500 ${
                  isEditing
                    ? "bg-gray-50 border-gray-300 text-gray-900"
                    : "bg-gray-100 text-gray-500 border-gray-200 cursor-not-allowed"
                }`}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 text-left">
            <div className="mb-5">
              <label htmlFor="nama-belakang" className="block mb-2 text-sm font-medium text-gray-900">
                Nama Belakang
              </label>
              <input
                type="text"
                id="nama-belakang"
                defaultValue="Doe"
                disabled={!isEditing}
                className={`border text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500 ${
                  isEditing
                    ? "bg-gray-50 border-gray-300 text-gray-900"
                    : "bg-gray-100 text-gray-500 border-gray-200 cursor-not-allowed"
                }`}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="no-hp" className="block mb-2 text-sm font-medium text-gray-900">
                Nomor Handphone
              </label>
              <input
                type="text"
                id="no-hp"
                defaultValue="088234231234"
                disabled={!isEditing}
                className={`border text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500 ${
                  isEditing
                    ? "bg-gray-50 border-gray-300 text-gray-900"
                    : "bg-gray-100 text-gray-500 border-gray-200 cursor-not-allowed"
                }`}
              />
            </div>
            <div className="flex gap-4 mb-5">
              <div className="flex-1">
                <label htmlFor="kelas" className="block mb-2 text-sm font-medium text-gray-900">
                  Kelas
                </label>
                <select
                  id="kelas"
                  disabled={!isEditing}
                  className={`border text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500 ${
                    isEditing
                      ? "bg-gray-50 border-gray-300 text-gray-900"
                      : "bg-gray-100 text-gray-500 border-gray-200 cursor-not-allowed"
                  }`}
                >
                  <option>5 (Lima)</option>
                </select>
              </div>
              <div className="flex-1">
                <label htmlFor="semester" className="block mb-2 text-sm font-medium text-gray-900">
                  Semester
                </label>
                <select
                  id="semester"
                  disabled={!isEditing}
                  className={`border text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500 ${
                    isEditing
                      ? "bg-gray-50 border-gray-300 text-gray-900"
                      : "bg-gray-100 text-gray-500 border-gray-200 cursor-not-allowed"
                  }`}
                >
                  <option>1 (Satu)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-900">Penghargaan</label>
              <div className="p-5 grid grid-cols-5 gap-2 mt-2 rounded-md w-full shadow-sm focus:shadow-md focus:ring-2 focus:ring-blue-400 focus:outline-none place-items-center">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center"
                  >
                    <Award size={20} color="white" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {isEditing && (
          <div className="flex justify-center gap-4 mt-8 sm:justify-start">
            <button
              onClick={() => setIsEditing(false)}
              className="text-sm font-medium text-gray-900 px-4 py-2 border rounded-md hover:cursor-pointer hover:bg-gray-900 hover:text-white transition-all focus:ring-2 focus:ring-gray-900 focus:outline-none focus:ring-offset-2"
            >
              Batal Simpan
            </button>
            <button
              onClick={() => {
                // TODO: Add save logic
                setIsEditing(false);
              }}
              className="text-sm font-medium text-white px-4 py-2 bg-[#3649F9] rounded-md hover:cursor-pointer hover:bg-[#3649F9]/80 hover:text-white transition-all focus:ring-2 focus:ring-[#3649F9] focus:outline-none focus:ring-offset-2"
            >
              Simpan
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Profile;