import { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => console.error('Error loading services:', error));
    }, []);

    return (
        <div className="my-20 w-11/12 mx-auto">
            <h2 className="text-center text-3xl font-bold py-6 text-white">
                Our Services
            </h2>
            <p className="text-center text-gray-200 max-w-2xl mx-auto mb-8">
                Discover the range of eco-adventures and unique experiences we offer. Whether you love mountains, beaches, or global travel, we have something for every nature lover.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default Services;
