

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay, Keyboard } from 'swiper/modules';

export default function HeroSlider() {
  const slides = [
    {
      img: 'https://i.ibb.co/svhp6S8G/484847119-1179539053957876-7451102548011408377-n.jpg',
      title: 'Nurture Your Greens',
      subtitle: 'Track every watering, mist, and feed with ease',
    },
    {
      img: 'https://i.ibb.co/7NvmHwmr/Houseplant-Primer-A-Guide-to-Basic-Care-and-Durable-Plants.jpg',
      title: 'Your Garden Assistant',
      subtitle: 'Personalized care tips for happy, healthy plants',
    },
    {
      img: 'https://i.ibb.co/cKHgWNDy/LK-Plants-Gif-1-2.gif',
      title: 'Stay in Sync with Nature',
      subtitle: 'Smart reminders to never miss a plant care task',
    },
    {
      img: 'https://i.ibb.co/DyWjQ7G/maxresdefault.jpg',
      title: 'Grow with Confidence',
      subtitle: 'Ideal for beginners and plant lovers alike',
    },
    {
      img: 'https://i.ibb.co/207JkZxV/t-Jw-Q7w6uyt-Dpxr-Ch-Qf-SSf3.jpg',
      title: 'Track. Care. Thrive.',
      subtitle: 'Your complete solution for plant wellness',
    },
  ];

  return (
    <div className="w-full overflow-hidden shadow-2xl mt-8 rounded-2xl ">
      <Swiper
        spaceBetween={30}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        keyboard={{ enabled: true }}
        modules={[EffectFade, Navigation, Pagination, Autoplay, Keyboard]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[50vh] md:h-[70vh]">
              <img
                src={slide.img}
                alt={slide.title}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out scale-100 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center px-6 text-center">
                <h2 className="text-white text-3xl md:text-5xl font-bold tracking-wide drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="mt-4 text-white text-lg md:text-2xl font-light max-w-2xl drop-shadow-sm">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
