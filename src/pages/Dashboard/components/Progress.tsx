import { FaAtom, FaDna, FaCalculator } from "react-icons/fa";

const progressData = [
  {
    nama: "Fisika",
    nilai: 90,
    warna: "blue-500",
    bg: "blue-100",
    Icon: FaAtom,
  },
  {
    nama: "Biologi",
    nilai: 50,
    warna: "blue-500",
    bg: "blue-100",
    Icon: FaDna,
  },
  {
    nama: "Matematika",
    nilai: 25,
    warna: "blue-500",
    bg: "blue-100",
    Icon: FaCalculator,
  },
];

const ProgressBelajar = () => {
  return (
    <div className="p-6 rounded-xl bg-white shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-left">Progress Belajar</h2>
      {progressData.map((item, index) => (
        <div
          key={index}
          className={`mb-4 p-4 rounded-lg bg-${item.bg} transition-all`}
        >
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <item.Icon className={`text-${item.warna}`} />
              <span className="font-semibold">{item.nama}</span>
            </div>
            <span className="text-sm text-gray-700 font-semibold">
              {item.nilai}%
            </span>
          </div>
          <div className="w-full h-2 bg-white rounded-full">
            <div
              className={`h-2 rounded-full bg-${item.warna}`}
              style={{ width: `${item.nilai}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBelajar;
