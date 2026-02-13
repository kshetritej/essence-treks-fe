import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

const CardDetails = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const data = useLoaderData();
    if (!data) {
        return <div className="text-center text-gray-200 mt-20">Trek not found.</div>;
    }
    const {
        adventureTitle,
        image,
        categoryName,
        shortDescription,
        adventureCost,
        bookingAvailability,
        location,
        duration,
        adventureLevel,
        includedItems = [],
        ecoFriendlyFeatures = [],
        maxGroupSize,
        specialInstructions = [],
        itinerary = [],
    } = data;

    const handleTalkWithExpert = () => {
        const currentTime = new Date();
        const currentHour = currentTime.getHours();

        if (currentHour >= 10 && currentHour < 20) {
            window.open('https://meet.google.com/', '_blank');
        } else {
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="w-11/12 mx-auto">
            <Helmet>
                <title>{adventureTitle} | Essence Trek</title>
            </Helmet>
            <div className="py-10 px-6 max-w-4xl mx-auto bg-[#23272f] rounded-lg shadow-lg my-20 text-gray-100">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white">{adventureTitle}</h1>
                    {categoryName && <h3 className="text-xl font-semibold text-gray-400 mt-2">{categoryName}</h3>}
                    <img
                        src={image}
                        alt={adventureTitle}
                        className="mt-6 w-full h-72 object-cover rounded-lg shadow-md"
                    />
                </div>
                <div className="mt-8 space-y-6">
                    <p className="text-lg text-gray-200">{shortDescription}</p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        {adventureCost && <div className="flex flex-col">
                            <span className="text-gray-400">Cost:</span>
                            <span className="font-semibold text-gray-100">{adventureCost}</span>
                        </div>}
                        {bookingAvailability && <div className="flex flex-col">
                            <span className="text-gray-400">Booking Availability:</span>
                            <span className="font-semibold text-gray-100">{bookingAvailability}</span>
                        </div>}
                        {location && <div className="flex flex-col">
                            <span className="text-gray-400">Location:</span>
                            <span className="font-semibold text-gray-100">{location}</span>
                        </div>}
                        {duration && <div className="flex flex-col">
                            <span className="text-gray-400">Duration:</span>
                            <span className="font-semibold text-gray-100">{duration}</span>
                        </div>}
                        {adventureLevel && <div className="flex flex-col">
                            <span className="text-gray-400">Adventure Level:</span>
                            <span className="font-semibold text-gray-100">{adventureLevel}</span>
                        </div>}
                        {maxGroupSize && <div className="flex flex-col">
                            <span className="text-gray-400">Max Group Size:</span>
                            <span className="font-semibold text-gray-100">{maxGroupSize}</span>
                        </div>}
                    </div>
                    {includedItems.length > 0 && <div>
                        <h4 className="text-xl font-semibold text-white">Included Items:</h4>
                        <ul className="list-disc list-inside text-gray-200 mt-2">
                            {includedItems.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>}
                    {ecoFriendlyFeatures.length > 0 && <div>
                        <h4 className="text-xl font-semibold text-green-400">Eco-Friendly Features:</h4>
                        <ul className="list-disc list-inside text-gray-200 mt-2">
                            {ecoFriendlyFeatures.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>}
                    {specialInstructions.length > 0 && <div>
                        <h4 className="text-xl font-semibold text-white">Special Instructions:</h4>
                        <ul className="list-disc list-inside text-gray-200 mt-2">
                            {specialInstructions.map((instruction, index) => (
                                <li key={index}>{instruction}</li>
                            ))}
                        </ul>
                    </div>}
                    {itinerary.length > 0 && (
                        <div className="mt-10">
                            <h4 className="text-2xl font-bold text-white mb-4">Itinerary</h4>
                            <div className="space-y-4">
                                {itinerary.map((day, index) => (
                                    <div key={index} className="p-4 bg-gray-800 rounded-lg shadow">
                                        <h5 className="text-xl font-semibold text-gray-100">Day {day.day}: {day.title}</h5>
                                        <p className="text-gray-200 mt-2">{day.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
