import { motion } from "motion/react";

const FeatureLeft = ({
  info,
}: {
  info: { imageFeature: string; title: string; description: string };
}) => {
  return (
    <div className="gap-2 justify-items-center items-center sm:gap-12 py-8 w-full xl:gap-24 grid grid-cols-1 md:grid-cols-12 sm:py-16">
      <div className="mt-4 text-center md:text-left md:mt-0 col-span-6 order-2 sm:order-1">
        <div className="flex-col sm:flex-row items-center gap-4">
          <h2 className="mb-4 text-lg md:text-3xl tracking-tight font-bold text-gray-900">
            {info.title}
          </h2>
        </div>
        <p className="mb-6 font-light text-gray-500 text-sm md:text-lg">
          {info.description}
        </p>
      </div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="col-span-6 w-full max-w-lg mx-auto md:mx-0 order-1 sm:order-2 rounded-2xl overflow-hidden"
      >
        <img
          className="w-full h-full object-cover"
          src={info.imageFeature}
          alt={info.title}
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

export default FeatureLeft;
