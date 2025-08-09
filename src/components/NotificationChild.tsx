import { ClipboardList, Goal, ChartBarDecreasing, Award } from "lucide-react";
import { type ReactNode } from "react";

type NotificationType =
  | "Peringkat Dicapai"
  | "Penghargaan Baru"
  | "Misi Harian"
  | "Latihan Soal";

interface NotificationChildProps {
  LastActivityType: NotificationType;
  description: string;
  date: string;
  isAlreadyRead: boolean;
}

interface NotificationItem {
  icon: ReactNode;
  bgColorIcon: string;
}

type NotificationIconType = Record<NotificationType, NotificationItem>;

const NotificationChild = ({
  LastActivityType,
  description,
  date,
  isAlreadyRead,
}: NotificationChildProps) => {
  const iconType: NotificationIconType = {
    "Peringkat Dicapai": {
      icon: <ChartBarDecreasing className="text-[#8F00FF]" />,
      bgColorIcon: "bg-[#F3E4FF]",
    },
    "Penghargaan Baru": {
      icon: <Award className="text-[#008E13]" />,
      bgColorIcon: "bg-[#D4FFDA]",
    },
    "Misi Harian": {
      icon: <Goal className="text-[#FFAD47]" />,
      bgColorIcon: "bg-[#FFE4C2]",
    },
    "Latihan Soal": {
      icon: <ClipboardList className="text-[#008AD8]" />,
      bgColorIcon: "bg-[#E4FAFF]",
    },
  };

  return (
    <div className="flex justify-between items-center p-4 gap-4">
      {isAlreadyRead && (
        <div className="flex justify-center items-center gap-2">
          <div className="rounded-full w-2 h-2 bg-red-500"></div>
        </div>
      )}
      <div className="flex items-start gap-4">
        <div className={`${iconType[LastActivityType].bgColorIcon} p-2 rounded-full`}>
          {iconType[LastActivityType].icon}
        </div>
        <div className="flex flex-col gap-1 justify-start items-start text-left text-black">
          <span className="font-semibold">{LastActivityType}</span>
          <span className="text-sm text-gray-500">{description}</span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <time dateTime={date} className="text-xs text-gray-500">
          {date}
        </time>
      </div>
    </div>
  );
};

export default NotificationChild;
