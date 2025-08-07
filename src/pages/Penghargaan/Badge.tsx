import { Award } from "lucide-react";

const completions = [
  "Pemain menyelesaikan misi harian 3x berturut-turut",
  "Pemain login selama 7 hari berturut-turut",
  "Pemain menyelesaikan semua misi mingguan",
  "Pemain mendapatkan skor sempurna dalam kuis",
  "Pemain berhasil mengajak 5 teman",
  "Pemain aktif selama 30 hari",
  "Pemain menyelesaikan 50 tugas",
];

const BadgeGrid = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mt-2 rounded-md p-2 w-full justify-items-start">
      {completions.map((text, i) => (
        <div key={i} className="relative group">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
            <Award size={20} color="white" />
          </div>

          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 hidden group-hover:flex flex-col items-center bg-white text-gray-900 text-sm rounded-xl p-4 shadow-xl w-56 z-50 transition-all duration-300">
            <div className="text-orange-500 text-3xl mb-2">
              <Award size={32} />
            </div>
            <h3 className="font-bold">COMPLETION</h3>
            <p className="text-center text-xs mt-1">{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BadgeGrid;
