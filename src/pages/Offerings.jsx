import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import ServiceCard from '../Components/ServiceCard';

const Offerings = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("/services.json").then(res => res.json()).then(setServices);
    }, []);
    return (
        <div className="w-11/12 mx-auto py-16">
            <Helmet>
                <title>Offerings | Essence Treks</title>
            </Helmet>
            {/* Header Section */}
            <div className="text-center mb-12 animate__animated animate__fadeIn animate__delay-1s">
                <h2 className="text-4xl font-extrabold text-white">Our Offerings</h2>
                <p className="mt-4 text-lg text-gray-200 px-3">
                    Discover our range of eco-friendly services and adventures.
                </p>
            </div>

            {/* Services Section */}
            <div className="w-11/12 mx-auto">
                <div className="w-full mx-auto grid gap-8 my-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {services.map(service => (
                        <ServiceCard key={service.id + service.serviceTitle} service={service} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Offerings;
