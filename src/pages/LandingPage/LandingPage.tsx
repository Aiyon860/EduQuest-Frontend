import Hero from "@/pages/LandingPage/Hero/Hero";
import Statistics from "@/pages/LandingPage/Statistics/Statistics";
import Testimony from "@/pages/LandingPage/Testimony/Testimony";
import Contact from "@/pages/LandingPage/Contact/Contact";

const LandingPage = () => {
  return (
    <div className="bg-white py-8 md:py-12 flex flex-col gap-48">
      <Hero />
      <Statistics />
      <Testimony />
      <Contact />
    </div>
  );
};

export default LandingPage;
