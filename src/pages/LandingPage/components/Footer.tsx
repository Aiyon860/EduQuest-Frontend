import {Mail, Phone } from "lucide-react";
import ig from "@/assets/ig.svg"
import tw from "@/assets/tw.svg"
import fb from "@/assets/fb.svg"
import wa from "@/assets/wa.svg"
import logo from "@/assets/logo.svg"

const Footer = () => {
    return (
        <footer className="bg-[#023E8A] text-white p-16">
            
            <div className="w-full max-w-screen-xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between gap-8">
                    <div className="flex items-center sm:items-start">
                        <div className="w-12 text-center">
                            <a href="https://flowbite.com/" className="inline-block">
                                <img src={logo} className="h-12 me-3" alt="FlowBite Logo" />
                            </a>
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-2xl font-semibold">EduQuest</span>
                            <p className="text-sm">Jl. Pangeran Diponegoro no. 10, Semarang</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-left">Kontak</h3>
                            <div className="flex items-center space-x-2 mb-2">
                                <div className="bg-[#00B4D8] p-2 rounded-full">
                                    <Mail className="h-4 w-4 text-white" />
                                </div>
                                <span>eduquest@example.com</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="bg-[#00B4D8] p-2 rounded-full">
                                    <Phone className="h-4 w-4 text-white" />
                                </div>
                                <span>+6208437783783</span>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3 text-left">Ikuti Kami</h3>
                            <ul className="space-y-2 text-sm text-left">
                                <li><a href="#" className="hover:underline">Instagram</a></li>
                                <li><a href="#" className="hover:underline">Twitter</a></li>
                                <li><a href="#" className="hover:underline">Facebook</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <hr className="border-gray-200 my-6" />
                <div className="flex flex-col md:flex-row items-left justify-between gap-4">
                    <div className="text-sm text-white text-left">© EduQuest. All Rights Reserved</div>
                    <div className="flex space-x-4">
                        <a href="#" aria-label="Instagram">
                            <img src={ig} alt="Instagram" className="w-5 h-5 hover:text-[#f9c9f9]" />
                        </a>
                        <a href="#" aria-label="Facebook">
                            <img src={fb} alt="Facebook" className="text-white w-5 h-5 hover:text-[#c9dcf9]" />
                        </a>
                        <a href="#" aria-label="Twitter">
                            <img src={tw} alt="Twitter" className="text-white w-5 h-5 hover:text-[#c9f1f9]" />
                        </a>
                        <a href="#" aria-label="WhatsApp">
                            <img src={wa} alt="WhatsApp" className="text-white w-5 h-5 hover:text-[#c9f9d6]" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
