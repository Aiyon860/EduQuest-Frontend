export interface HeaderProps {
  judul: string;
  subjudul: string;
}

export interface UserProfile {
  id_siswa: string;
  nama_depan: string;
  nama_belakang: string;
  email: string;
  no_telepon: string | null;
  alamat: string | null;
  asal_sekolah: string | null;
  tanggal_lahir: string | null;
  foto_profil: string | null;
  id_jenjang: bigint | null;
  id_kelas: bigint | null;
  id_semester: bigint | null;
  list_penghargaan: any[];
}