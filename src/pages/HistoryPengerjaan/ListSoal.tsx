const data = [
  "LATIHAN SOAL | IPA | #1",
  "LATIHAN SOAL | IPA | #2",
  "LATIHAN SOAL | IPA | #3",
  "LATIHAN SOAL | MATEMATIKA | #1",
  "MISI HARIAN | #1",
];

export default function HistoryList() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">History Pengerjaan</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Cari Soal"
        className="w-full p-2 border rounded-full mb-4 focus:outline-none"
      />

      {/* History Items */}
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center bg-white border rounded px-4 py-2 shadow-sm">
            <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded mr-3 font-bold">
              {index + 1}
            </div>
            <div className="text-sm font-medium">{item}</div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2 items-center text-sm">
        <button className="px-3 py-1 bg-blue-700 text-white rounded">Previous</button>
        <button className="px-3 py-1 bg-blue-800 text-white rounded">1</button>
        <span>...</span>
        <button className="px-3 py-1 bg-blue-800 text-white rounded">5</button>
        <button className="px-3 py-1 bg-blue-700 text-white rounded">Next</button>
      </div>
    </div>
  );
}
