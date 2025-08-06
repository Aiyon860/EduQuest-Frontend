import CTA from "@/pages/LandingPage/Hero/components/CTA";
import Heading from "@/pages/LandingPage/Hero/components/HeroHeading";
import HeroImage from "@/pages/LandingPage/Hero/components/HeroImage";

const Hero = () => {
  return (
    <section id="hero" className="mt-20 lg:mt-0 px-8 md:px-20 scroll-mt-20">
      <div className="grid max-w-screen px-4 py-8 mx-auto lg:gap-16 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto flex flex-col items-start justify-center lg:col-span-7">
          <Heading />
          <CTA />
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;
