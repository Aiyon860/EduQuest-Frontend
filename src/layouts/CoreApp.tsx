import { Outlet } from "react-router";
import Sidebar from "@/components/Sidebar";

const CoreAppLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Outlet /> {/* Here is where child routes render */}
    </div>
  );
};

export default CoreAppLayout;