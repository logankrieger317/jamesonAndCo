import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const images = [
  { name: 'IMG_3288', alt: 'Professional dog grooming' },
  { name: 'IMG_1671', alt: 'Dog grooming service' },
  { name: 'IMG_1813', alt: 'Pet grooming' },
  { name: 'IMG_2254', alt: 'Dog spa treatment' },
  { name: 'IMG_2318', alt: 'Dog washing service' },
  { name: 'IMG_2625', alt: 'Professional pet care' },
  { name: 'IMG_2650', alt: 'Dog styling' },
  { name: 'IMG_2825', alt: 'Pet grooming service' },
  { name: 'IMG_2994', alt: 'Dog grooming expertise' },
  { name: 'IMG_3007', alt: 'Professional dog care' },
  { name: 'IMG_3027', alt: 'Pet styling service' },
  { name: 'Malley', alt: 'Dog grooming showcase' }
];

export default function Carousel() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Get the appropriate image size suffix based on screen width
  const getImageSizeSuffix = () => {
    if (windowWidth <= 640) return 'sm';
    if (windowWidth <= 1024) return 'md';
    return 'lg';
  };

  // Generate optimized image URL
  const getOptimizedImageUrl = (imageName) => {
    const suffix = getImageSizeSuffix();
    return `/img-cache/${imageName}-${suffix}.webp`;
  };

  // Preload the next few images
  useEffect(() => {
    const preloadCount = 3;
    images.slice(0, preloadCount).forEach(image => {
      const img = new Image();
      img.src = getOptimizedImageUrl(image.name);
    });
  }, [windowWidth]);

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
        watchSlidesProgress={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center bg-black">
            <div className="relative w-full h-[800px] flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <picture>
                  <source
                    media="(min-width: 1024px)"
                    srcSet={`/img-cache/${image.name}-lg.webp`}
                  />
                  <source
                    media="(min-width: 640px)"
                    srcSet={`/img-cache/${image.name}-md.webp`}
                  />
                  <img
                    src={`/img-cache/${image.name}-sm.webp`}
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
                </picture>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
