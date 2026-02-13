import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// Import all your images below (same as before)
import img1 from '../assets/WhatsApp Image 2025-03-11 at 06.20.49 (1).webp';
import img2 from '../assets/WhatsApp Image 2025-03-11 at 06.20.49 (2).webp';
import img3 from '../assets/WhatsApp Image 2025-03-11 at 06.20.49.webp';
import img4 from '../assets/WhatsApp Image 2025-03-11 at 06.20.50 (1).webp';
import img5 from '../assets/WhatsApp Image 2025-03-11 at 06.20.50.webp';
import img6 from '../assets/WhatsApp Image 2025-03-11 at 06.20.51.webp';
import img7 from '../assets/WhatsApp Image 2025-03-11 at 06.20.52.webp';
import img8 from '../assets/WhatsApp Image 2025-03-11 at 06.19.48.webp';
import img9 from '../assets/WhatsApp Image 2025-03-11 at 06.19.50.webp';
import img10 from '../assets/WhatsApp Image 2025-03-11 at 06.20.42 (1).webp';
import img11 from '../assets/WhatsApp Image 2025-03-11 at 06.20.42.webp';
import img12 from '../assets/WhatsApp Image 2025-03-11 at 06.20.43.webp';
import img13 from '../assets/WhatsApp Image 2025-03-11 at 06.20.44.webp';
import img14 from '../assets/WhatsApp Image 2025-03-11 at 06.20.45.webp';
import img15 from '../assets/WhatsApp Image 2025-03-11 at 06.20.46.webp';
import img16 from '../assets/WhatsApp Image 2025-03-11 at 06.20.47 (1).webp';
import img17 from '../assets/WhatsApp Image 2025-03-11 at 06.20.47 (2).webp';
import img18 from '../assets/WhatsApp Image 2025-03-11 at 06.17.11.webp';
import img19 from '../assets/WhatsApp Image 2025-03-11 at 06.17.59.webp';
import img20 from '../assets/WhatsApp Image 2025-03-11 at 06.18.01 (1).webp';
import img21 from '../assets/WhatsApp Image 2025-03-11 at 06.18.01.webp';
import img22 from '../assets/WhatsApp Image 2025-03-11 at 06.18.52.webp';
import img23 from '../assets/WhatsApp Image 2025-03-11 at 06.19.46 (1) (1).webp';
import img24 from '../assets/WhatsApp Image 2025-03-11 at 06.19.46 (1).webp';
import img25 from '../assets/WhatsApp Image 2025-03-11 at 06.19.46.webp';
import img26 from '../assets/WhatsApp Image 2025-03-11 at 06.19.47 (1).webp';
import img27 from '../assets/WhatsApp Image 2025-03-11 at 06.19.47.webp';
import img28 from '../assets/ban1.jpeg';
import img29 from '../assets/ban2.jpeg';
import img30 from '../assets/ban3.jpeg';
import img31 from '../assets/ban4.jpeg';
import img32 from '../assets/Annapurna-Base-Camp-Trek.jpg';

// Import new June 11th images
import img33 from '../assets/WhatsApp Image 2025-06-11 at 01.59.28.webp';
import img34 from '../assets/WhatsApp Image 2025-06-11 at 02.06.06.webp';
import img35 from '../assets/WhatsApp Image 2025-06-11 at 02.06.07.webp';
import img36 from '../assets/WhatsApp Image 2025-06-11 at 02.06.08.webp';
import img37 from '../assets/WhatsApp Image 2025-06-11 at 02.06.10.webp';
import img38 from '../assets/WhatsApp Image 2025-06-11 at 02.06.11.webp';
import img39 from '../assets/WhatsApp Image 2025-06-11 at 02.06.13 (1).webp';
import img40 from '../assets/WhatsApp Image 2025-06-11 at 02.06.13.webp';
import img41 from '../assets/WhatsApp Image 2025-06-11 at 02.06.14 (1).webp';
import img42 from '../assets/WhatsApp Image 2025-06-11 at 02.06.14.webp';
import img43 from '../assets/WhatsApp Image 2025-06-11 at 02.06.15.webp';
import img44 from '../assets/WhatsApp Image 2025-06-11 at 02.06.16.webp';
import img45 from '../assets/WhatsApp Image 2025-06-11 at 02.06.17 (1).webp';
import img46 from '../assets/WhatsApp Image 2025-06-11 at 02.06.17.webp';
import img47 from '../assets/WhatsApp Image 2025-06-11 at 02.06.18.webp';
import img48 from '../assets/WhatsApp Image 2025-06-11 at 02.06.19.webp';
import img49 from '../assets/WhatsApp Image 2025-06-11 at 02.06.20.webp';
import img50 from '../assets/WhatsApp Image 2025-06-11 at 01.55.48 (1).webp';
import img51 from '../assets/WhatsApp Image 2025-06-11 at 01.55.48.webp';
import img52 from '../assets/WhatsApp Image 2025-06-11 at 01.55.49 (1).webp';
import img53 from '../assets/WhatsApp Image 2025-06-11 at 01.55.49.webp';
import img54 from '../assets/WhatsApp Image 2025-06-11 at 01.55.50 (1).webp';
import img55 from '../assets/WhatsApp Image 2025-06-11 at 01.55.50 (2) (1).webp';
import img56 from '../assets/WhatsApp Image 2025-06-11 at 01.55.50.webp';
import img57 from '../assets/WhatsApp Image 2025-06-11 at 01.55.51 (1).webp';
import img58 from '../assets/WhatsApp Image 2025-06-11 at 01.55.51 (2).webp';
import img59 from '../assets/WhatsApp Image 2025-06-11 at 01.55.51.webp';
import img60 from '../assets/WhatsApp Image 2025-06-11 at 01.55.52 (1).webp';
import img61 from '../assets/WhatsApp Image 2025-06-11 at 01.55.52 (2).webp';
import img62 from '../assets/WhatsApp Image 2025-06-11 at 01.55.52.webp';
import img63 from '../assets/IMG_0357.webp';
import img64 from '../assets/IMG_0364.webp';
import img65 from '../assets/IMG_0366.webp';
import img66 from '../assets/IMG_0367.webp';
import img67 from '../assets/IMG_0369.webp';
import img68 from '../assets/IMG_0678.webp';
import img69 from '../assets/IMG_0679.webp';
import img70 from '../assets/IMG_0681.webp';
import img71 from '../assets/IMG_0682.webp';
import img72 from '../assets/IMG_0683.webp';
import img73 from '../assets/IMG_0707.webp';



