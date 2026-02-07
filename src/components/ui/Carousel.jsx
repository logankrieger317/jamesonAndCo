import React, { useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const images = [
  { name: 'IMG_3288', alt: 'Professional dog grooming', width: 1500, height: 1125 },
  { name: 'IMG_1671', alt: 'Dog grooming service', width: 1500, height: 1125 },
  { name: 'IMG_1813', alt: 'Pet grooming', width: 1500, height: 1125 },
  { name: 'IMG_2254', alt: 'Dog spa treatment', width: 1500, height: 1125 },
  { name: 'IMG_2318', alt: 'Dog washing service', width: 1500, height: 1125 },
  { name: 'IMG_2625', alt: 'Professional pet care', width: 1500, height: 1125 },
  { name: 'IMG_2650', alt: 'Dog styling', width: 1500, height: 1125 },
  { name: 'IMG_2825', alt: 'Pet grooming service', width: 1500, height: 1125 },
  { name: 'IMG_2994', alt: 'Dog grooming expertise', width: 1500, height: 1125 },
  { name: 'IMG_3007', alt: 'Professional dog care', width: 1500, height: 1125 },
  { name: 'IMG_3027', alt: 'Pet styling service', width: 1500, height: 1125 },
  { name: 'Malley', alt: 'Dog grooming showcase', width: 1500, height: 1125 }
];

export default function Carousel() {
  // Track which images have loaded so we can hide the placeholder
  const [loadedImages, setLoadedImages] = useState(new Set());

  const handleImageLoad = useCallback((imageName) => {
    setLoadedImages(prev => {
      const next = new Set(prev);
      next.add(imageName);
      return next;
    });
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
        watchSlidesProgress={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={image.name} className="flex items-center justify-center bg-black">
            <div className="relative w-full h-[800px] flex items-center justify-center">
              {/* Skeleton placeholder - shows while image loads */}
              {!loadedImages.has(image.name) && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="animate-pulse bg-gray-800 rounded-lg"
                    style={{
                      width: 'min(100%, 1000px)',
                      aspectRatio: `${image.width} / ${image.height}`,
                      maxHeight: '750px',
                    }}
                  />
                </div>
              )}
              <div className="absolute inset-0 flex items-center justify-center">
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
                    width={image.width}
                    height={image.height}
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchpriority={index === 0 ? "high" : "auto"}
                    decoding={index === 0 ? "sync" : "async"}
                    onLoad={() => handleImageLoad(image.name)}
                    className="max-h-[750px] w-auto"
                    style={{
                      objectFit: 'contain',
                      maxWidth: 'calc(750px * 1.33)',
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
