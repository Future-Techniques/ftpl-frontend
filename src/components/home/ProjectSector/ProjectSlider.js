import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import ProjectItem from "./ProjectItem";
import { projects } from "../../../data/projectList";

const ProjectSlider = () => {
      const num = 1;
      return (
            <>
                  <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        className="mySwiper"
                        breakpoints={{
                              640: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                              },
                              768: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                              },
                              1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                              },
                        }}
                  >
                        {projects?.length &&
                              projects?.map((project, index) => (
                                    <SwiperSlide
                                          key={index}
                                          data-aos="fade-left"
                                          data-aos-easing="linear"
                                          data-aos-duration={1000 + index * 500}
                                    >
                                          <ProjectItem
                                                title={project.title}
                                                image={project.image}
                                                location={project.location}
                                          />
                                    </SwiperSlide>
                              ))}
                  </Swiper>
            </>
      );
};
export default ProjectSlider;
