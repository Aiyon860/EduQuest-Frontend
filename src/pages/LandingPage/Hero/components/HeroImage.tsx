import girlStudyingImage from "@/assets/hero.png";
import * as motion from "motion/react-client"

const HeroImage = () => {
  return (
    <motion.img
      src={girlStudyingImage}
      alt="girl studying"
      animate={{
        y: [0, 20, 0],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{ rotateZ: 3 }}
      whileTap={{ scale: 0.8 }}
      loading="eager"
    />
  );
}

export default HeroImage;