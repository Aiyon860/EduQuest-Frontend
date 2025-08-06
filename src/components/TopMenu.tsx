import BellNotification from "@/components/BellNotification";
import ProfileShortcut from "@/components/ProfileShortcut";

const TopMenu = () => {
  return (
    <div className="flex w-full justify-end pt-5 pr-5 gap-3">
      <BellNotification unreadNotifications={1} />
      <ProfileShortcut firstName="John" lastName="Doe" className="Kelas 1" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="John Doe" />
    </div>
  )
};

export default TopMenu;