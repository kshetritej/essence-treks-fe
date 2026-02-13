import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { id, serviceTitle, image, description } = service;
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 bg-[#23272f] text-gray-100">
            <img src={image} alt={serviceTitle} className="w-full h-48 object-cover" />
            <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-3">{serviceTitle}</h3>
                <p className="text-gray-200 mb-4 text-left">{description}</p>
                <div className="flex flex-col gap-3">
                    <Link to={`/services/${id}`} className="w-full py-2 px-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors block">
                        Learn More
                    </Link>
                    <Link to="/contact" className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors block">
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
