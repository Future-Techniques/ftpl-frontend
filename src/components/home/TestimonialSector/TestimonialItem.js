import React from 'react';
import {
      TestimonialContainer,
      TestimonialContent,
      TestimonialImage,
      TestimonialInfo
} from './styles';

const TestimonialItem = ({ name, designation, image, feedback, index }) => {
      return (
            <>
                  <TestimonialContainer
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration={1000 + index * 700}
                  >
                        <p>
                              <i className="bx bxs-quote-alt-left me-2"></i>
                              {feedback}
                        </p>
                        <TestimonialContent>
                              <TestimonialImage>
                                    <img
                                          src={image}
                                          alt=""
                                          className="img-fluid"
                                    />
                              </TestimonialImage>
                              <TestimonialInfo>
                                    <h4>{name}</h4>
                                    <p className="designation">{designation}</p>
                              </TestimonialInfo>
                        </TestimonialContent>
                  </TestimonialContainer>
            </>
      );
};

export default TestimonialItem;
