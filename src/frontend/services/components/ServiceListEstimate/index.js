import React from "react";
import {
      ServiceEstimateContainer,
      ServiceEstimateImage,
      ServiceEstimateInner,
} from "../ServicesList/styles";
import Helper from "./Helper";
import { ServiceButton } from "../../../home/styles";
import { Link } from "react-router-dom";

const ServiceListEstimate = () => {
      return (
            <>
                  <ServiceEstimateContainer>
                        <ServiceEstimateImage className="">
                              <Helper helperclass="helper1" />
                              <Helper helperclass="helper2" />
                              <Helper helperclass="helper3" />
                              <Helper helperclass="helper4" />
                              <Helper helperclass="helper5" />
                              <Helper helperclass="helper6" />
                              <img
                                    src="/images/img/services/estimate.jpg"
                                    alt="future techniques service"
                                    className="rounded-top"
                              />
                        </ServiceEstimateImage>
                        <ServiceEstimateInner className="d-flex flex-column align-items-center rounded-bottom">
                              <p className="text-white ">
                                    {" "}
                                    <br />
                                    Contact us for a free quote on your next
                                    home improvement project.
                              </p>
                              <ServiceButton
                                    backgroundColor={(props) =>
                                          props.theme.white
                                    }
                                    height="50px"
                                    color={(props) => props.theme.primary}
                              >
                                    <Link to="/contact-us">
                                          Contact Us{" "}
                                          <span className="material-symbols-outlined">
                                                east
                                          </span>
                                    </Link>
                              </ServiceButton>
                        </ServiceEstimateInner>
                  </ServiceEstimateContainer>
            </>
      );
};

export default ServiceListEstimate;
