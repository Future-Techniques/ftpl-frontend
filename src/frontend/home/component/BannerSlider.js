import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Thumbs } from "swiper/modules";
// import required modules
// import { banners } from '../../../data/bannerList';
import { BannerBottom, BannerContent, BannerTop } from "../styles";
import { Col, Container } from "react-bootstrap";
import { Autoplay } from "swiper/modules";

const BannerSlider = ({ banners }) => {
      const [thumbsSwiper, setThumbsSwiper] = useState(null);

      return (
            <>
                  <BannerTop>
                        <Swiper
                              spaceBetween={10}
                              loop={true}
                              thumbs={{ swiper: thumbsSwiper }}
                              modules={[EffectFade, Autoplay, Thumbs]}
                              autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                              }}
                              className="banner__slider"
                        >
                              {banners?.length &&
                                    banners?.map((banner, index) => (
                                          <SwiperSlide key={index}>
                                                <img
                                                      src={banner.image}
                                                      className="img-fluid"
                                                      alt={banner.title}
                                                />
                                          </SwiperSlide>
                                    ))}
                        </Swiper>
                  </BannerTop>
                  {/* <BannerBottom>
                        <Container className="d-flex align-items-center justify-content-center">
                              <Col lg={12} sm={12} className="w-100">
                                    <Swiper
                                          onSwiper={setThumbsSwiper}
                                          spaceBetween={0}
                                          slidesPerView={2}
                                          className="mySwiper"
                                          breakpoints={{
                                                640: {
                                                      slidesPerView: 2,
                                                },
                                                768: {
                                                      slidesPerView: 2,
                                                },
                                                1024: {
                                                      slidesPerView: 4,
                                                },
                                          }}
                                    >
                                          {banners?.length &&
                                                banners?.map(
                                                      (banner, index) => (
                                                            <SwiperSlide
                                                                  key={index}
                                                            >
                                                                  <BannerContent>
                                                                        <img
                                                                              src={
                                                                                    banner.icon
                                                                              }
                                                                              className="img-fluid"
                                                                              alt={
                                                                                    banner.title
                                                                              }
                                                                        />
                                                                        <h5>
                                                                              {
                                                                                    banner.title
                                                                              }
                                                                        </h5>
                                                                  </BannerContent>
                                                            </SwiperSlide>
                                                      )
                                                )}
                                    </Swiper>
                              </Col>
                        </Container>
                  </BannerBottom> */}
            </>
      );
};

export default BannerSlider;
