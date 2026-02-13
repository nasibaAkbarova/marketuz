import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const banners = [
  {
    id: 1,
    title: "Barchasi xobbi uchun",
    subtitle: "Sevimli mashg'ulotlar uchun hamyonbop narxdagi tovarlar",
    image: "https://images.uzum.uz/cr6f9m74nk8v8p4p8v2g/main_page_banner.jpg",
    bgColor: "bg-[#5c3c24]"
  },
  {
    id: 2,
    title: "Maktabga tayyorgarlik",
    subtitle: "Sifatli o'quv qurollari va kiyimlar",
    image: "https://images.uzum.uz/cr6fbhr4nk8v8p4p8vbg/main_page_banner.jpg",
    bgColor: "bg-[#1a4a7a]"
  },
  {
    id: 3,
    title: "Yozgi chegirmalar",
    subtitle: "Barcha kiyimlar uchun 50% gacha foyda",
    image: "https://images.uzum.uz/cr4u6l94nk8v8p4p6v7g/main_page_banner.jpg",
    bgColor: "bg-[#7000ff]"
  }
];

const Accordion: React.FC = () => {
  return (
    <div className="w-full py-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="main-banner-swiper rounded-2xl overflow-hidden shadow-lg h-240px md:h-400px"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className={`relative w-full h-full ${banner.bgColor} flex items-center overflow-hidden group`}>
              {/* Text Content */}
              <div className="container mx-auto px-10 md:px-20 z-10 text-white space-y-2 md:space-y-6">
                <h2 className="text-3xl md:text-6xl font-black max-w-lg leading-tight animate-in fade-in slide-in-from-left duration-700">
                  {banner.title}
                </h2>
                <p className="text-sm md:text-xl font-medium max-w-md opacity-90 animate-in fade-in slide-in-from-left duration-1000">
                  {banner.subtitle}
                </p>
                <button className="hidden md:block bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors mt-4">
                  Batafsil
                </button>
              </div>

              {/* Background Image/Graphics */}
              <div className="absolute right-0 top-0 w-full h-full">
                <img 
                  src={banner.image} 
                  alt={banner.title}
                  className="w-full h-full object-cover object-right md:object-center opacity-60 md:opacity-100 group-hover:scale-105 transition-transform duration-10000"
                />
                <div className="absolute inset-0 bg-gradient from-black/60 via-transparent to-transparent md:hidden"></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Accordion;
