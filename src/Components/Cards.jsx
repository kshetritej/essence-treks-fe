import { useEffect, useState } from "react";
import Card from "./Card";

const Cards = ({ limit }) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('/cards.json')
            .then(res => res.json())
            .then(data => {
                // ✅ If limit exists, slice data. Otherwise, show all.
                setCards(limit ? data.slice(0, limit) : data);
            });
    }, [limit]);

    return (
        <div>
            {/* Responsive Grid */}
            <div className="w-11/12 mx-auto">
                <div className="w-full mx-auto grid gap-8 my-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {
                        cards.map((card) => <Card key={card.id} card={card} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Cards;
