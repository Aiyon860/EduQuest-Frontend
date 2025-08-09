import { useEffect, useState } from "react";
import { Award } from "lucide-react";
import type { UserProfile } from "@/types/user";

interface Jenjang {
  id_jenjang: string;
  nama_jenjang: string;
}

interface Kelas {
  id_kelas: number;
  posisi_kelas: number;
}

interface Semester {
  id_semester: bigint;
  posisi_semester: number;
}

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const [jenjangList, setJenjangList] = useState<Jenjang[]>([]);
  const [kelasList, setKelasList] = useState<Kelas[]>([]);
  const [semesterList, setSemesterList] = useState<Semester[]>([]);

  // Fetch jenjang
  useEffect(() => {
    const fetchJenjang = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/jenjang");
        const json = await res.json();
        if (json.success) setJenjangList(json.data);
      } catch (err) {
        console.error("Gagal memuat jenjang:", err);
      }
    };
    fetchJenjang();
  }, []);

  // Fetch kelas
  useEffect(() => {
    const fetchKelas = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/kelas");
        const json = await res.json();
        if (json.success) setKelasList(json.data);
      } catch (err) {
        console.error("Gagal memuat kelas:", err);
      }
    };
    fetchKelas();
  }, []);

  // Fetch semester
  useEffect(() => {
    const fetchSemester = async () => {
      try {
        const token = sessionStorage.getItem("accessToken");
        if (!token) throw new Error("Token not found");
        const res = await fetch("http://localhost:3000/api/semester", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const json = await res.json();
        if (json.success) setSemesterList(json.data);
      } catch (err) {
        console.error("Gagal memuat semester:", err);
      }
    };
    fetchSemester();
  }, []);

  // Fetch profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = sessionStorage.getItem("accessToken");
        if (!token) throw new Error("Token not found");

        const res = await fetch("http://localhost:3000/api/auth/me/full", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const json = await res.json();
        if (json.success) {
          setProfile(json.data);
        }
      } catch (err) {
        console.error("Gagal memuat profil:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleSave = async () => {
    try {
      const token = sessionStorage.getItem("accessToken");
      if (!token) throw new Error("Token not found");

      const body = {
        nama_depan: (document.getElementById("nama-depan") as HTMLInputElement).value,
        nama_belakang: (document.getElementById("nama-belakang") as HTMLInputElement).value,
        no_telepon: (document.getElementById("no-hp") as HTMLInputElement).value,
        alamat: (document.getElementById("alamat") as HTMLInputElement).value,
        asal_sekolah: (document.getElementById("asal-sekolah") as HTMLInputElement).value,
        tanggal_lahir: (document.getElementById("lahir") as HTMLInputElement).value,
        id_jenjang: (document.getElementById("jenjang") as HTMLSelectElement).value,
        id_kelas: (document.getElementById("kelas") as HTMLSelectElement).value,
        id_semester: (document.getElementById("semester") as HTMLSelectElement).value,
      };

      const res = await fetch("http://localhost:3000/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      const json = await res.json();

      if (json.success) {
        setProfile(json.data);
        setIsEditing(false);
        alert("Profil berhasil diperbarui");
      } else {
        alert("Gagal memperbarui profil");
      }
    } catch (error) {
      console.error("Error saat menyimpan profil:", error);
      alert("Terjadi kesalahan saat menyimpan");
    }
  };

  if (loading) return <div className="p-5">Memuat profil...</div>;
  if (!profile) return <div className="p-5">Gagal memuat data profil.</div>;

  return (
    <section>
      <div className="p-5 sm:ml-64 mb-16">
        <div className="flex justify-end w-full">
          <button
            onClick={() => setIsEditing(true)}
            className={`px-5 py-2 ${isEditing
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
            {profile.nama_depan?.[0] || "?"}
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold">
              {profile.nama_depan} {profile.nama_belakang}
            </h2>
            <p className="text-gray-600">Student</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2 text-left">
            <InputField id="nama-depan" label="Nama Depan" value={profile.nama_depan} isEditing={isEditing} />
            <InputField id="email" label="Email" value={profile.email} isEditing={false} />
            <InputField id="asal-sekolah" label="Asal Sekolah" value={profile.asal_sekolah || ""} isEditing={isEditing} />
            <InputField id="alamat" label="Alamat" value={profile.alamat || ""} isEditing={isEditing} />
            <InputField id="lahir" label="Lahir" value={profile.tanggal_lahir || ""} isEditing={isEditing} />
          </div>

          <div className="flex flex-col gap-2 text-left">
            <InputField id="nama-belakang" label="Nama Belakang" value={profile.nama_belakang} isEditing={isEditing} />
            <InputField id="no-hp" label="Nomor Handphone" value={profile.no_telepon || ""} isEditing={isEditing} />

            <div className="flex gap-4 mb-5">
              <div className="flex-1">
                <label htmlFor="jenjang" className="block mb-2 text-sm font-medium text-gray-900">Jenjang</label>
                <select
                  id="jenjang"
                  disabled={!isEditing}
                  defaultValue={String(profile.id_jenjang || "")}
                  className={`border text-sm rounded-lg block w-full p-2.5 ${isEditing ? "bg-gray-50 border-gray-300 text-gray-900" : "bg-gray-100 text-gray-500 border-gray-200 cursor-not-allowed"}`}
                >
                  <option value="">Pilih Jenjang</option>
                  {jenjangList.map((j) => (
                    <option key={j.id_jenjang} value={j.id_jenjang}>
                      {j.nama_jenjang}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex-1">
                <label htmlFor="kelas" className="block mb-2 text-sm font-medium text-gray-900">Kelas</label>
                <select
                  id="kelas"
                  disabled={!isEditing}
                  defaultValue={String(profile.id_kelas || "")}
                  className={`border text-sm rounded-lg block w-full p-2.5 ${isEditing ? "bg-gray-50 border-gray-300 text-gray-900" : "bg-gray-100 text-gray-500 border-gray-200 cursor-not-allowed"}`}
                >
                  <option value="">Pilih Kelas</option>
                  {kelasList.map((k) => (
                    <option key={k.id_kelas} value={String(k.id_kelas)}>
                      Kelas {k.posisi_kelas}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex-1">
                <label htmlFor="semester" className="block mb-2 text-sm font-medium text-gray-900">Semester</label>
                <select
                  id="semester"
                  disabled={!isEditing}
                  defaultValue={String(profile.id_semester || "")}
                  className={`border text-sm rounded-lg block w-full p-2.5 ${isEditing ? "bg-gray-50 border-gray-300 text-gray-900" : "bg-gray-100 text-gray-500 border-gray-200 cursor-not-allowed"}`}
                >
                  <option value="">Pilih Semester</option>
                  {semesterList.map((s) => (
                    <option key={String(s.id_semester)} value={String(s.id_semester)}>
                      Semester {s.posisi_semester}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-900">Penghargaan</label>
              <div className="p-5 grid grid-cols-5 gap-2 mt-2 rounded-md w-full shadow-sm focus:shadow-md focus:ring-2 focus:ring-blue-400 focus:outline-none place-items-center">
                {profile.list_penghargaan.length > 0 ? (
                  profile.list_penghargaan.map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                      <Award size={20} color="white" />
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400 text-sm col-span-5 text-center">Belum ada penghargaan</p>
                )}
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
                setIsEditing(false);
                handleSave();
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

const InputField = ({
  id,
  label,
  value,
  isEditing
}: {
  id: string;
  label: string;
  value: string;
  isEditing: boolean;
}) => (
  <div className="mb-5">
    <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900">
      {label}
    </label>
    <input
      type="text"
      id={id}
      defaultValue={value}
      disabled={!isEditing}
      className={`border text-sm rounded-lg block w-full p-2.5 ${isEditing
        ? "bg-gray-50 border-gray-300 text-gray-900"
        : "bg-gray-100 text-gray-500 border-gray-200 cursor-not-allowed"
        }`}
    />
  </div>
);

export default Profile;
