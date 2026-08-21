import React from 'react';
import { applications } from '../../../data/applicationList';
import ApplicationItem from '../../home/ApplicationSector/ApplicationItem';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { MobileApplicationContainer } from './styles';
import { Col } from 'react-bootstrap';
const MobileApplication = () => {
   return (
      <>
         <Col lg={12} className="d-lg-none">
            <MobileApplicationContainer
               slidesPerView={2}
               spaceBetween={10}
               breakpoints={{
                  640: {
                     slidesPerView: 2,
                     spaceBetween: 20
                  },
                  768: {
                     slidesPerView: 4,
                     spaceBetween: 40
                  },
                  1024: {
                     slidesPerView: 5,
                     spaceBetween: 50
                  }
               }}
               className="mySwiper"
            >
               {applications?.length &&
                  applications?.map((application, index) => (
                     <SwiperSlide>
                        <ApplicationItem
                           title={application.title}
                           image={application.image}
                        />
                     </SwiperSlide>
                  ))}
            </MobileApplicationContainer>
         </Col>
      </>
   );
};

export default MobileApplication;
