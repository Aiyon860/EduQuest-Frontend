import TestimonyCard from "@/pages/LandingPage/Testimony/components/TestimonyCard";
import testimoniImage1 from "@/assets/testimoni1.webp";
import testimoniImage2 from "@/assets/testimoni2.webp";
import testimoniImage3 from "@/assets/testimoni3.webp";
import testimoniImage4 from "@/assets/testimoni4.webp";
import testimoniImage5 from "@/assets/testimoni5.webp";
import testimoniImage6 from "@/assets/testimoni6.webp";
import TestimonyHeading from "@/pages/LandingPage/Testimony/components/TestimonyHeading";

const Testimony = () => {
  const testimonies = [
    {
      review: "Fitur auto-generasi soalnya benar-benar penyelamat! Semua rangkuman materi untuk persiapan ujian tinggal saya masukkan, langsung jadi ratusan soal latihan. Belajar jadi jauh lebih efektif dan terarah.",
      name: "Rizal",
      studyLevel: "Siswa SMA Kelas 12",
      profilePicture: testimoniImage1,
    },
    {
      review: "Awalnya malas belajar, tapi setelah ada fitur Klan dan Misi Harian jadi ketagihan! Seru banget bisa bersaing sehat sama teman-teman di papan peringkat. Nggak nyangka belajar bisa sekopetitif ini.",
      name: "Farel",
      studyLevel: "Siswa SMP Kelas 8",
      profilePicture: testimoniImage2,
    },
    {
      review: "Dulu aku gampang lupa pelajaran IPA. Sejak pakai aplikasi ini, materinya jadi nempel terus di kepala karena soalnya diulang-ulang di waktu yang pas. Nilaiku jadi lebih bagus sekarang!",
      name: "Bima",
      studyLevel: "Siswa SD Kelas 5",
      profilePicture: testimoniImage3,
    },
    {
      review: "Ini benar-benar mengubah cara saya belajar. Daripada baca catatan yang sama berulang kali, saya bisa langsung uji pemahaman dengan soal dari materi saya sendiri. Hemat waktu dan hasilnya lebih maksimal.",
      name: "Aulia",
      studyLevel: "Siswa SD Kelas 6",
      profilePicture: testimoniImage4,
    },
    {
      review: "Pelajaran Sejarah yang banyak hafalan jadi terasa ringan. Tinggal input catatan dari guru, AI-nya langsung bikinin kuis. Metode spaced repetition-nya ampuh banget buat mengingat tanggal dan peristiwa penting.",
      name: "Clara",
      studyLevel: "Siswa SMP Kelas 9",
      profilePicture: testimoniImage5,
    },
    {
      review: "Gampang banget pakainya! Aku tinggal foto catatanku pakai HP, terus aplikasinya bikinin soal latihan buat aku. Jadi makin semangat belajar setiap hari. Terima kasih!",
      name: "Dinda",
      studyLevel: "Siswa SD Kelas 6",
      profilePicture: testimoniImage6,
    },
  ]

  return (
    <section id="testimony" className="flex flex-col gap-40 py-12 px-8 md:px-20 bg-gray-100 scroll-mt-16">
      <div className="flex flex-col gap-2">
        <TestimonyHeading />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-30 self-center">
        {testimonies.map((testimony, index) => (
          <TestimonyCard
            key={index}
            info={testimony}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimony;
