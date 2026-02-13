import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import ContactUs from "./pages/ContactUs";
import Trekkings from "./pages/Trekkings";
import Offerings from "./pages/Offerings";

const App = () => {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": "Essence Treks Nepal",
        "url": "https://essencetreksnepal.com",
        "logo": "https://essencetreksnepal.com/logo.jpg",
        "description": "Essence Treks Nepal - Your trusted partner for authentic Himalayan adventures. We specialize in trekking, mountaineering, and cultural tours across Nepal's most stunning destinations.",
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
        "email": "info@essencetreksnepal.com",
        "sameAs": [
            "https://www.facebook.com/essencetreksnepal",
            "https://www.instagram.com/essencetreksnepal",
            "https://www.linkedin.com/company/essencetreksnepal"
        ],
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        },
        "priceRange": "$$",
        "areaServed": "Nepal",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Nepal Trekking and Adventure Tours",
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
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "TouristTrip",
                        "name": "Langtang Valley Trek",
                        "description": "Discover the beautiful Langtang Valley with its stunning mountain views and rich cultural heritage."
                    }
                }
            ]
        }
    };

    return (
        <Router>
            <div className="min-h-screen bg-gray-900">
                <Helmet>
                    <title>Essence Treks Nepal - Your Trusted Partner for Himalayan Adventures</title>
                    <meta name="description" content="Essence Treks Nepal offers authentic trekking experiences, mountaineering adventures, and cultural tours across Nepal's most stunning destinations. Book your Himalayan adventure today!" />
                    <meta name="keywords" content="Essence Treks Nepal, Nepal trekking, Himalayan adventures, eco-tourism, trekking tours, Nepal travel, adventure tourism, mountain trekking, cultural tours, Nepal hiking, sustainable tourism, Pokhara trekking, Annapurna trek, Everest base camp, Langtang trek" />
                    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                    <meta name="author" content="Essence Treks Nepal" />
                    <meta name="language" content="English" />
                    <meta name="revisit-after" content="7 days" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    
                    {/* Open Graph / Facebook */}
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://essencetreksnepal.com" />
                    <meta property="og:title" content="Essence Treks Nepal - Your Trusted Partner for Himalayan Adventures" />
                    <meta property="og:description" content="Experience authentic trekking adventures in Nepal with Essence Treks Nepal. Professional guides, eco-friendly tours, and unforgettable Himalayan experiences." />
                    <meta property="og:image" content="https://essencetreksnepal.com/logo.jpg" />
                    <meta property="og:site_name" content="Essence Treks Nepal" />
                    
                    {/* Twitter */}
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://essencetreksnepal.com" />
                    <meta property="twitter:title" content="Essence Treks Nepal - Your Trusted Partner for Himalayan Adventures" />
                    <meta property="twitter:description" content="Experience authentic trekking adventures in Nepal with Essence Treks Nepal. Professional guides, eco-friendly tours, and unforgettable Himalayan experiences." />
                    <meta property="twitter:image" content="https://essencetreksnepal.com/logo.jpg" />
                    
                    {/* Canonical URL */}
                    <link rel="canonical" href="https://essencetreksnepal.com" />
                    
                    {/* Additional SEO tags */}
                    <meta name="geo.region" content="NP" />
                    <meta name="geo.placename" content="Pokhara" />
                    <meta name="geo.position" content="28.217773996433355;83.95865098651072" />
                    <meta name="ICBM" content="28.217773996433355, 83.95865098651072" />
                    
                    {/* Performance Optimization */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                    <link rel="dns-prefetch" href="https://essencetreksnepal.com" />

                    {/* Structured Data */}
                    <script type="application/ld+json">
                        {JSON.stringify(organizationSchema)}
                    </script>
                </Helmet>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blogs" element={<Blog />} />
                    <Route path="/blogs/:id" element={<BlogDetails />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/trekking" element={<Trekkings />} />
                    <Route path="/offering" element={<Offerings />} />
                </Routes>
                <Footer />
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </div>
        </Router>
    );
};

export default App;
