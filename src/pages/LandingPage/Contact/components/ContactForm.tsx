import LabelInput from "@/pages/LandingPage/Contact/components/ContactLabelInput";
import SubmitMessageButton from "@/pages/LandingPage/Contact/components/ContactButton";

const ContactForm = () => {
  return (
    <form action="#" className="flex flex-col justify-start space-y-8">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-start">
          <LabelInput
            label="Nama"
            id="name"
            type="text"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="flex flex-col items-start">
          <LabelInput
            label="Email"
            id="email"
            type="email"
            placeholder="johndoe@example.com"
            required
          />
        </div>
      </div>
      <div>
        <LabelInput
          label="Subjek"
          id="subjek"
          type="text"
          placeholder="Tuliskan subjek pesan Anda..."
          required
        />
      </div>
      <div className="sm:col-span-2">
        <LabelInput
          label="Pesan Anda"
          id="pesan"
          type="text"
          textarea={true}
          placeholder="Tuliskan pesan Anda..."
          required
        />
      </div>
      <SubmitMessageButton />
    </form>
  );
};

export default ContactForm;
