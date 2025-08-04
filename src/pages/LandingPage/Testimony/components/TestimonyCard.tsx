import * as motion from "motion/react-client";

const TestimonyCard = ({
  info,
}: {
  info: {
    review: string;
    name: string;
    studyLevel: string;
    profilePicture: string;
  }
}) => {
  return (
    <motion.div
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 300 }}
    >
    <div
      className="flex flex-col gap-2 items-start max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm text-left hover:outline-2 hover:outline-[#FF6D00] hover:outline-offset-2 transition-all"
    >
      <div className="flex flex-col gap-5 h-52">
        <div className="w-32 h-32 relative overflow-hidden rounded-full -mt-24">
          <img src={info.profilePicture} alt="testimoni 1" className="w-full h-full object-cover" />
        </div>
        <p>"{info.review}"</p>
      </div>
      <div className="w-full h-px bg-gray-700 my-4"></div>
      <div className="flex flex-col gap-1">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900">
          {info.name}
        </h5>
        <p className="font-normal text-gray-700">
          {info.studyLevel}
        </p>
      </div>
    </div>
    </motion.div>
  );
};

export default TestimonyCard;
