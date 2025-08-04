const NumberSection = ({
  stat,
  index,
}: {
  stat: { number: string; description: string };
  index: number;
}) => {
  return (
    <>
      <div
        key={index}
        className="flex flex-col items-center justify-center gap-2 px-5 py-3 mr-3 text-center"
      >
        <h3 className="plus-jakarta-sans-bold text-4xl">{stat.number}</h3>
        <span className="plus-jakarta-sans-regular text-md">
          {stat.description}
        </span>
      </div>
    </>
  );
};

export default NumberSection;
