import { Outlet } from "react-router";
import Sidebar from "@/components/Sidebar";
import TopMenu from "@/components/TopMenu";

const CoreAppLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-col gap-8">
        <TopMenu />
        <Outlet />
      </div>
    </div>
  );
};

export default CoreAppLayout;