import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { services } from '../../../data/serviceList';
import ServiceItem from './ServiceItem';

// import required modules
const ServiceSlider = () => {
   return (
      <>
         <Swiper
            slidesPerView={2}
            spaceBetween={10}
            breakpoints={{
               640: {
                  slidesPerView: 2,
                  spaceBetween: 20
               },
               768: {
                  slidesPerView: 3,
                  spaceBetween: 40
               },
               1024: {
                  slidesPerView: 4,
                  spaceBetween: 50
               }
            }}
            className="mySwiper mt-5 h-100"
         >
            {services?.length &&
               services?.map((service, index) => (
                  <SwiperSlide
                     key={service.id}
                     data-aos="fade-right"
                     data-aos-easing="linear"
                     data-aos-duration={1000 + index * 500}
                  >
                     <ServiceItem
                        title={service.title}
                        icon={service.icon}
                        index={index}
                     />
                  </SwiperSlide>
               ))}
         </Swiper>
      </>
   );
};

export default ServiceSlider;
