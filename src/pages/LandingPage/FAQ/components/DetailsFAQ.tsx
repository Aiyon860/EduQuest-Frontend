import { useState, useRef, useEffect } from "react";

const DetailsFAQ = ({
  details,
}: {
  details: { question: string; answer: string };
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  return (
    <li className="border-b-2 border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-start items-center gap-3 px-4 py-3 w-full text-left font-medium hover:cursor-pointer"
      >
        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          ></path>
        </svg>
        <span>{details.question}</span>
      </button>

      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-max-height duration-300 ease-in-out"
      >
        <div className="px-12 pb-4 pt-1 text-left">{details.answer}</div>
      </div>
    </li>
  );
};

export default DetailsFAQ;