const Gallery = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

const images = [
        // Banner images first
        { src: img28, alt: "Annapurna Base Camp", priority: true },  // ban1
        { src: img29, alt: "Everest Base Camp", priority: true },    // ban2
        { src: img30, alt: "Langtang Valley", priority: true },      // ban3
        { src: img31, alt: "Manaslu Circuit", priority: true },      // ban4
        
        // Main trek images
        { src: img32, alt: "Annapurna Circuit", priority: true },    // Annapurna-Base-Camp-Trek
        { src: img33, alt: "Mountain View", priority: true },
        { src: img34, alt: "Trekking Path", priority: true },
        { src: img35, alt: "Valley View", priority: true },
        { src: img36, alt: "Mountain Village", priority: true },
        { src: img37, alt: "Scenic Trail", priority: true },
        
        // Gallery images
        { src: img1, alt: "Gallery image 1" },
        { src: img2, alt: "Gallery image 2" },
        { src: img3, alt: "Gallery image 3" },
        { src: img4, alt: "Gallery image 4" },
        { src: img5, alt: "Gallery image 5" },
        { src: img6, alt: "Gallery image 6" },
        { src: img7, alt: "Gallery image 7" },
        { src: img8, alt: "Gallery image 8" },
        { src: img9, alt: "Gallery image 9" },
        { src: img10, alt: "Gallery image 10" },
        { src: img11, alt: "Gallery image 11" },
        { src: img12, alt: "Gallery image 12" },
        { src: img13, alt: "Gallery image 13" },
        { src: img14, alt: "Gallery image 14" },
        { src: img15, alt: "Gallery image 15" },
        { src: img16, alt: "Gallery image 16" },
        { src: img17, alt: "Gallery image 17" },
        { src: img18, alt: "Gallery image 18" },
        { src: img19, alt: "Gallery image 19" },
        { src: img20, alt: "Gallery image 20" },
        { src: img21, alt: "Gallery image 21" },
        { src: img22, alt: "Gallery image 22" },
        { src: img23, alt: "Gallery image 23" },
        { src: img24, alt: "Gallery image 24" },
        { src: img25, alt: "Gallery image 25" },
        { src: img26, alt: "Gallery image 26" },
        { src: img27, alt: "Gallery image 27" },
        { src: img38, alt: "Gallery image 38" },
        { src: img39, alt: "Gallery image 39" },
        { src: img40, alt: "Gallery image 40" },
        { src: img41, alt: "Gallery image 41" },
        { src: img42, alt: "Gallery image 42" },
        { src: img43, alt: "Gallery image 43" },
        { src: img44, alt: "Gallery image 44" },
        { src: img45, alt: "Gallery image 45" },
        { src: img46, alt: "Gallery image 46" },
        { src: img47, alt: "Gallery image 47" },
        { src: img48, alt: "Gallery image 48" },
        { src: img49, alt: "Gallery image 49" },
        { src: img50, alt: "Gallery image 50" },
        { src: img51, alt: "Gallery image 51" },
        { src: img52, alt: "Gallery image 52" },
        { src: img53, alt: "Gallery image 53" },
        { src: img54, alt: "Gallery image 54" },
        { src: img55, alt: "Gallery image 55" },
        { src: img56, alt: "Gallery image 56" },
        { src: img57, alt: "Gallery image 57" },
        { src: img58, alt: "Gallery image 58" },
        { src: img59, alt: "Gallery image 59" },
        { src: img60, alt: "Gallery image 60" },
        { src: img61, alt: "Gallery image 61" },
        { src: img62, alt: "Gallery image 62" },
        { src: img63, alt: "Gallery image 63" },
        { src: img64, alt: "Gallery image 64" },
        { src: img65, alt: "Gallery image 65" },
        { src: img66, alt: "Gallery image 66" },
        { src: img67, alt: "Gallery image 67" },
        { src: img68, alt: "Gallery image 68" },
        { src: img69, alt: "Gallery image 69" },
        { src: img70, alt: "Gallery image 70" },
        { src: img71, alt: "Gallery image 71" },
        { src: img72, alt: "Gallery image 72" },
        { src: img73, alt: "Gallery image 73" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <Helmet>
        <title>Gallery - Essence Treks</title>
        <meta
          name="description"
          content="Explore our collection of stunning photographs from various treks and adventures in Nepal."
        />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">What Essence Offers You From Nepal</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover the diverse experiences and adventures that await you in the majestic landscapes of Nepal
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`relative group cursor-pointer overflow-hidden rounded-lg mb-4 ${
                image.priority ? 'break-inside-avoid' : ''
              }`}
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105"
                loading={image.priority ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3H6"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={images.map((img) => ({
            src: img.src,
            title: img.alt,
            description: 'Essence Treks Nepal',
          }))}
        />
      )}
    </div>
  );
};

export default Gallery;
