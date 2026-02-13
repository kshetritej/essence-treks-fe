import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import Card from "../Components/Card";

const Trekkings = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch("/cards.json").then(res => res.json()).then(setCards);
    }, []);
    return (
        <div className="w-11/12 mx-auto py-16">
            <Helmet>
                <title>Trekkings | Essence Treks</title>
            </Helmet>
            {/* Header Section with React Typed Animation */}
            <div className="text-center mb-12 animate__animated animate__fadeIn animate__delay-1s">
                <h2 className="text-4xl font-extrabold text-white">
                    Popular Trekking Destinations
                </h2>
                <p className="mt-4 text-lg text-gray-200 px-3">
                    Explore a range of exciting adventure experiences designed for nature enthusiasts.
                </p>
            </div>
            {/* Cards Section */}
            <div className="w-11/12 mx-auto">
                <div className="w-full mx-auto grid gap-8 my-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {cards.map(card => <Card key={card.id} card={card} />)}
                </div>
            </div>
        </div>
    );
};

export default Trekkings;
