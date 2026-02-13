import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMountain, FaHiking, FaCamera, FaUsers } from "react-icons/fa";
import { fadeIn, slideInRight, slideInLeft, scaleIn } from "../utils/animations";
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { MdOutlineSecurity, MdOutlineSupportAgent, MdOutlineLocalActivity, MdOutlineDirectionsWalk } from 'react-icons/md';
import { BsArrowRight } from 'react-icons/bs';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

// Import images for the slider
import img28 from "../assets/ban1.jpeg";  // Annapurna Base Camp
import img29 from "../assets/ban2.jpeg";  // Everest Base Camp
import img30 from "../assets/ban3.jpeg";  // Langtang Valley
import img31 from "../assets/ban4.jpeg";  // Manaslu Circuit
import img32 from "../assets/Annapurna-Base-Camp-Trek.jpg";
import img33 from "../assets/WhatsApp Image 2025-03-11 at 06.20.49 (1).webp";
import img34 from "../assets/WhatsApp Image 2025-03-11 at 06.20.50 (1).webp";
import img35 from "../assets/WhatsApp Image 2025-03-11 at 06.20.51.webp";
import img36 from "../assets/WhatsApp Image 2025-03-11 at 06.20.52.webp";
import img37 from "../assets/WhatsApp Image 2025-03-11 at 06.19.48.webp";
import img38 from "../assets/WhatsApp Image 2025-03-11 at 06.19.50.webp";

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentBanner, setCurrentBanner] = useState(0);
    const navigate = useNavigate();
    const bannerImages = [
        "/src/assets/WhatsApp Image 2025-03-11 at 06.20.44.webp",  // Beautiful mountain view
        "/src/assets/WhatsApp Image 2025-03-11 at 06.20.45.webp",  // Scenic valley
        "/src/assets/WhatsApp Image 2025-03-11 at 06.20.46.webp"   // Mountain path
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
        }, 6000);

        return () => clearInterval(timer);
    }, []);

    const homePageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Essence Treks - Home",
        "description": "Welcome to Essence Treks, your premier trekking and adventure partner in Nepal. Discover the majestic Himalayas with our expert guides.",
        "mainEntity": {
            "@type": "TravelAgency",
            "name": "Essence Treks",
            "description": "Nepal's leading trekking and adventure company offering professional guided tours in the Himalayas.",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Lakeside",
                "addressLocality": "Pokhara",
                "addressRegion": "Gandaki",
                "postalCode": "33700",
                "addressCountry": "NP"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "28.217773996433355",
                "longitude": "83.95865098651072"
            },
            "telephone": "+977-9800000000",
            "email": "info@essencetreks.com",
            "url": "https://essencetreks.com",
            "sameAs": [
                "https://www.facebook.com/essencetreks",
                "https://www.instagram.com/essencetreks",
                "https://www.linkedin.com/company/essencetreks"
            ],
            "priceRange": "$$",
            "areaServed": "Nepal",
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Trekking and Adventure Tours",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "TouristTrip",
                            "name": "Annapurna Base Camp Trek",
                            "description": "Experience the majestic Annapurna Base Camp trek with professional guides and comfortable accommodations."
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "TouristTrip",
                            "name": "Everest Base Camp Trek",
                            "description": "Trek to the base of the world's highest mountain with experienced guides and proper acclimatization."
                        }
                    }
                ]
            }
        }
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
    };

    const sliderImages = [
        {
            src: img28,
            alt: "Annapurna Base Camp"
        },
        {
            src: img29,
            alt: "Everest Base Camp"
        },
        {
            src: img30,
            alt: "Langtang Valley"
        },
        {
            src: img31,
            alt: "Manaslu Circuit"
        },
        {
            src: img32,
            alt: "Annapurna Circuit"
        },
        {
            src: img33,
            alt: "Himalayan Sunrise"
        },
        {
            src: img34,
            alt: "Mountain Village"
        },
        {
            src: img35,
            alt: "Scenic Trail"
        },
        {
            src: img36,
            alt: "Valley View"
        },
        {
            src: img37,
            alt: "Mountain Path"
        },
        {
            src: img38,
            alt: "Himalayan Journey"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900">
            <Helmet>
                <title>Essence Treks - Your Adventure Partner in Nepal</title>
                <meta name="description" content="Discover the best trekking and adventure tours in Nepal with Essence Treks. Professional guides, eco-friendly tours, and unforgettable Himalayan experiences. Book your adventure today!" />
                <meta name="keywords" content="Nepal trekking, Himalayan adventures, eco-tourism, trekking tours, Nepal travel, adventure tourism, mountain trekking, cultural tours, Pokhara trekking, Annapurna trek, Everest base camp" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Essence Treks" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="7 days" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://essencetreks.com" />
                <meta property="og:title" content="Essence Treks - Your Adventure Partner in Nepal" />
                <meta property="og:description" content="Discover the best trekking and adventure tours in Nepal with Essence Treks. Professional guides, eco-friendly tours, and unforgettable Himalayan experiences." />
                <meta property="og:image" content="https://essencetreks.com/hero-bg.jpg" />
                
                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://essencetreks.com" />
                <meta property="twitter:title" content="Essence Treks - Your Adventure Partner in Nepal" />
                <meta property="twitter:description" content="Discover the best trekking and adventure tours in Nepal with Essence Treks. Professional guides, eco-friendly tours, and unforgettable Himalayan experiences." />
                <meta property="twitter:image" content="https://essencetreks.com/hero-bg.jpg" />
                
                {/* Canonical URL */}
                <link rel="canonical" href="https://essencetreks.com" />
                
                {/* Additional SEO tags */}
                <meta name="geo.region" content="NP" />
                <meta name="geo.placename" content="Pokhara" />
                <meta name="geo.position" content="28.217773996433355;83.95865098651072" />
                <meta name="ICBM" content="28.217773996433355, 83.95865098651072" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(homePageSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <div className="relative h-screen w-full overflow-hidden">
                {/* Blurred side overlays - hidden on mobile */}
                <div className="hidden md:block absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-20 backdrop-blur-sm"></div>
                <div className="hidden md:block absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-black/90 via-black/50 to-transparent z-20 backdrop-blur-sm"></div>
                
                {/* Main overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 z-10" />
                
                <motion.img
                    key={currentBanner}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    src={bannerImages[currentBanner]}
                    alt="Majestic Himalayas - Essence Treks Nepal"
                    className="absolute inset-0 w-full md:w-[140%] h-full object-cover object-center md:-translate-x-[20%]"
                    style={{
                        filter: 'brightness(1.05) contrast(1.1) saturate(1.1)',
                        imageRendering: 'crisp-edges',
                        WebkitBackfaceVisibility: 'hidden',
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(0)',
                        WebkitTransform: 'translateZ(0)'
                    }}
                />
                <div className="relative z-30 flex flex-col items-center justify-center h-full text-white text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-7xl font-bold mb-6 text-shadow-lg leading-tight">
                            Discover Nepal's Hidden Treasures
                        </h1>
                        <p className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto text-shadow font-light">
                            Experience the magic of the Himalayas with our expert guides and unforgettable adventures
                        </p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link
                                to="/trekking"
                                className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center shadow-lg hover:shadow-xl"
                            >
                                Start Your Adventure
                            </Link>
                            <Link
                                to="/contact"
                                className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center shadow-lg hover:shadow-xl"
                            >
                                Contact Us
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
                {/* Banner Navigation Dots */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
                    {bannerImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentBanner(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                                currentBanner === index ? 'bg-white scale-110' : 'bg-white/50'
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* About Section */}
            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                        Why Choose Essence Treks?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg text-center transform hover:scale-105 transition-transform"
                        >
                            <FaMountain className="text-4xl text-green-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2">Expert Guides</h3>
                            <p className="text-gray-300">
                                Our experienced guides ensure safe and memorable adventures
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg text-center transform hover:scale-105 transition-transform"
                        >
                            <FaHiking className="text-4xl text-green-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2">Eco-Friendly</h3>
                            <p className="text-gray-300">
                                Sustainable tourism practices to protect Nepal's natural beauty
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg text-center transform hover:scale-105 transition-transform"
                        >
                            <FaCamera className="text-4xl text-green-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2">Unforgettable Views</h3>
                            <p className="text-gray-300">
                                Breathtaking landscapes and cultural experiences
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg text-center transform hover:scale-105 transition-transform"
                        >
                            <FaUsers className="text-4xl text-green-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2">Local Experience</h3>
                            <p className="text-gray-300">
                                Authentic cultural immersion and local community support
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Capturing Moments Slider Section */}
            <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-gray-800">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-8 md:mb-12"
                    >
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                            Capturing Moments
                        </h2>
                        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto px-4">
                            A journey through the breathtaking landscapes and unforgettable experiences of Nepal
                        </p>
                    </motion.div>
                    
                    <div className="relative max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="overflow-hidden rounded-xl md:rounded-2xl shadow-2xl"
                        >
                            <div 
                                className="flex transition-transform duration-1000 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {sliderImages.map((image, index) => (
                                    <div 
                                        key={index}
                                        className="w-full flex-shrink-0 cursor-pointer"
                                        onClick={() => navigate('/gallery')}
                                    >
                                        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="w-full h-full object-cover object-center"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 md:p-3 rounded-full hover:bg-black/60 transition-all duration-300 transform hover:scale-110 z-10"
                            aria-label="Previous slide"
                        >
                            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 md:p-3 rounded-full hover:bg-black/60 transition-all duration-300 transform hover:scale-110 z-10"
                            aria-label="Next slide"
                        >
                            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Slide Indicators */}
                        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-10">
                            {sliderImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                                        currentSlide === index ? 'bg-white scale-110' : 'bg-white/50'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-gray-800">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Our Services
                        </h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Comprehensive trekking services tailored to your needs
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg text-center transform hover:scale-105 transition-transform"
                        >
                            <FaMountain className="text-4xl text-green-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2">Annapurna Base Camp Trek</h3>
                            <p className="text-gray-300">
                                Experience the majestic Annapurna Base Camp trek with professional guides and comfortable accommodations.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg text-center transform hover:scale-105 transition-transform"
                        >
                            <FaHiking className="text-4xl text-green-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2">Everest Base Camp Trek</h3>
                            <p className="text-gray-300">
                                Trek to the base of the world's highest mountain with experienced guides and proper acclimatization.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg text-center transform hover:scale-105 transition-transform"
                        >
                            <FaCamera className="text-4xl text-green-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2">Customized Treks</h3>
                            <p className="text-gray-300">
                                Tailored trekking experiences to suit your preferences and fitness level.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-lg text-center transform hover:scale-105 transition-transform"
                        >
                            <FaUsers className="text-4xl text-green-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-white mb-2">Guided Tours</h3>
                            <p className="text-gray-300">
                                Professional guided tours with knowledgeable and experienced guides.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <Testimonials />

            {/* Call to Action with Background Image */}
            <section className="py-20 relative">
                <div className="absolute inset-0 bg-[url('/src/assets/ban2.jpeg')] bg-cover bg-center bg-fixed opacity-30" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        Ready to Start Your Adventure?
                    </h2>
                    <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
                        Join us for an unforgettable journey through the majestic Himalayas. Our expert guides are ready to make your dream adventure a reality.
                    </p>
                    <Link
                        to="/contact"
                        className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors inline-block transform hover:scale-105"
                    >
                        Contact Us Today
                    </Link>
                </div>
            </section>

            {/* Location Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-white animate__animated animate__fadeInDown animate__delay-1s">
                        Find Us
                    </h2>
                    <p className="mt-2 text-lg text-gray-200 px-3">
                        Visit our office in the heart of Pokhara
                    </p>
                </div>
                <div className="bg-[#23272f] rounded-xl shadow-2xl overflow-hidden">
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-4">Our Location</h3>
                        <p className="text-gray-200 mb-4">Essence Tours and Travels & Treks and Expedition Pvt. LTD.</p>
                        <p className="text-gray-200">Lakeside, Pokhara, Nepal</p>
                    </div>
                    <div className="w-full h-[400px]">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.217773996433355!2d83.95865098651072!3d28.217773996433355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDEzJzA0LjAiTiA4M8KwNTcnMzEuMSJF!5e0!3m2!1sen!2snp!4v1620000000000!5m2!1sen!2snp"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                {/* ... existing footer code ... */}
            </footer>
        </div>
    );
};

export default Home;
