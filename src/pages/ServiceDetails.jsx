import { useLoaderData, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ServiceDetails = () => {
    const service = useLoaderData();
    if (!service) {
        return <div className="text-center text-gray-200 mt-20">Service not found.</div>;
    }
    return (
        <div className="w-11/12 mx-auto">
            <Helmet>
                <title>{service.serviceTitle} | Essence Treks</title>
            </Helmet>
            <div className="py-10 px-6 max-w-4xl mx-auto bg-[#23272f] rounded-lg shadow-lg my-20 text-gray-100">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white">{service.serviceTitle}</h1>
                    <img
                        src={service.image}
                        alt={service.serviceTitle}
                        className="mt-6 w-full h-72 object-cover rounded-lg shadow-md"
                    />
                </div>
                <div className="mt-8 space-y-6">
                    <p className="text-lg text-gray-200">{service.description}</p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="flex flex-col">
                            <span className="text-gray-400">Availability:</span>
                            <span className="font-semibold text-gray-100">{service.availability}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-400">Location:</span>
                            <span className="font-semibold text-gray-100">{service.serviceLocation}</span>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-white">Additional Information:</h4>
                        <p className="text-gray-200 mt-2">{service.additionalInfo}</p>
                    </div>
                    <div className="flex flex-col items-center mt-8 gap-3">
                        <Link to="/contact" className="w-full max-w-xs py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center">
                            Message Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
