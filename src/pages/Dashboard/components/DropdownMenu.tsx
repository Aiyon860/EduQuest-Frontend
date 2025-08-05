import { Link, useLocation } from "react-router";
import { useRef, useState, useEffect } from "react";
import type { ReactNode } from "react";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";

const DropdownMenu = ({
  title,
  icon,
  items,
}: {
  title: string;
  icon: ReactNode;
  items: { name: string; link: string }[];
}) => {
  const { pathname } = useLocation();

  // Check if any submenu item is active
  const isAnyChildActive = items.some((item) => pathname.startsWith(item.link));

  const [isOpen, setIsOpen] = useState(isAnyChildActive); // open if active
  const contentRef = useRef<HTMLUListElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        setHeight(`${contentRef.current.scrollHeight}px`);
      } else {
        setHeight("0px");
      }
    }
  }, [isOpen]);

  return (
    <li>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "flex items-center p-2 w-full text-base font-normal rounded-lg transition duration-200 group",
          isAnyChildActive || isOpen
            ? "text-gray-900 bg-gray-100"
            : "text-gray-400 hover:text-gray-900 hover:bg-gray-100"
        )}
      >
        {icon}
        <span className="flex-1 ml-3 text-left whitespace-nowrap plus-jakarta-sans-semibold">
          {title}
        </span>
        <span
          className={clsx(
            "transition-transform duration-300 ease-in-out",
            isOpen ? "rotate-180" : "rotate-0"
          )}
        >
          <ChevronDown className="w-6 h-6" />
        </span>
      </button>

      <ul
        ref={contentRef}
        style={{ maxHeight: height }}
        className={clsx(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "mt-2" : "mt-0",
          "space-y-2"
        )}
      >
        {items.map((item, index) => {
          const isActive = pathname.startsWith(item.link);
          return (
            <li key={index}>
              <Link
                to={item.link}
                className={clsx(
                  "flex items-center p-2 pl-11 w-full text-base font-normal rounded-lg transition duration-75 group plus-jakarta-sans-medium",
                  isActive
                    ? "text-white bg-[#3649F9]"
                    : "text-gray-400 hover:text-gray-900 hover:bg-gray-100"
                )}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default DropdownMenu;