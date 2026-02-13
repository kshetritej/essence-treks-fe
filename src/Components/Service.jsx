import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json') // Ensure you have a services.json file
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div>
            {/* Responsive Grid */}
            <div className="w-11/12 mx-auto">
                <div className="w-full mx-auto grid gap-8 my-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {
                        services.map((service) => <ServiceCard key={service.id} service={service} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;
