import Card from "@/pages/LandingPage/Contact/components/ContactCard";
import { Instagram, Facebook, Twitter, MapPin, Phone, Clock, Mail } from "lucide-react";

const ContactDetails = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white">
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Detail Kontak</h1>
      
      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Card
          icon={<MapPin size={24} />}
          title="Alamat"
          value="Jl. Pangeran Diponegoro no. 10, Semarang"
        />
        
        <Card
          icon={<Phone size={24} />}
          title="Telepon"
          value="+6208437783783"
        />
        
        <Card
          icon={<Clock size={24} />}
          title="Jam Operasional"
          value="Senin - Jumat: 08:00 - 16:00"
        />
        
        <Card
          icon={<Mail size={24} />}
          title="Email"
          value="eduquest@example.com"
        />
      </div>
      
      {/* Divider */}
      <hr className="border-gray-300 mb-6" />
      
      {/* Social Media Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">Media Sosial</h2>
        
        <div className="flex space-x-4">
          <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors">
            <Instagram size={24} />
          </button>
          <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors">
            <Facebook size={24} />
          </button>
          <button className="p-2 text-gray-700 hover:text-gray-900 transition-colors">
            <Twitter size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;