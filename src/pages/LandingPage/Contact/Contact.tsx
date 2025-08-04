import ContactHeading from "@/pages/LandingPage/Contact/components/ContactHeading";
import ContactForm from "@/pages/LandingPage/Contact/components/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="px-8 md:px-20 bg-gray-100 scroll-mt-16">
      <div className="py-12 lg:py-16 px-4 mx-auto max-w-3xl flex flex-col gap-12">
        <ContactHeading />
        <div className="grid grid-cols-1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;