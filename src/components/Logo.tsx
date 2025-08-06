import EduQuestLogo from "@/assets/eduquest-logo.webp";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center justify-center gap-3">
      <img src={EduQuestLogo} className="h-8" alt="EduQuest Logo" />
      <span className="self-center text-2xl plus-jakarta-sans-bold whitespace-nowrap text-black">
        EduQuest
      </span>
    </Link>
  );
};

export default Logo;
