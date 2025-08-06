import { useState } from "react";
import { useNavigate } from "react-router";
import { LogOut } from "lucide-react";
import clsx from "clsx";
import { useAuth } from "@/hooks/useAuth";

const LogoutButton = () => {
  const [focused, setFocused] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      });

      logout();

      navigate("/login", { replace: true });
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <button
      onClick={handleLogout}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className={clsx(
        "w-full flex items-center p-2 text-base font-normal rounded-lg group transition-colors",
        focused
          ? "text-white bg-[#3649F9]"
          : "text-gray-400 hover:text-gray-900 hover:bg-gray-100 cursor-pointer"
      )}
    >
      <LogOut
        className={clsx(
          "w-6 h-6 text-gray-400 transition duration-75",
          focused ? "text-white" : "group-hover:text-gray-900"
        )}
      />
      <span className="ml-3 plus-jakarta-sans-semibold">Keluar</span>
    </button>
  );
};

export default LogoutButton;