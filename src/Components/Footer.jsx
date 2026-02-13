import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { FaFacebookF, FaYoutube, FaWhatsapp, FaTiktok } from 'react-icons/fa6';

// Import accreditation logos
import accLogo1 from '../assets/logo assets/WhatsApp Image 2025-02-03 at 02.57.54 (1).webp';
import accLogo2 from '../assets/logo assets/WhatsApp Image 2025-02-03 at 02.57.54 (2).webp';
import accLogo3 from '../assets/logo assets/WhatsApp Image 2025-02-03 at 02.57.54.webp';
import accLogo4 from '../assets/logo assets/WhatsApp Image 2025-02-03 at 02.57.55 (1).webp';
import accLogo5 from '../assets/logo assets/WhatsApp Image 2025-02-03 at 02.57.55 (2).webp';
import accLogo6 from '../assets/logo assets/WhatsApp Image 2025-02-03 at 02.57.55.webp';
import accLogo7 from '../assets/logo assets/WhatsApp Image 2025-02-03 at 02.57.56.webp';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-8 md:gap-0">
                    {/* Logo & Brand */}
                    <div className="flex flex-col items-center md:items-start">
                        <img src={logo} alt="EcoExplorer Logo" className="w-16 h-16 mb-3 rounded-full border-2 border-green-500" />
                        <h2 className="text-2xl font-bold text-white">Essence Treks</h2>
                        <p className="text-sm text-gray-400 mt-1">Conquer the Roof of the World, One Step at a Time!</p>
                    </div>
                    {/* Navigation */}
                    <nav className="flex flex-col items-center md:items-end gap-2">
                        <div className="flex flex-wrap gap-6 mb-2">
                            <Link to="/" className="hover:text-green-400 transition">Home</Link>
                            <Link to="/trekking" className="hover:text-green-400 transition">Trekkings</Link>
                            <Link to="/offering" className="hover:text-green-400 transition">Offerings</Link>
                            <Link to="/gallery" className="hover:text-green-400 transition">Gallery</Link>
                            <Link to="/blogs" className="hover:text-green-400 transition">Blogs</Link>
                            <Link to="/contact" className="hover:text-green-400 transition">Contact Us</Link>
                        </div>
                        <div className="flex gap-4 mt-2">
                            <a href="https://www.facebook.com/essencetreksinnepal/#" target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-400 transition">
                                <FaFacebookF size={22} />
                            </a>
                            <a href="https://www.youtube.com/user/essencettt" target="_blank" rel="noreferrer" className="text-red-500 hover:text-red-400 transition">
                                <FaYoutube size={22} />
                            </a>
                            <a href="https://wa.me/9779804148802" target="_blank" rel="noreferrer" className="text-green-500 hover:text-green-400 transition">
                                <FaWhatsapp size={22} />
                            </a>
                            <a href="https://www.tiktok.com/@essencetreksnepal.com?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer" className="text-gray-100 hover:text-gray-300 transition">
                                <FaTiktok size={22} />
                            </a>
                        </div>
                    </nav>
                </div>

                {/* Accredited By Section */}
                <div className="border-t border-gray-700 pt-8 pb-6">
                    <h3 className="text-lg font-semibold text-white text-center mb-6">Accredited By</h3>
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        <img src={accLogo1} alt="Accreditation Logo 1" className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity" />
                        <img src={accLogo2} alt="Accreditation Logo 2" className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity" />
                        <img src={accLogo3} alt="Accreditation Logo 3" className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity" />
                        <img src={accLogo4} alt="Accreditation Logo 4" className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity" />
                        <img src={accLogo5} alt="Accreditation Logo 5" className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity" />
                        <img src={accLogo6} alt="Accreditation Logo 6" className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity" />
                        <img src={accLogo7} alt="Accreditation Logo 7" className="h-16 object-contain opacity-70 hover:opacity-100 transition-opacity" />
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-6 text-center space-y-2">
                    <p className="text-sm">© {new Date().getFullYear()} Essence Treks. All rights reserved.</p>
                    <p className="text-sm">Developer: <strong>1 M Solutions Pvt. Ltd.</strong></p>
                    <p className="text-xs text-gray-400">Lakeside, Pokhara, Nepal | Phone: +977-9804148802, +061-452788, +061-452677</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
