import SidebarToggle from "@/pages/Dashboard/components/SidebarToggle";
import StandardMenu from "@/pages/Dashboard/components/StandardMenu";
import DropdownMenu from "@/pages/Dashboard/components/DropdownMenu";
import {
  LayoutDashboard,
  BookText,
  Goal,
  ChartBarDecreasing,
  Users,
  Award,
  History,
} from "lucide-react";
import Logo from "@/components/Logo";
import LogoutButton from "@/components/LogoutButton";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";

const Sidebar = () => {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <>
      <SidebarToggle />

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidenav"
      >
        <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 flex flex-col justify-between gap-24">
          <div className="flex flex-col gap-10">
            <div className="flex justify-center items-center w-full">
              <Logo />
            </div>
            <ul className="space-y-2">
              <li>
                <StandardMenu
                  title="Dashboard"
                  icon={(isActive) => (
                    <LayoutDashboard
                      className={`w-6 h-6 text-gray-400 transition duration-75 ${
                        isActive ? "text-white" : "group-hover:text-gray-900"
                      }`}
                    />  
                  )}
                  link="/dashboard"
                />
              </li>
              <li>
                <DropdownMenu
                  title="Materi"
                  icon={
                    <BookText className="w-6 h-6 text-gray-400 transition duration-75  group-hover:text-gray-900 " />
                  }
                  items={[
                    { name: "SD", link: "/jenjang/sd" },
                    { name: "SMP", link: "/jenjang/smp" },
                    { name: "SMA", link: "/jenjang/sma" },
                  ]}
                />
              </li>
              <li>
                <StandardMenu
                  title="Misi Harian"
                  icon={(isActive) => (
                    <Goal
                      className={`w-6 h-6 text-gray-400 transition duration-75  ${
                        isActive ? "text-white" : "group-hover:text-gray-900"
                      }`}
                    />
                  )}
                  link="/quests"
                />
              </li>
              <li>
                <DropdownMenu
                  title="Papan Peringkat"
                  icon={
                    <ChartBarDecreasing className="w-6 h-6 text-gray-400 transition duration-75  group-hover:text-gray-900 " />
                  }
                  items={[
                    { name: "Global", link: "/leaderboard/global" },
                    { name: "Antar Klan", link: "/leaderboard/clans" },
                  ]}
                />
              </li>
              <li>
                <StandardMenu
                  title="Klan"
                  icon={(isActive) => (
                    <Users
                      className={`w-6 h-6 text-gray-400 transition duration-75  ${
                        isActive ? "text-white" : "group-hover:text-gray-900"
                      }`}
                    />
                  )}
                  link="/clans"
                />
              </li>
              <li>
                <StandardMenu
                  title="Penghargaan"
                  icon={(isActive) => (
                    <Award
                      className={`w-6 h-6 text-gray-400 transition duration-75  ${
                        isActive ? "text-white" : "group-hover:text-gray-900"
                      }`}
                    />
                  )}
                  link="/achievements"
                />
              </li>
              <li>
                <StandardMenu
                  title="Histori Pengerjaan"
                  icon={(isActive) => (
                    <History
                      className={`w-6 h-6 text-gray-400 transition duration-75  ${
                        isActive ? "text-white" : "group-hover:text-gray-900"
                      }`}
                    />
                  )}
                  link="/history"
                />
              </li>
            </ul>
          </div>
          <LogoutButton />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
