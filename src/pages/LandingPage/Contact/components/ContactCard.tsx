interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

const ContactCard = ({ icon, title, value }: ContactCardProps) => (
  <div className="bg-[#0096C7] text-white p-2 rounded-lg flex items-center gap-3 min-h-16">
    <div className="text-white text-xl bg-cyan-400 rounded-lg p-2">
      {icon}
    </div>
    <div className="flex flex-col justify-start items-start">
      <div className="font-medium text-xs opacity-90 text-left">{title}</div>
      <div className="font-semibold text-sm text-left">{value}</div>
    </div>
  </div>
);

export default ContactCard;