import { AlertTriangle } from 'lucide-react';

const Warning = () => {
    const handleRestart = () => {
        window.location.href = '/dashboard';
    };

    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-[100] bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-3xl shadow-lg p-8 text-center max-w-md w-full">
                <div className="mb-6">
                    <div className="w-20 h-20 mx-auto bg-blue-600 rounded-full flex items-center justify-center">
                        <AlertTriangle size={40} color="white" />
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

export default Warning;
