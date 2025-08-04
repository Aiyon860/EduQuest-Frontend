import HeadingEachSection from "@/pages/LandingPage/components/HeadingEachSection";
import DetailsFAQ from "@/pages/LandingPage/FAQ/components/DetailsFAQ";

const FAQ = () => {
  const DetailFAQ = [
    {
      question: "Fitur apa saja yang ada di web EduQuest?",
      answer: "EduQuest adalah aplikasi edukasi pintar yang mempersonalisasi pembelajaran dengan fitur AI seperti rekomendasi materi, soal dinamis, auto-generasi soal dari dokumen, gamifikasi, serta pengawasan ujian otomatis. Seluruh aktivitas siswa ditampilkan dalam dashboard lengkap berisi progress belajar, grafik performa, badge, hingga rekomendasi materi dan motivasi harian.",
    },
    {
      question: "Apa itu Web EduQuest?",
      answer: "EduQuest merupakan sebuah platform pembelajaran adaptif berbasis Artificial Intelligence (AI) yang dirancang untuk meningkatkan motivasi belajar siswa SD hingga SMA melalui pendekatan yang menyenangkan dan interaktif. Aplikasi ini mengintegrasikan fitur-fitur cerdas seperti gamifikasi, rekomendasi materi, evaluasi personal, serta sistem keamanan saat belajar, sehingga mampu menciptakan pengalaman belajar yang efektif, terstruktur, dan menyenangkan.",
    },
    {
      question: "Bagaimana Sistem Skor EduQuest?",
      answer: "Sistem skor EduQuest dirancang untuk mendorong keterlibatan belajar secara aktif, di mana siswa mendapatkan skor setiap kali menjawab pertanyaan atau menyelesaikan misi harian. Skor yang terkumpul akan menentukan pencapaian seperti badge atau penghargaan, yang memotivasi siswa untuk terus belajar dan meningkatkan performa mereka."
    },
    {
      question: "Bagaimana Cara Melihat Leaderboard AntarTeam?",
      answer: "Untuk melihat leaderboard antar tim di EduQuest, siswa cukup mengklik atau mencari fitur \"Leaderboard\" di dalam aplikasi. Di sana, mereka dapat melihat peringkat klan berdasarkan total skor, pencapaian, dan aktivitas anggota tim secara real-time."
    },
    {
      question: "Siapa Pengguna Web EduQuest?",
      answer: "Pengguna utama Web EduQuest mencakup siswa dari tingkat SD hingga SMA. Platform ini dirancang untuk mendukung pembelajaran personal yang sesuai dengan kurikulum dan kebutuhan akademik mereka."
    },
    {
      question: "Apa Saja Badge yang Didapatkan?",
      answer: "Badge yang bisa didapatkan di EduQuest antara lain mencakup: badge keaktifan (berapa lama dan sering siswa membuka web), badge penyelesaian soal (sudah mengerjakan soal beberapa kali), serta badge kontribusi tim (aktif membantu dan berpartisipasi dalam klan atau tim belajar). Badge ini dirancang untuk mengapresiasi berbagai aspek positif dalam proses belajar."
    }
  ];

  return (
    <section id="faq" className="px-8 md:px-20 scroll-mt-16">
      <div className="flex flex-col gap-2">
        <HeadingEachSection title="Pertanyaan Umum" />
      </div>

      <ul className="max-w-3xl mx-auto mt-10 flex flex-col gap-4 rounded-xl">
        {DetailFAQ.map((detail, index) => (
          <DetailsFAQ key={index} details={detail} />
        ))}
      </ul>
    </section>
  );
};

export default FAQ;