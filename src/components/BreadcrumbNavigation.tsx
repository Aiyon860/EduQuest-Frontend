import { Breadcrumb, BreadcrumbItem } from "flowbite-react";

export function BreadcrumbNavigation({ deepLevel, links }: { deepLevel: number, links: string[] }) {
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      {Array.from({ length: deepLevel }, (_, index) => (
        (index === deepLevel - 1) ? (
          <BreadcrumbItem key={index}>
            {`Level ${index + 1}`}
          </BreadcrumbItem>
        ) : (
          <BreadcrumbItem key={index} href={links[index]}>
            {`Level ${index + 1}`}
          </BreadcrumbItem>
        )
      ))}
    </Breadcrumb>
  );
}

export default BreadcrumbNavigation;