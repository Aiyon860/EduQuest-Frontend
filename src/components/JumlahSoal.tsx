// JumlahSoalModal.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { createPortal } from "react-dom";

interface JumlahSoalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const JumlahSoalModal = ({ isOpen, onClose }: JumlahSoalModalProps) => {
  const [jumlahSoal, setJumlahSoal] = useState<string>("");

  const handleSubmit = () => {
    const jumlah = Number(jumlahSoal);
    if (!isNaN(jumlah) && jumlah > 0) {
      onClose();
      setJumlahSoal("");
    } else {
      alert("Masukkan jumlah soal yang valid!");
    }
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md mx-auto"
          >
            {/* Title */}
            <div className="text-center mb-8">
              <h1 className="text-lg font-medium text-gray-800 leading-relaxed">
                Tentukan jumlah soal
                <br />
                yang hendak dikerjakan!
              </h1>
            </div>

            {/* Input */}
            <div className="mb-8">
              <input
                type="number"
                placeholder="Masukkan jumlah soal"
                value={jumlahSoal}
                onChange={(e) => setJumlahSoal(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-center text-lg focus:outline-none focus:border-blue-500 transition-all duration-200"
              />
            </div>

            {/* Buttons */}
            <div className="text-center space-x-3">
              <button
                onClick={() => {
                  onClose();
                  setJumlahSoal("");
                }}
                className="border border-gray-300 text-gray-700 font-medium py-2 px-5 rounded-md text-md transition-colors duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-100 focus:ring-offset-2 hover:cursor-pointer"
              >
                Batal
              </button>
              <button
                onClick={handleSubmit}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-md text-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 hover:cursor-pointer"
              >
                Kerjakan
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default JumlahSoalModal;