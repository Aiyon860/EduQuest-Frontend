import NumberSection from "./components/NumberSection";

const CarouselStatistic = () => {
  const stats = [
    {
      number: "9 dari 10",
      description: "Siswa Merasa Lebih Paham",
    },
    {
      number: "15.000+",
      description: "Siswa Aktif Belajar",
    },
    {
      number: "50.000+",
      description: "Materi Pelajaran Diproses",
    },
    {
      number: "1.000.000+",
      description: "Soal Latihan Dihasilkan AI",
    }
  ];

  return (
    <div className="min-w-full py-12 px-8 md:px-20 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-y-16 gap-4">
        {stats.map((stat, index) => (
          <NumberSection key={index} stat={stat} index={index} />
        ))}
      </div>
    </div>
  );
};

export default CarouselStatistic;