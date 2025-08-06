import { CircleArrowRight } from "lucide-react";
import * as motion from "motion/react-client";

const CTA = () => {
  return (
    <a
      href="#"
      className="flex items-center justify-center gap-2 px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-xl bg-[#FF6D00] hover:brightness-90 focus:ring-4 focus:ring-[#FF6D00] transition-all cursor-pointer"
    >
      <span>Mulai perkuat ingatanmu!</span>
      <motion.div
        style={{
          display: "flex",
          alignItems: "center", 
          justifyContent: "center",
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.23, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "circInOut",
        }}
      >
        <CircleArrowRight className="w-6 h-6"/>
      </motion.div>
    </a>
  );
};

export default CTA;
