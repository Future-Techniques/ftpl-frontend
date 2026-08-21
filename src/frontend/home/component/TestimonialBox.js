import React, { useEffect, useState } from "react";
import { TestimonialSection } from "../styles";
import { Container, Spinner } from "react-bootstrap";
import TestimonialHeading from "../../../components/home/TestimonialSector/TestimonialHeading";
import TestimonialItem from "../../../components/home/TestimonialSector/TestimonialItem";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";

const TestimonialBox = () => {
      const [loading, setLoading] = useState(false);
      const [testimonials, setTestimonials] = useState([]);

      const loadData = async () => {
            setLoading(true);

            await axios
                  .get(`${process.env.REACT_APP_SECRET_KEY}/api/testimonials`, {
                        headers: {
                              apikey: process.env.REACT_APP_API_KEY,
                        },
                  })
                  .then((response) => {
                        if (response.data.result === "success") {
                              setTestimonials(response.data.testimonials);
                        }
                  })
                  .catch((error) => {
                        console.log(error.message);
                  });

            setLoading(false);
      };
      useEffect(() => {
            loadData();
      }, []);

      return (
            <>
                  {testimonials?.length > 0 && (
                        <TestimonialSection>
                              <Container>
                                    <TestimonialHeading />
                                    {!loading ? (
                                          <Swiper
                                                slidesPerView={1}
                                                breakpoints={{
                                                      640: {
                                                            slidesPerView: 2,
                                                            spaceBetween: 20,
                                                      },
                                                      768: {
                                                            slidesPerView: 3,
                                                            spaceBetween: 40,
                                                      },
                                                      1024: {
                                                            slidesPerView: 3,
                                                            spaceBetween: 30,
                                                      },
                                                }}
                                          >
                                                {testimonials?.map(
                                                      (testimonial, index) => (
                                                            <SwiperSlide
                                                                  key={index}
                                                            >
                                                                  <TestimonialItem
                                                                        image={
                                                                              testimonial.image
                                                                        }
                                                                        name={
                                                                              testimonial.name
                                                                        }
                                                                        designation={
                                                                              testimonial.position
                                                                        }
                                                                        feedback={
                                                                              testimonial.message
                                                                        }
                                                                        index={
                                                                              index
                                                                        }
                                                                  />
                                                            </SwiperSlide>
                                                      )
                                                )}
                                          </Swiper>
                                    ) : (
                                          <Spinner />
                                    )}
                              </Container>
                        </TestimonialSection>
                  )}
            </>
      );
};

export default TestimonialBox;
