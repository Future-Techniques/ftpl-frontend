import React from "react";
import {
      ApplicationContentCard,
      ApplicationDescription,
      ApplicationSubTitle,
      ApplicationTitle,
} from "./styles";
import { ServiceButton } from "../../../frontend/home/styles";
import { Link } from "react-router-dom";

const ApplicationContent = () => {
      return (
            <>
                  <ApplicationContentCard>
                        <ApplicationSubTitle>
                              Our Industry Application
                        </ApplicationSubTitle>
                        <ApplicationDescription>
                              Visit Our Services Section & Explore the Services
                              We Provide
                        </ApplicationDescription>
                        <ServiceButton>
                              <Link
                                    to="/services"
                                    className="text-decoration-none text-white d-flex align-items-center justify-content-between gap-3"
                              >
                                    Explore More{" "}
                                    <span className="material-symbols-outlined">
                                          east
                                    </span>
                              </Link>
                        </ServiceButton>
                  </ApplicationContentCard>
            </>
      );
};

export default ApplicationContent;
