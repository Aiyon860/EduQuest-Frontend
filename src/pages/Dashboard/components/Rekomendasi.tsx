import { Calculator, FlaskConical, History, Dna } from "lucide-react";

type Materi = {
  title: string;
  subject: string;
  classInfo: string;
  bgColor: string;
  Icon: React.ElementType;
};

const materiList: Materi[] = [
  {
    title: "Integral",
    subject: "Matematika",
    classInfo: "Kelas 11, Semester 2",
    bgColor: "bg-purple-100 text-purple-600",
    Icon: Calculator,
  },
  {
    title: "Atom",
    subject: "Kimia",
    classInfo: "Kelas 10, Semester 1",
    bgColor: "bg-red-100 text-red-600",
    Icon: FlaskConical,
  },
  {
    title: "Perang Dunia 2",
    subject: "Sejarah",
    classInfo: "Kelas 11, Semester 1",
    bgColor: "bg-green-100 text-green-600",
    Icon: History,
  },
  {
    title: "DNA",
    subject: "Biologi",
    classInfo: "Kelas 12, Semester 1",
    bgColor: "bg-cyan-100 text-cyan-600",
    Icon: Dna,
  },
];

function RekomendasiMateri() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 text-left">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Rekomendasi Materi untuk Dipelajari
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {materiList.map(({ title, subject, classInfo, bgColor, Icon }, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${bgColor}`}>
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                {title} – {subject}
              </p>
              <p className="text-sm text-gray-500">{classInfo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RekomendasiMateri;
