import React, { useState, useCallback } from 'react';
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
  const [loadedImages, setLoadedImages] = useState(new Set());

  const handleImageLoad = useCallback((imageName) => {
    setLoadedImages(prev => {
      const next = new Set(prev);
      next.add(imageName);
      return next;
    });
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto">
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
          <SwiperSlide key={image.name}>
            {/* 4:3 aspect ratio container matching the source images */}
            <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: '4 / 3' }}>
              {/* Skeleton placeholder */}
              {!loadedImages.has(image.name) && (
                <div className="absolute inset-0 animate-pulse bg-gray-200 rounded-lg" />
              )}
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet={`/img-cache/${image.name}-lg.webp`}
                  type="image/webp"
                />
                <source
                  media="(min-width: 640px)"
                  srcSet={`/img-cache/${image.name}-md.webp`}
                  type="image/webp"
                />
                <img
                  src={`/img-cache/${image.name}-sm.webp`}
                  alt={image.alt}
                  width={1500}
                  height={1125}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchpriority={index === 0 ? "high" : "auto"}
                  decoding={index === 0 ? "sync" : "async"}
                  onLoad={() => handleImageLoad(image.name)}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </picture>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
