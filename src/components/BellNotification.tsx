import { Popover } from "flowbite-react";
import { Bell } from "lucide-react";
import NotificationDetail from "@/components/NotificationDetail";

const BellNotification = ({ unreadNotifications }: { unreadNotifications: number }) => {
  return (
    <Popover
      clearTheme={{
        "base": true,
      }}
      theme={{
        "base": "absolute z-20 inline-block w-max max-w-[100vw] rounded-lg bg-white shadow-lg outline-none",
      }}
      aria-labelledby="notification-popover"
      trigger="click"
      placement="bottom-start"
      arrow={false}
      content={
        <NotificationDetail />
      }
    >
      <button className="bg-gray-300 rounded-lg flex justify-center items-center w-auto h-auto p-4 hover:bg-gray-400/60 hover:cursor-pointer transition-all duration-100 ease-in-out group relative">
        <Bell className="w-full h-full text-gray-500/70 group-hover:text-gray-600 relative" />
        {unreadNotifications > 0 && (
          <span className="absolute top-2 left-3 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-medium rounded-full bg-red-500 text-white">
            {unreadNotifications}
          </span>
        )}
      </button>
    </Popover>
  );
};

export default BellNotification;
