import Hero from "@/pages/LandingPage/Hero/Hero";
import Statistics from "@/pages/LandingPage/Statistics/Statistics";
import Testimony from "@/pages/LandingPage/Testimony/Testimony";
import Contact from "@/pages/LandingPage/Contact/Contact";
import Features from "@/pages/LandingPage/Features/Features";
import FAQ from "@/pages/LandingPage/FAQ/FAQ";

const LandingPage = () => {
  return (
    <div className="bg-white pt-8 md:pt-12 flex flex-col gap-48">
      <Hero />
      <Statistics />
      <Features />
      <Testimony />
      <FAQ />
      <Contact />
    </div>
  );
};

export default LandingPage;
