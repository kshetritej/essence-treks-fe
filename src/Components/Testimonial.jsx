const Testimonial = ({ data }) => {
    const { name, location, message } = data;

    return (
        <div className="max-w-md mx-auto bg-[#23272f] rounded-lg shadow-lg p-6 m-4 transform transition duration-500 hover:scale-105 text-gray-100">
            <div className="flex items-center space-x-4 mb-6">
                <div>
                    <h3 className="text-lg font-semibold text-white">{name}</h3>
                    <p className="text-gray-400">{location}</p>
                </div>
            </div>
            <p className="text-gray-200 italic mb-6">"{message}"</p>
            <div className="border-t border-gray-700 pt-4">
                <p className="text-gray-400 text-sm">- Testimonial</p>
            </div>
        </div>
    );
};

export default Testimonial;
