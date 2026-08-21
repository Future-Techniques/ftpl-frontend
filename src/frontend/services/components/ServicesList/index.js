import React from "react";
import {
      ServiceListContainer,
      ServiceListContent,
      ServiceListHeading,
} from "../../styles";
import { Link } from "react-router-dom";

const ServicesList = ({ services }) => {
      return (
            <>
                  <ServiceListContainer>
                        <ServiceListHeading>
                              <h3>List of services</h3>
                        </ServiceListHeading>
                        <ServiceListContent>
                              <ul className="ps-0">
                                    {services
                                          ?.slice(0, 5)
                                          .map((service, index) => (
                                                <li key={index}>
                                                      <Link
                                                            to={`/services/${service?.slug}`}
                                                            className="text-decoration-none"
                                                      >
                                                            {service.title}
                                                      </Link>
                                                </li>
                                          ))}
                              </ul>
                        </ServiceListContent>
                  </ServiceListContainer>
            </>
      );
};

export default ServicesList;
