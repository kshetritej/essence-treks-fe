import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
    if (!blog) return null;

    return (
        <Link to={`/blogs/${blog.id}`} className="block">
            <div className="bg-[#23272f] rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition text-gray-100">
                <img 
                    src={blog.image || "https://via.placeholder.com/300"} 
                    alt={blog.title || "Blog Image"} 
                    className="w-full md:w-1/3 object-cover h-48 md:h-60"
                />
                <div className="p-6 flex flex-col justify-between">
                    <h2 className="text-2xl font-bold text-white">{blog.title || "Untitled Blog"}</h2>
                    <p className="text-gray-200 mt-2 line-clamp-2">{blog.content || "No description available."}</p>
                    <span className="mt-4 inline-block bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition w-max">
                        Read More
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default BlogCard;
