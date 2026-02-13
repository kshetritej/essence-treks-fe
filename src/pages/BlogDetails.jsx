import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/blogs.json")
            .then(res => res.json())
            .then(data => {
                const foundBlog = data.find(b => b.id === parseInt(id));
                setBlog(foundBlog);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error loading blog:", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="text-white text-xl">Loading...</div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="text-white text-xl">Blog not found</div>
            </div>
        );
    }

    const blogPostSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": blog.title,
        "description": blog.description,
        "image": blog.image,
        "datePublished": blog.date,
        "dateModified": blog.date,
        "author": {
            "@type": "Person",
            "name": blog.author
        },
        "publisher": {
            "@type": "Organization",
            "name": "Essence Treks",
            "logo": {
                "@type": "ImageObject",
                "url": "https://essencetreks.com/logo.jpg"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://essencetreks.com/blogs/${blog.id}`
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 py-20">
            <Helmet>
                <title>{`${blog.title} | Essence Treks Blog`}</title>
                <meta name="description" content={blog.description} />
                <meta name="keywords" content={`${blog.title}, Nepal trekking, Himalayan adventures, trekking guide, Nepal travel, ${blog.tags?.join(", ") || ""}`} />
                <meta name="robots" content="index, follow" />
                <meta name="author" content={blog.author} />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="7 days" />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`https://essencetreks.com/blogs/${blog.id}`} />
                <meta property="og:title" content={blog.title} />
                <meta property="og:description" content={blog.description} />
                <meta property="og:image" content={blog.image} />
                <meta property="article:published_time" content={blog.date} />
                <meta property="article:author" content={blog.author} />
                
                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={`https://essencetreks.com/blogs/${blog.id}`} />
                <meta property="twitter:title" content={blog.title} />
                <meta property="twitter:description" content={blog.description} />
                <meta property="twitter:image" content={blog.image} />
                
                {/* Canonical URL */}
                <link rel="canonical" href={`https://essencetreks.com/blogs/${blog.id}`} />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(blogPostSchema)}
                </script>
            </Helmet>

            <div className="container mx-auto px-4">
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-96 object-cover rounded-lg mb-8"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {blog.title}
                    </h1>
                    <div className="flex items-center text-gray-400 mb-8">
                        <span className="mr-4">By {blog.author}</span>
                        <span>{blog.date}</span>
                    </div>
                    <div className="prose prose-lg prose-invert max-w-none">
                        {blog.content}
                    </div>
                    {blog.tags && (
                        <div className="mt-8">
                            <h2 className="text-xl font-semibold text-white mb-4">Tags</h2>
                            <div className="flex flex-wrap gap-2">
                                {blog.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </motion.article>
            </div>
        </div>
    );
};

export default BlogDetails; 