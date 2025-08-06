import EduQuestLogo from "@/assets/eduquest-logo.png";

const Logo = () => {
  return (
    <a href="/" className="flex items-center justify-center gap-3">
      <img src={EduQuestLogo} className="h-8" alt="EduQuest Logo" />
      <span className="self-center text-2xl plus-jakarta-sans-bold whitespace-nowrap text-black">
        EduQuest
      </span>
    </a>
  );
};

export default Logo;
