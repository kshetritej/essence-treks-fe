import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            country: "United States",
            image: "/src/assets/WhatsApp Image 2025-03-11 at 06.20.50.webp",
            rating: 5,
            text: "The Everest Base Camp trek was the adventure of a lifetime! The team at Essence Treks made everything seamless, from the initial planning to the final farewell. Our guide was knowledgeable, caring, and made us feel safe throughout the journey. The views were absolutely breathtaking, and the cultural experiences were unforgettable.",
            trek: "Everest Base Camp Trek"
        },
        {
            id: 2,
            name: "Michael Chen",
            country: "Australia",
            image: "/src/assets/Annapurna-Base-Camp-Trek.jpg",
            rating: 5,
            text: "I chose the Annapurna Circuit for my first trek in Nepal, and it exceeded all expectations. The diverse landscapes, from lush valleys to arid highlands, were incredible. The team's attention to detail and local knowledge made all the difference. I'll definitely be back for another adventure!",
            trek: "Annapurna Circuit"
        },
        {
            id: 3,
            name: "Emma Rodriguez",
            country: "Spain",
            image: "/src/assets/WhatsApp Image 2025-03-11 at 06.20.44.webp",
            rating: 5,
            text: "The Langtang Valley trek was a perfect blend of natural beauty and cultural immersion. The local communities welcomed us with open arms, and our guide's insights into the region's history and traditions enriched the experience. The team's commitment to responsible tourism is commendable.",
            trek: "Langtang Valley Trek"
        },
        {
            id: 4,
            name: "David Thompson",
            country: "United Kingdom",
            image: "/src/assets/WhatsApp Image 2025-03-11 at 06.18.01.webp",
            rating: 5,
            text: "The Manaslu Circuit was exactly what I was looking for - a challenging yet rewarding trek away from the crowds. The team's expertise in handling the logistics made the journey smooth, and the local teahouse experiences were authentic and memorable. Highly recommended!",
            trek: "Manaslu Circuit"
        },
        {
            id: 5,
            name: "Sophie Martin",
            country: "France",
            image: "/src/assets/WhatsApp Image 2025-03-11 at 06.20.46.webp",
            rating: 5,
            text: "Upper Mustang was like stepping into a different world. The ancient Tibetan culture, dramatic landscapes, and warm hospitality made this trek truly special. Our guide's knowledge of the region's history and traditions added depth to the experience. A must-visit for cultural enthusiasts!",
            trek: "Upper Mustang Trek"
        },
        {
            id: 6,
            name: "James Wilson",
            country: "Canada",
            image: "/src/assets/WhatsApp Image 2025-03-11 at 06.20.45.webp",
            rating: 5,
            text: "As a first-time trekker, I couldn't have asked for a better introduction to the Himalayas than the Poon Hill trek. The team's patience and support made the journey comfortable, and the views were absolutely stunning. The perfect balance of challenge and enjoyment!",
            trek: "Poon Hill Trek"
        }
    ];

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Frame size (fixed height)
    const frameHeight = isMobile ? 480 : 420;

    return (
        <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">
                        What Our Trekkers Say
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Read about the experiences of our trekkers who have explored the majestic Himalayas with us
                    </p>
                </motion.div>
                <div className="relative max-w-7xl mx-auto">
                    {/* Scrollable Track */}
                    <div
                        className="overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-800"
                        style={{ height: frameHeight }}
                    >
                        <div
                            className="flex gap-8"
                            style={{ minWidth: isMobile ? '100%' : '900px', height: frameHeight, scrollSnapType: 'x mandatory' }}
                        >
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="flex-shrink-0 w-full md:w-1/3 px-2"
                                    style={{ minWidth: isMobile ? '100%' : '33.3333%' , scrollSnapAlign: 'start', height: frameHeight }}
                                >
                                    <div className="bg-gray-800 rounded-xl p-6 shadow-xl h-full flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300">
                                        <div>
                                            <div className="flex items-center mb-4">
                                                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                                                    <img
                                                        src={testimonial.image}
                                                        alt={testimonial.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-white">
                                                        {testimonial.name}
                                                    </h3>
                                                    <p className="text-gray-400">
                                                        {testimonial.country}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center mb-4">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <FaStar key={i} className="text-yellow-500" />
                                                ))}
                                            </div>
                                            <div className="relative mb-4">
                                                <FaQuoteLeft className="text-green-500 text-2xl mb-2" />
                                                <p className="text-gray-300 italic">
                                                    {testimonial.text}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-green-500 font-semibold mt-4">
                                            {testimonial.trek}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
