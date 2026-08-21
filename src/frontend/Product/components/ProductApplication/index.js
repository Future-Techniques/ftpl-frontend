import React, { useRef, useState } from 'react';

import {
      ProductApplicationContainer,
      ProductApplicationContent,
      ProductApplicationIcon,
      ProductApplicationSlider,
      ProductApplicationHeading,
      ProductApplicationTitle
} from './styles';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Container } from 'react-bootstrap';
import {
      Hospital,
      Hotel,
      Industry,
      ResidentalBuilding,
      SwimmingPool
} from '../../../../components/icons';

const ProductApplication = () => {
      return (
            <>
                  <ProductApplicationContainer>
                        <Container>
                              <ProductApplicationHeading className="text-center">
                                    <h2>Areas of Application</h2>
                              </ProductApplicationHeading>
                              <ProductApplicationSlider>
                                    <Swiper
                                          slidesPerView={1}
                                          spaceBetween={10}
                                          pagination={{
                                                clickable: true
                                          }}
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
                                                      slidesPerView: 6,
                                                      spaceBetween: 50
                                                }
                                          }}
                                          modules={[Pagination]}
                                          className="mySwiper"
                                    >
                                          <SwiperSlide>
                                                <ProductApplicationContent>
                                                      <ProductApplicationIcon backColor="#7B87C2">
                                                            <Hotel />
                                                      </ProductApplicationIcon>
                                                      <ProductApplicationTitle>
                                                            Hotels
                                                      </ProductApplicationTitle>
                                                </ProductApplicationContent>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                <ProductApplicationContent>
                                                      <ProductApplicationIcon backColor="#fdb913">
                                                            <Hospital />
                                                      </ProductApplicationIcon>
                                                      <ProductApplicationTitle>
                                                            Hospital
                                                      </ProductApplicationTitle>
                                                </ProductApplicationContent>
                                          </SwiperSlide>
                                          {/* <SwiperSlide>
                                                <ProductApplicationContent>
                                                      <ProductApplicationIcon backColor="#0080C6">
                                                            <Dairy />
                                                      </ProductApplicationIcon>
                                                      <ProductApplicationTitle>
                                                            Diary
                                                      </ProductApplicationTitle>
                                                </ProductApplicationContent>
                                          </SwiperSlide> */}
                                          <SwiperSlide>
                                                <ProductApplicationContent>
                                                      <ProductApplicationIcon backColor="#00B6B5">
                                                            <Industry />
                                                      </ProductApplicationIcon>
                                                      <ProductApplicationTitle>
                                                            Industry
                                                      </ProductApplicationTitle>
                                                </ProductApplicationContent>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                <ProductApplicationContent>
                                                      <ProductApplicationIcon backColor="#8DC63F">
                                                            <ResidentalBuilding />
                                                      </ProductApplicationIcon>
                                                      <ProductApplicationTitle>
                                                            Residental Building
                                                      </ProductApplicationTitle>
                                                </ProductApplicationContent>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                                <ProductApplicationContent>
                                                      <ProductApplicationIcon backColor="#3D3649">
                                                            <SwimmingPool />
                                                      </ProductApplicationIcon>
                                                      <ProductApplicationTitle>
                                                            Swimming Pool
                                                      </ProductApplicationTitle>
                                                </ProductApplicationContent>
                                          </SwiperSlide>
                                    </Swiper>
                              </ProductApplicationSlider>
                        </Container>
                  </ProductApplicationContainer>
            </>
      );
};

export default ProductApplication;
