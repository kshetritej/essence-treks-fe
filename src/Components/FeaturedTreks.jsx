import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMountain, FaHiking } from 'react-icons/fa';

const FeaturedTreks = () => {
    const [featuredTreks, setFeaturedTreks] = useState([]);

    useEffect(() => {
        fetch("/cards.json")
            .then(res => res.json())
            .then(data => {
                // Select featured treks (first 3 trekking destinations)
                setFeaturedTreks(data.slice(0, 3));
            });
    }, []);

    return (
        <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                    Featured Trekking Destinations
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredTreks.map((trek, index) => (
                        <motion.div
                            key={trek.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
                        >
                            <div className="relative h-64">
                                <img
                                    src={trek.image}
                                    alt={trek.adventureTitle}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">{trek.adventureTitle}</h3>
                                    <p className="text-gray-200 text-sm mb-4">{trek.shortDescription}</p>
                                    <div className="flex items-center gap-4 text-gray-200 text-sm">
                                        <span className="flex items-center">
                                            <FaMountain className="mr-2" />
                                            {trek.maxAltitude}
                                        </span>
                                        <span className="flex items-center">
                                            <FaHiking className="mr-2" />
                                            {trek["Trek duration"]}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-green-500 font-semibold">{trek.adventureCost}</span>
                                    <span className="text-gray-400">{trek.location}</span>
                                </div>
                                <Link
                                    to={`/trekking/${trek.id}`}
                                    className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-2 rounded-lg transition-colors"
                                >
                                    View Details
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link
                        to="/trekking"
                        className="inline-block bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
                    >
                        View All Treks
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedTreks; 