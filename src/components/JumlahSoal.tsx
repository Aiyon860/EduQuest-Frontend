const JumlahSoal = () => {

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="mb-6">
        <div className="flex items-center text-purple-600 text-sm font-medium">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Jumlah Input Soal
        </div>
      </div>

      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-lg font-medium text-gray-800 leading-relaxed">
              Tentukan jumlah soal<br />
              yang hendak dikerjakan!
            </h1>
          </div>

          <div className="mb-8">
            <input
              type="text"
              placeholder=""
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-center text-lg focus:outline-none focus:border-blue-500 transition-all duration-200"
            />
          </div>

          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full text-lg transition-colors duration-200">
              Kerjakan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JumlahSoal;