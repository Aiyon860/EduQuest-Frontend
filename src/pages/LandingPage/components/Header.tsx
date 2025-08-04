import { AnimatePresence, motion } from "motion/react"; 
import EduQuestLogo from "@/assets/eduquest-logo.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      const isNowDesktop = window.innerWidth >= 768;
      setIsDesktop(isNowDesktop);
      if (isNowDesktop) setIsMenuOpen(false); 
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  const menus = [
    { name: "Beranda", href: "#hero" },
    { name: "Fitur", href: "#feature" },
    { name: "Testimoni", href: "#testimony" },
    { name: "FAQ", href: "#faq" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <header className="bg-black text-white">
      <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <img src={EduQuestLogo} className="h-8" alt="EduQuest Logo" />
            <span className="self-center text-2xl plus-jakarta-sans-bold whitespace-nowrap text-black">
              EduQuest
            </span>
          </a>

          {/* Right-side buttons & hamburger */}
          <div className="flex md:order-2 space-x-3 md:space-x-0">
            <div className="hidden sm:flex gap-3">
              <button className="text-black border border-black bg-white hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-4 py-2 text-center hover:text-white transition-colors cursor-pointer">
                Login
              </button>
              <button className="text-white bg-[#023E8A] hover:bg-[#023E8A]/70 focus:ring-4 focus:outline-none focus:ring-[#023E8A] font-medium rounded-lg text-sm px-4 py-2 text-center transition-all cursor-pointer">
                Sign Up
              </button>
            </div>

            {/* Hamburger menu (mobile only) */}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Desktop menu (always visible) */}
          <div className="hidden md:flex md:order-1 gap-3">
            <ul className="flex space-x-4 font-medium">
              {menus.map((menu) => (
                <li key={menu.name}>
                  <a
                    href={menu.href}
                    className="block py-2 px-3 text-gray-900 hover:text-blue-700"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu with animation */}
          <AnimatePresence>
            {isMenuOpen && !isDesktop && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full flex flex-col mt-4 md:hidden"
              >
                <ul className="flex flex-col p-4 font-medium border border-gray-100 rounded-lg bg-gray-50">
                  {menus.map((menu) => (
                    <li key={menu.name}>
                      <a
                        href={menu.href}
                        className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {menu.name}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-2 gap-3 w-full mt-4 sm:hidden">
                  <button className="text-black border border-black bg-white hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-4 py-2 text-center hover:text-white transition-colors cursor-pointer">
                    Login
                  </button>
                  <button className="text-white bg-[#023E8A] hover:bg-[#023E8A]/70 focus:ring-4 focus:outline-none focus:ring-[#023E8A] font-medium rounded-lg text-sm px-4 py-2 text-center transition-colors cursor-pointer">
                    Sign Up
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

export default Header;