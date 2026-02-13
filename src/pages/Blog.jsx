import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';

const blogPosts = [
    {
        id: 1,
        title: "Everest Base Camp Trek: A Journey to Remember",
        excerpt: "Experience the thrill of reaching the base of the world's highest mountain...",
        image: "/src/assets/WhatsApp Image 2025-03-11 at 06.20.50.webp",
        date: "March 15, 2024",
        category: "Trekking"
    },
    {
        id: 2,
        title: "Annapurna Circuit: A Trekker's Paradise",
        excerpt: "Discover the diverse landscapes and rich culture along the Annapurna Circuit...",
        image: "/src/assets/WhatsApp Image 2025-03-11 at 06.20.42.webp",
        date: "March 12, 2024",
        category: "Adventure"
    },
    {
        id: 3,
        title: "Langtang Valley: Hidden Gem of Nepal",
        excerpt: "Explore the beautiful Langtang Valley and experience authentic Nepali culture...",
        image: "/src/assets/WhatsApp Image 2025-03-11 at 06.20.44.webp",
        date: "March 10, 2024",
        category: "Culture"
    },
    {
        id: 4,
        title: "Manaslu Circuit: Off the Beaten Path",
        excerpt: "A challenging yet rewarding trek through one of Nepal's most remote regions...",
        image: "/src/assets/WhatsApp Image 2025-03-11 at 06.18.01.webp",
        date: "March 8, 2024",
        category: "Trekking"
    },
    {
        id: 5,
        title: "Upper Mustang: The Last Forbidden Kingdom",
        excerpt: "Journey through the ancient kingdom of Lo and discover its unique culture...",
        image: "/src/assets/WhatsApp Image 2025-03-11 at 06.20.46.webp",
        date: "March 5, 2024",
        category: "Culture"
    },
    {
        id: 6,
        title: "Poon Hill Trek: Perfect for Beginners",
        excerpt: "An ideal introduction to trekking in the Annapurna region...",
        image: "/src/assets/WhatsApp Image 2025-03-11 at 06.20.45.webp",
        date: "March 3, 2024",
        category: "Trekking"
    }
];

const Blog = () => {
    return (
        <div className="min-h-screen bg-gray-900">
            {/* Hero Section */}
            <div className="relative py-20 bg-gradient-to-b from-gray-800 to-gray-900">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Our Blog
                        </h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Discover stories, tips, and insights from our trekking adventures in Nepal
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Blog Posts Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
                            >
                                <div className="relative h-64">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                                        <span className="flex items-center">
                                            <FaCalendarAlt className="mr-2" />
                                            {post.date}
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-bold text-white mb-3">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-300 mb-4">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-green-500 flex items-center">
                                            <FaTag className="mr-2" />
                                            {post.category}
                                        </span>
                                        <Link
                                            to={`/blogs/${post.id}`}
                                            className="text-green-500 hover:text-green-400 font-semibold inline-flex items-center"
                                        >
                                            Read More
                                            <FaArrowRight className="ml-2" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
