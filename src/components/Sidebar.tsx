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
  LogOut
} from "lucide-react";
import Logo from "@/components/Logo";

const Sidebar = () => {
  return (
    <>
      <SidebarToggle />

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidenav"
      >
        <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200  ">
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-10">
              <div className="flex justify-center items-center w-full">
                <Logo />
              </div>
              <ul className="space-y-2">
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
                <DropdownMenu
                  title="Materi"
                  icon={
                    <BookText className="w-6 h-6 text-gray-400 transition duration-75  group-hover:text-gray-900 " />
                  }
                  items={[
                    { name: "SD", link: "/sd" },
                    { name: "SMP", link: "/smp" },
                    { name: "SMA", link: "/sma" },
                  ]}
                />
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
              </ul>
            </div>
            <StandardMenu
              title="Keluar"
              icon={(isActive) => (
                <LogOut
                  className={`w-6 h-6 text-gray-400 transition duration-75  ${
                    isActive ? "text-white" : "group-hover:text-gray-900"
                  }`}
                />
              )}
              link="/logout"
            />
          </div>
        </div>

        {/* Logout button (TBA) */}
      </aside>
    </>
  );
};

export default Sidebar;
