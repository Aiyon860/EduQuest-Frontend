const SetelahPengerjaan = ({ points = 40, correctAnswers = 4, wrongAnswers = 0 }) => {
  const handleRetry = () => {
    console.log('Mengulang quiz...');
  };

  const handleExit = () => {
    console.log('Keluar dari quiz...');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mb-6">
        <div className="flex items-center text-purple-600 text-sm font-medium">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          SETELAH PENGERJAAN SOAL
        </div>
      </div>

      <div className="max-w-md mx-auto">
        <div className="bg-white border-2 border-purple-300 rounded-lg p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-4">
              <div className="relative">
                <div className="w-8 h-6 bg-white rounded-t-full relative">
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="w-6 h-2 bg-white mx-auto mt-1"></div>
                <div className="w-8 h-1 bg-white mx-auto"></div>
              </div>
            </div>
            
            <div className="text-gray-800 text-sm leading-relaxed">
              <div>Selamat, Anda Sudah</div>
              <div>Mengerjakan Semua Soal!</div>
            </div>
          </div>

          <div className="text-center mb-8 space-y-3">
            <div className="text-lg font-semibold text-gray-800">
              Poin : {points} XP
            </div>
            <div className="text-sm text-gray-700">
              Jumlah benar: {correctAnswers}
            </div>
            <div className="text-sm text-gray-700">
              Jumlah salah: {wrongAnswers}
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={handleRetry}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Ulang!
            </button>
            <button
              onClick={handleExit}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Keluar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetelahPengerjaan;