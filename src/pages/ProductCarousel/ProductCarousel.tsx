import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { products } from "../../data/data";

export default function ProductCarousel() {
  return (
    <div className="w-full px-6 py-10">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView={5}
        breakpoints={{
          320: { slidesPerView: 1.5 },
          640: { slidesPerView: 2.5 },
          768: { slidesPerView: 3.5 },
          1024: { slidesPerView: 5 },
        }}
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 hover:scale-105">
              <img
                src={item.img}
                alt={item.nom}
                className="w-full h-64 object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

