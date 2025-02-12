import React, { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import optimized images
import img3288 from '../Images/optimized/IMG_3288.webp';
import img1671 from '../Images/optimized/IMG_1671.webp';
import img1813 from '../Images/optimized/IMG_1813.webp';
import img2254 from '../Images/optimized/IMG_2254.webp';
import img2318 from '../Images/optimized/IMG_2318.webp';
import img2625 from '../Images/optimized/IMG_2625.webp';
import img2650 from '../Images/optimized/IMG_2650.webp';
import img2825 from '../Images/optimized/IMG_2825.webp';
import img2994 from '../Images/optimized/IMG_2994.webp';
import img3007 from '../Images/optimized/IMG_3007.webp';
import img3027 from '../Images/optimized/IMG_3027.webp';
import malley from '../Images/optimized/Malley.webp';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

const images = [
  { src: img3288, alt: 'Professional dog grooming' },
  { src: img1671, alt: 'Dog grooming service' },
  { src: img1813, alt: 'Pet grooming' },
  { src: img2254, alt: 'Dog spa treatment' },
  { src: img2318, alt: 'Dog washing service' },
  { src: img2625, alt: 'Professional pet care' },
  { src: img2650, alt: 'Dog styling' },
  { src: img2825, alt: 'Pet grooming service' },
  { src: img2994, alt: 'Dog grooming expertise' },
  { src: img3007, alt: 'Professional dog care' },
  { src: img3027, alt: 'Pet styling service' },
  { src: malley, alt: 'Dog grooming showcase' }
];

// Cache version for managing updates
const CACHE_VERSION = 'v1';
const CACHE_NAME = `carousel-images-${CACHE_VERSION}`;

export default function Carousel() {
  useEffect(() => {
    // Initialize cache and preload images
    const initializeCache = async () => {
      if ('caches' in window) {
        try {
          // Open or create cache
          const cache = await caches.open(CACHE_NAME);
          
          // Preload and cache all images
          const imagePromises = images.map(async (image) => {
            // Check if image is already cached
            const cachedResponse = await cache.match(image.src);
            if (!cachedResponse) {
              try {
                const response = await fetch(image.src);
                if (response.ok) {
                  await cache.put(image.src, response.clone());
                }
              } catch (error) {
                console.warn('Failed to cache image:', image.src);
              }
            }
          });

          // Wait for all images to be cached
          await Promise.all(imagePromises);
        } catch (error) {
          console.warn('Cache initialization failed:', error);
        }
      }
    };

    // Clean up old caches
    const cleanupCaches = async () => {
      if ('caches' in window) {
        try {
          const keys = await caches.keys();
          const oldCaches = keys.filter(key => 
            key.startsWith('carousel-images-') && key !== CACHE_NAME
          );
          await Promise.all(oldCaches.map(key => caches.delete(key)));
        } catch (error) {
          console.warn('Cache cleanup failed:', error);
        }
      }
    };

    initializeCache();
    cleanupCaches();

    // Add preload link tags for next few images
    const preloadImages = () => {
      const head = document.head;
      images.slice(0, 3).forEach(image => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = image.src;
        head.appendChild(link);
      });
    };

    preloadImages();
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        preloadImages={false}
        watchSlidesProgress={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center bg-black">
            <div className="relative w-full h-[800px] flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading={index < 3 ? "eager" : "lazy"}
                  fetchpriority={index === 0 ? "high" : "auto"}
                  decoding="async"
                  className="max-h-[750px] w-auto"
                  style={{
                    objectFit: 'contain',
                    maxWidth: 'calc(750px * 1.33)', // 4:3 aspect ratio
                  }}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
