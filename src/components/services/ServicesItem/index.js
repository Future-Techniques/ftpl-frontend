import React from "react";
import {
      ServiceItemButton,
      ServiceItemContainer,
      ServiceItemContent,
      ServiceItemDescription,
      ServiceItemImage,
      ServiceItemTitle,
} from "./styles";
import { Link } from "react-router-dom";

const ServiceItem = ({ image, title, description, serviceLink }) => {
      return (
            <>
                  <ServiceItemContainer
                        data-aos="fade-up"
                        data-aos-duration=""
                        className="rounded-2"
                  >
                        <ServiceItemImage>
                              <img
                                    src={image}
                                    alt={title}
                                    className="rounded-2"
                              />
                        </ServiceItemImage>
                        <ServiceItemContent>
                              <Link to="/" className="text-decoration-none">
                                    <ServiceItemTitle>{title}</ServiceItemTitle>
                              </Link>
                              <ServiceItemDescription>
                                    {description}
                              </ServiceItemDescription>
                        </ServiceItemContent>
                        <ServiceItemButton>
                              <Link
                                    to={serviceLink}
                                    className="text-decoration-none"
                              >
                                    Read More
                              </Link>
                        </ServiceItemButton>
                  </ServiceItemContainer>
            </>
      );
};

export default ServiceItem;
