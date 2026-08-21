import React, { useState } from 'react';
import {
   PackageSliderContainer,
   PackageSliderSlide,
   PackageSliderThumb,
   PackageSliderWrapper,
   PackageSliderWrapperThumb,
   SolutionDetailContainer,
   SolutionDetailDesc,
   SolutionDetailItem,
   SolutionDetailSlider,
   SolutionDetailTitle
} from '../../styles';
import BreadcrumbBox from '../../../../components/common/BreadcrumbBox';
import { Col, Container, Row } from 'react-bootstrap';
import SolutionsList from '../SolutionsList';
import ServiceListEstimate from '../../../services/components/ServiceListEstimate';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { projectimages } from '../../../../data/projectDetailList';

const SolutionDetail = () => {
   const [thumbsSwiper, setThumbsSwiper] = useState(null);
   return (
      <>
         <BreadcrumbBox title="Reference" />
         <SolutionDetailContainer>
            <Container>
               <Row>
                  <Col lg={8}>
                     <SolutionDetailItem>
                        <SolutionDetailSlider>
                           <PackageSliderContainer>
                              <>
                                 <PackageSliderWrapper
                                    style={{
                                       '--swiper-navigation-color': '#fff',
                                       '--swiper-pagination-color': '#fff'
                                    }}
                                    spaceBetween={10}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper2"
                                 >
                                    {projectimages?.map((item, index) => (
                                       <PackageSliderSlide key={index}>
                                          <img
                                             src={item.image}
                                             alt={item.title}
                                          />
                                       </PackageSliderSlide>
                                    ))}
                                 </PackageSliderWrapper>
                                 <PackageSliderWrapperThumb
                                    onSwiper={setThumbsSwiper}
                                    spaceBetween={10}
                                    slidesPerView={4}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper"
                                 >
                                    {projectimages?.map((item, index) => (
                                       <PackageSliderThumb key={index}>
                                          <img
                                             src={item.image}
                                             alt={item.title}
                                          />
                                       </PackageSliderThumb>
                                    ))}
                                 </PackageSliderWrapperThumb>
                              </>
                           </PackageSliderContainer>
                        </SolutionDetailSlider>
                        <SolutionDetailTitle>
                           Sheraton Hotel & Towers
                        </SolutionDetailTitle>
                        <SolutionDetailDesc>
                           The Sheraton Hotel is located along the Victoria
                           Harbour in Hong Kong. It comprises of 782 guest rooms
                           as well as several spas, saunas and health clubs with
                           professional instructors. In addition to that it
                           offers various ballrooms, meeting spaces, restau-
                           rants, lounges, cafes and bars and a swimming pool on
                           the rooftop with a view of the Victoria Harbour.
                           <br />
                           Ecotherm replaced the entire steam & hot water sys-
                           tem during full operation of the hotel through a door
                           of only 1.2 meters, without interrupting hot water &
                           steam supply to guest rooms, kitchen and laundry.
                        </SolutionDetailDesc>
                     </SolutionDetailItem>
                  </Col>
                  <Col></Col>
                  <Col lg={3}>
                     <SolutionsList />
                     <ServiceListEstimate />
                  </Col>
               </Row>
            </Container>
         </SolutionDetailContainer>
      </>
   );
};

export default SolutionDetail;
