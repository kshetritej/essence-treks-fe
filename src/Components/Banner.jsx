import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { lazy, Suspense } from 'react';

import ban1 from '../assets/ban1.jpeg';
import ban2 from '../assets/ban2.jpeg';
import ban3 from '../assets/ban3.jpeg';
import ban4 from '../assets/ban4.jpeg';

const Banner = () => {
    const images = [
        { src: ban1, alt: "Banner 1" },
        { src: ban2, alt: "Banner 2" },
        { src: ban3, alt: "Banner 3" },
        { src: ban4, alt: "Banner 4" }
    ];

    return (
        <div className="w-screen h-screen">
            <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                speed={1000}
                loop={true}
                preloadImages={false}
                lazy={true}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img 
                            className="w-full h-screen object-cover" 
                            src={image.src} 
                            alt={image.alt}
                            loading="lazy"
                            decoding="async"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
