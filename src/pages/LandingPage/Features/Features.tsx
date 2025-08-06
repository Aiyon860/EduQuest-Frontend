import featuresatu from "@/assets/fitur1.webp";
import featuresdua from "@/assets/fitur2.webp";
import featureketiga from "@/assets/fitur3.webp";
import HeadingEachSection from "@/pages/LandingPage/components/HeadingEachSection";
import FeatureLeft from "@/pages/LandingPage/Features/components/FeatureLeft";
import FeatureRight from "@/pages/LandingPage/Features/components/FeatureRight";

const Features = () => {
  const listFeatures = [
    {
      imageFeature: featuresatu,
      title: "Rekomendasi Belajar Personal",
      description:
        "Tak perlu bingung. AI kami akan menganalisis kemampuan dan preferensimu untuk menyajikan materi belajar yang paling relevan, membuat belajarmu lebih fokus dan tepat sasaran.",
    },
    {
      imageFeature: featuresdua,
      title: "Gamifikasi: Belajar Jadi Seru!",
      description:
        "Tingkatkan motivasimu! Bentuk kelompok belajar (Klan), bersaing secara sehat di Papan Peringkat, dan selesaikan Misi Harian untuk mendapatkan poin serta hadiah menarik.",
    },
    {
      imageFeature: featureketiga,
      title: "Ubah Catatanmu Jadi Kuis Instan",
      description:
        "Punya materi dari sekolah? Cukup unggah dokumen (PDF/Word) milikmu, dan biarkan AI secara ajaib mengubahnya menjadi soal latihan interaktif, lengkap dengan rangkuman poin-poin penting.",
    },
  ];

  return (
    <section
      id="features"
      className="flex flex-col justify-center items-center py-12 px-8 md:px-20 scroll-mt-16"
    >
      <div className="max-w-3xl">
        <HeadingEachSection
          title="Fitur"
          subtitle="Gak cuma soal belajar, EduQuest bikin kamu bisa eksplorasi cara belajar yang lebih seru, cepat paham, dan pastinya relevan banget buat kamu!"
        />
      </div>

      <div className="flex flex-col">
        {listFeatures.map((feature, index) =>
          index % 2 === 0 ? (
            <FeatureRight key={index} info={feature} />
          ) : (
            <FeatureLeft key={index} info={feature} />
          )
        )}
      </div>
    </section>
  );
};

export default Features;
