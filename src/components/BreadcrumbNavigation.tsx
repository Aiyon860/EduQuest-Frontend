import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface LinkBreadcrumbType {
  label: string;
  href?: string;
}

interface BreadcrumbNavigationProps {
  deepLevel: number;
  links: LinkBreadcrumbType[];
}

export function BreadcrumbNavigation({
  deepLevel,
  links,
}: BreadcrumbNavigationProps) {
  return (
    <nav aria-label="Breadcrumb Navigation" className="overflow-x-auto">
      <ol className="flex items-center space-x-2">
        {Array.from({ length: deepLevel }, (_, index) => {
          const isLast = index === deepLevel - 1;
          const link = links[index];

          return (
            <li key={index} className="flex items-center">
              {!isLast && link.href ? (
                <>
                  <Link
                    to={link.href}
                    className="text-blue-600 hover:underline text-nowrap"
                  >
                    {link.label}
                  </Link>
                  <ChevronRight className="w-4 h-4 mx-2" />
                </>
              ) : (
                <span className="text-gray-500 text-nowrap">{link.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default BreadcrumbNavigation;