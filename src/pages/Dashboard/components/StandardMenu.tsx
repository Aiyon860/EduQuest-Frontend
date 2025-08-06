import { Link, useLocation } from "react-router";
import type { ReactNode } from "react";
import clsx from "clsx";

const StandardMenu = ({
  title,
  icon,
  link,
}: {
  title: string;
  icon: (isActive: boolean) => ReactNode;
  link: string;
}) => {
  const { pathname } = useLocation();
  const isActive = pathname === link;

  return (
    <Link
      to={link}
      className={clsx(
        "flex items-center p-2 text-base font-normal rounded-lg group transition-colors",
        isActive
          ? "text-white bg-[#3649F9]"
            : "text-gray-400 hover:text-gray-900 hover:bg-gray-100"
        )}
      >
      {icon(isActive)}
      <span className="ml-3 plus-jakarta-sans-semibold">{title}</span>
    </Link>
  );
};

export default StandardMenu;