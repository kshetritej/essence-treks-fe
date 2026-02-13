import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCalendarAlt, FaTag, FaMapMarkerAlt, FaClock, FaMountain, FaUsers } from 'react-icons/fa';

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const blogPosts = {
        1: {
            title: "Everest Base Camp Trek: A Journey to Remember",
            image: "/src/assets/WhatsApp Image 2025-03-11 at 06.20.50.webp",
            date: "March 15, 2024",
            category: "Trekking",
            duration: "14 Days",
            difficulty: "Moderate to Challenging",
            maxAltitude: "5,545m",
            groupSize: "2-12 people",
            location: "Khumbu Region, Nepal",
            content: `As I stepped onto the runway at Lukla Airport, my heart was racing with excitement and a touch of nervousness. The Everest Base Camp trek was about to begin, and I couldn't wait to experience the magic of the Himalayas.

            The first few days were a gentle introduction to the mountains. Walking through the lush valleys of the Khumbu region, I was struck by the beauty of the rhododendron forests and the sound of prayer wheels spinning in the breeze. The Sherpa people welcomed us with warm smiles and cups of sweet tea, sharing stories of their ancestors who had conquered these mighty peaks.

            Each day brought new challenges and rewards. The suspension bridges over rushing rivers tested my courage, while the steep ascents pushed my physical limits. But the views of Ama Dablam and other majestic peaks kept me going, each step bringing me closer to my dream.

            The highlight of my journey was reaching Kala Patthar at sunrise. As the first rays of light touched the snow-capped peaks, I stood in awe of Mount Everest, the world's highest mountain. The golden light painted the landscape in hues of pink and orange, creating a scene that will forever be etched in my memory.

            The teahouses along the way became our home away from home. The simple dal bhat meals, prepared with local ingredients, were some of the most delicious I've ever had. Sitting around the yak dung stove, sharing stories with fellow trekkers from around the world, I felt a sense of community that transcended language barriers.

            The Sherpa people's resilience and kindness in this harsh environment was truly inspiring. Their stories of mountaineering legends and local traditions added depth to our journey. I learned about their deep connection to the mountains and their respect for nature.

            As we made our way back to Lukla, I realized that the Everest Base Camp trek had given me more than just memories. It had taught me about perseverance, humility, and the incredible power of nature. This journey to the base of the world's highest mountain was truly a transformative experience.`
        },
        2: {
            title: "Annapurna Circuit: A Trekker's Paradise",
            image: "/src/assets/Annapurna-Base-Camp-Trek.jpg",
            date: "March 12, 2024",
            category: "Adventure",
            duration: "18 Days",
            difficulty: "Moderate",
            maxAltitude: "5,416m",
            groupSize: "2-15 people",
            location: "Annapurna Region, Nepal",
            content: `Annapurna Base Camp Trek: A Journey into the Soul of the Himalayas

“The mountains are calling, and I must go.” – John Muir

Nestled deep within Nepal’s majestic Himalayas, the Annapurna Base Camp (ABC) trek is not just an outdoor adventure — it’s a transformative experience. Every step along this trail brings you closer to snow-draped peaks, vibrant village life, and hidden natural sanctuaries. Whether you’re a seasoned trekker or someone chasing their first mountain sunrise, ABC promises moments that etch into your memory for life.

Why Trek to Annapurna Base Camp?
🏔️ A Front-Row View of the Giants
Standing at 4,130 meters, the Annapurna Base Camp offers panoramic views of the towering Annapurna Massif, Machapuchare (Fishtail Peak), Hiunchuli, and more — a literal amphitheatre of snow and silence.

🧡 Culture at Every Turn
Pass through charming villages like Ghandruk and Chhomrong, home to the warm and welcoming Gurung and Magar communities. From their hearty dal bhat meals to their centuries-old traditions, the trek is as much about people as it is about peaks.

🌲 A Constantly Changing Landscape
Start your journey in terraced fields, walk through rhododendron forests that blaze pink in spring, and end up among glaciers and alpine terrain. No two days look the same.

The Route at a Glance (10-Day Classic Itinerary)
Day 1: Nayapul to Ghandruk (1,940m) – A scenic walk through terraced farms and river valleys.

Day 2: Ghandruk to Chhomrong (2,170m) – Welcome to the lap of Machapuchare.

Day 3: Chhomrong to Bamboo (2,310m) – Into the deep woods and waterfalls.

Day 4: Bamboo to Deurali (3,230m) – Alpine forest gives way to rugged cliffs.

Day 5: Deurali to ABC (4,130m) – The big day: breathtaking arrival at base camp.

Optional return days mirror this route or offer detours through Jhinu Danda or Landruk.

Hidden Gems of the ABC Trek
You came for the peaks, but these offbeat wonders might just steal the show:

Hinku Cave – A historic resting point for early expeditions, still echoing the stories of storm-bound climbers.

Jhinu Danda Hot Springs – Natural thermal pools by the river; nothing beats a soak after days on the trail.

Ghandruk’s Secret Alleys – Stone-paved paths, untouched by time, and the humble Gurung Museum.

MBC Viewpoint – Climb slightly above Machapuchare Base Camp for a surreal sunrise view of Fishtail Peak.

Deurali’s Hidden Waterfalls – Icy cascades tucked behind rocks; perfect for a peaceful moment alone.

The Honey Cliffs of Kimrong – Where daring locals still scale cliffs to harvest wild honey twice a year.

The Himalayan Coffee Forest – Between Sinuwa and Bamboo, find rare high-altitude coffee — some teahouses even brew it for trekkers.

Pro Tips for Unearthing the Trek’s Best-Kept Secrets
✅ Hire a Local Guide – They know the trails, detours, and legends.

🕊️ Add Buffer Days – Build flexibility into your trek to explore hidden spots.

🗣️ Learn Basic Nepali – Even a “Namaste” opens doors to real stories.

🏞️ Respect Nature – Follow Leave No Trace and cultural etiquette at sacred sites.

When to Go?
Spring (March–May): Rhododendrons bloom. Colors explode. Snow views remain.
Autumn (September–November): Crisp skies, stable weather, and the clearest mountain views.

Avoid monsoon (June–August) unless you're into landslides and leeches. Winter treks (December–February) are magical but tough — deep snow, fewer open lodges.

Be a Responsible Trekker
Stay at local teahouses to support the community economy.

Minimize plastic; carry a refillable bottle with a purifier.

Dress modestly in villages and always ask before taking photos.

Dispose of waste properly or pack it out.

Choose biodegradable products and avoid non-recyclables.

Final Thoughts: The Mountain Mirror
The Annapurna Base Camp trek is not just a physical journey — it’s an emotional and spiritual one. Each trail bend, each sunrise, and each shared cup of tea with a stranger teaches you something about yourself. It doesn’t matter if you’re trekking solo, with a group, or doing it with family — Annapurna welcomes everyone with the same power and peace.

“The mountains are mirrors; they reflect the beauty and strength we carry within.”

So, if the mountains are calling, it might be time to finally answer.`
        },
        3: {
            title: "Langtang Valley: Hidden Gem of Nepal",
            image: "/src/assets/WhatsApp Image 2025-03-11 at 06.20.44.webp",
            date: "March 10, 2024",
            category: "Culture",
            duration: "10 Days",
            difficulty: "Moderate",
            maxAltitude: "4,984m",
            groupSize: "2-10 people",
            location: "Langtang Region, Nepal",
            content: `The Langtang Valley welcomed me with open arms, and I immediately felt at home in this hidden paradise. The trail took us through dense forests where red pandas occasionally made an appearance, and the sound of the Langtang River accompanied us throughout our journey.

            The local Tamang people were incredibly welcoming, inviting us into their homes for tea and sharing stories of their traditions. I was particularly moved by their resilience after the 2015 earthquake, which had devastated their villages. Their determination to rebuild and preserve their culture was truly inspiring.

            Each day brought new discoveries. The ancient monasteries perched on hilltops, the prayer flags fluttering in the mountain breeze, and the yaks grazing in the high pastures all created a picture of harmony between nature and culture.

            The highlight of my trek was reaching Kyanjin Gompa, where the views of the Langtang Lirung peak were simply breathtaking. I spent an extra day here, exploring the surrounding valleys and glaciers, feeling the power of these ancient mountains.

            The local cheese factory in Kyanjin Gompa was a delightful surprise. Watching the traditional cheese-making process and tasting the fresh yak cheese was a unique experience that connected me to the local way of life.

            As I made my way back to Syabrubesi, I carried with me not just memories of stunning landscapes, but also a deep appreciation for the Tamang people's rich culture and warm hospitality. The Langtang Valley had given me a glimpse into a way of life that has remained unchanged for generations.`
        },
        4: {
            title: "Manaslu Circuit: Off the Beaten Path",
            image: "/src/assets/WhatsApp Image 2025-03-11 at 06.18.01.webp",
            date: "March 8, 2024",
            category: "Trekking",
            duration: "16 Days",
            difficulty: "Challenging",
            maxAltitude: "5,106m",
            groupSize: "2-12 people",
            location: "Manaslu Region, Nepal",
            content: `The Manaslu Circuit was my choice for a more remote and authentic trekking experience, and it exceeded all my expectations. Starting from Soti Khola, I was immediately struck by the pristine beauty of the region. The trail took us through untouched forests and traditional villages that seemed frozen in time.

            The local people, with their warm hospitality and rich cultural traditions, made us feel like honored guests in their mountain home. I was particularly fascinated by the unique architecture of the villages, with their stone houses and intricate wood carvings.

            Each day brought new challenges and rewards. The trail wound through deep gorges and over high passes, offering breathtaking views of the Manaslu massif. The highlight was crossing the Larkya La Pass at 5,106 meters, where we were rewarded with panoramic views of the surrounding peaks.

            The teahouses along the Manaslu Circuit were more basic than those on more popular treks, but this added to the authentic experience. We shared meals with local families, learned about their way of life, and formed connections that transcended language barriers.

            One of my most memorable experiences was participating in a local festival in Samagaon. The entire village came together to celebrate their heritage, with traditional dances, music, and food. I felt privileged to be part of this intimate cultural experience.

            What made this trek special was its remote nature. We often walked for hours without seeing other trekkers, allowing us to fully immerse ourselves in the natural beauty and cultural richness of the region. The Manaslu Circuit is a reminder that some of the most rewarding experiences come from stepping off the beaten path.`
        },
        5: {
            title: "Upper Mustang: The Last Forbidden Kingdom",
            image: "/src/assets/WhatsApp Image 2025-03-11 at 06.20.46.webp",
            date: "March 5, 2024",
            category: "Culture",
            duration: "14 Days",
            difficulty: "Moderate",
            maxAltitude: "4,200m",
            groupSize: "2-10 people",
            location: "Mustang Region, Nepal",
            content: `Upper Mustang, once a forbidden kingdom, opened its doors to me with an air of mystery and ancient charm. The landscape was unlike anything I'd seen in Nepal – a high-altitude desert with dramatic rock formations and deep canyons. The region's unique geography, created by the rain shadow of the Annapurna and Dhaulagiri ranges, made me feel like I was walking through a different world.

            The capital, Lo Manthang, was a revelation. This walled city, with its narrow alleys and white-washed buildings, felt like stepping back in time. The local people, descendants of Tibetan refugees, maintained their traditional way of life with pride. I was fortunate to witness a local festival, where the entire community came together in colorful traditional dress to celebrate their heritage.

            The ancient monasteries of Upper Mustang were architectural marvels. The wall paintings, some dating back centuries, told stories of Buddhist mythology and local history. Our guide, a local expert, brought these stories to life with his knowledge and passion for his homeland.

            One of my most profound experiences was visiting the cave dwellings of the region. These ancient caves, some still inhabited, told stories of a time when people lived in harmony with the harsh environment. I couldn't help but marvel at their ingenuity and resilience.

            The trek through Upper Mustang was as much a cultural journey as it was a physical one. We stayed in traditional guesthouses, shared meals with local families, and learned about the region's unique customs and traditions. The people's resilience in this harsh environment was inspiring, and their warm hospitality made me feel like part of their community.

            As I explored the hidden caves and ancient fortresses, I felt privileged to experience this remote corner of Nepal. Upper Mustang is a living museum of Tibetan culture, preserved in the high Himalayas, and every moment spent there was a gift.`
        },
        6: {
            title: "Poon Hill Trek: Perfect for Beginners",
            image: "/src/assets/WhatsApp Image 2025-03-11 at 06.20.45.webp",
            date: "March 3, 2024",
            category: "Trekking",
            duration: "7 Days",
            difficulty: "Easy to Moderate",
            maxAltitude: "3,210m",
            groupSize: "2-15 people",
            location: "Annapurna Region, Nepal",
            content: `The Poon Hill Trek was my first experience with trekking in Nepal, and it was the perfect introduction to the magic of the Himalayas. Starting from Nayapul, the trail wound through charming villages and lush rhododendron forests. The gentle pace allowed me to fully appreciate the beauty of the Annapurna region.

            Each day brought new delights. We passed through terraced fields where local farmers worked their land, crossed crystal-clear streams, and enjoyed the company of fellow trekkers from around the world. The teahouses along the route were comfortable and welcoming, offering a perfect blend of local hospitality and modern amenities.

            The highlight of the trek was reaching Poon Hill at sunrise. As the first rays of light touched the snow-capped peaks of the Annapurna range, the entire landscape was bathed in golden light. The panoramic view of the Himalayas, stretching as far as the eye could see, was worth every step of the journey.

            I particularly enjoyed the cultural experiences along the way. Visiting the local schools and interacting with the children gave me a deeper understanding of life in the mountains. The traditional dance performances in the evenings were a delightful way to end each day.

            What made this trek special was its accessibility. It's perfect for first-time trekkers or those with limited time, yet it offers all the magic of a Himalayan adventure. The combination of natural beauty, cultural experiences, and comfortable accommodations makes it an ideal introduction to trekking in Nepal.

            The Poon Hill Trek taught me that you don't need to climb to extreme altitudes to experience the magic of the Himalayas. Sometimes, the most rewarding adventures are the ones that allow you to fully appreciate the beauty around you, one step at a time.`
        }
    };

    const post = blogPosts[id];

    if (!post) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-white mb-4">Blog Post Not Found</h1>
                    <Link to="/blogs" className="text-green-500 hover:text-green-400">
                        Return to Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-3xl"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                {post.title}
                            </h1>
                            <div className="flex flex-wrap gap-4 text-gray-300">
                                <span className="flex items-center">
                                    <FaCalendarAlt className="mr-2" />
                                    {post.date}
                                </span>
                                <span className="flex items-center">
                                    <FaTag className="mr-2" />
                                    {post.category}
                                </span>
                                <span className="flex items-center">
                                    <FaClock className="mr-2" />
                                    {post.duration}
                                </span>
                                <span className="flex items-center">
                                    <FaMountain className="mr-2" />
                                    {post.difficulty}
                                </span>
                                <span className="flex items-center">
                                    <FaMapMarkerAlt className="mr-2" />
                                    {post.location}
                                </span>
                                <span className="flex items-center">
                                    <FaUsers className="mr-2" />
                                    {post.groupSize}
                                </span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex justify-between items-center mb-8">
                            <Link
                                to="/blogs"
                                className="inline-flex items-center text-green-500 hover:text-green-400"
                            >
                                <FaArrowLeft className="mr-2" />
                                Back to Blog
                            </Link>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => navigate(`/blogs/${Number(id) - 1}`)}
                                    disabled={Number(id) <= 1}
                                    className={`flex items-center ${
                                        Number(id) <= 1
                                            ? 'text-gray-500 cursor-not-allowed'
                                            : 'text-green-500 hover:text-green-400'
                                    }`}
                                >
                                    <FaArrowLeft className="mr-2" />
                                    Previous
                                </button>
                                <button
                                    onClick={() => navigate(`/blogs/${Number(id) + 1}`)}
                                    disabled={Number(id) >= Object.keys(blogPosts).length}
                                    className={`flex items-center ${
                                        Number(id) >= Object.keys(blogPosts).length
                                            ? 'text-gray-500 cursor-not-allowed'
                                            : 'text-green-500 hover:text-green-400'
                                    }`}
                                >
                                    Next
                                    <FaArrowLeft className="ml-2 transform rotate-180" />
                                </button>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="prose prose-lg prose-invert max-w-none"
                        >
                            <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                                {post.content}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogDetails;

// Whats the issue