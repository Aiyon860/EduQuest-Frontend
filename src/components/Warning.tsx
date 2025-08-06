const CheatingWarning = () => {
  const handleRestart = () => {
    console.log('Memulai lagi...');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg p-8 text-center max-w-md w-full">
        <div className="mb-6">
          <div className="w-20 h-20 mx-auto bg-blue-600 rounded-full flex items-center justify-center">
            <div className="relative">
              <div className="w-0 h-0 border-l-[16px] border-r-[16px] border-b-[28px] border-l-transparent border-r-transparent border-b-white"></div>
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2">
                <div className="w-1 h-4 bg-blue-600 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-1 -ml-0.5"></div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-xl font-medium text-gray-800 mb-8">
          Kamu Terindikasi Curang!
        </h1>
        <button 
          onClick={handleRestart}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Mulai Lagi
        </button>
      </div>
    </div>
  );
};

export default CheatingWarning;