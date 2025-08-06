const AktivitasTerakhir = () => {
    const aktivitas = [
      {
        iconBg: "bg-purple-100",
        icon: "📅",
        title: "Mengerjakan Soal Integral",
        date: "04 Jan, 09:20AM",
      },
      {
        iconBg: "bg-green-100",
        icon: "🎯",
        title: "Menyelesaikan Misi Harian Fisika",
        date: "03 Jan, 09:20AM",
      },
      {
        iconBg: "bg-orange-100",
        icon: "📊",
        title: "Meraih Peringkat #1 Global",
        date: "02 Jan, 09:20AM",
      },
      {
        iconBg: "bg-blue-100",
        icon: "🏅",
        title: "Mencapai Top 50 Global",
        date: "01 Jan, 09:20AM",
      },
    ];
  
    return (
      <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow">
        <h2 className="text-xl font-bold text-gray-900 mb-6 text-left">Aktivitas Terakhir</h2>
        <ul className="space-y-4">
          {aktivitas.map((item, index) => (
            <li key={index} className="flex items-start space-x-4 text-left">
              <div className={`p-3 rounded-xl text-xl ${item.iconBg}`}>
                <span>{item.icon}</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default AktivitasTerakhir;
  