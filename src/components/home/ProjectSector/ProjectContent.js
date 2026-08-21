import React from "react";
import {
      ProjectContentCard,
      ProjectContentCardButton,
      ProjectContentCardWrapper,
} from "./styles";
import { Link } from "react-router-dom";
import { ServiceButton } from "../../../frontend/home/styles";

const ProjectContent = () => {
      return (
            <>
                  <ProjectContentCard>
                        <ProjectContentCardWrapper>
                              <h5>[ Projects ]</h5>
                              <h2>References</h2>
                              <ProjectContentCardButton className=" d-sm-block">
                                    <Link to="/"></Link>
                              </ProjectContentCardButton>
                        </ProjectContentCardWrapper>

                        <p>
                              Our inspired solutions have helped shape modern
                              acoustic design. Alluring spaces, internationally
                              recognised for their architectura elegance and
                              exceptional sound management live here.
                        </p>
                        <ProjectContentCardButton className="d-none d-md-block">
                              <ServiceButton height="50px">
                                    <Link
                                          to="/reference"
                                          className="text-decoration-none text-white d-flex align-items-center justify-content-between gap-3"
                                    >
                                          Explore More{" "}
                                          <span className="material-symbols-outlined">
                                                east
                                          </span>
                                    </Link>
                              </ServiceButton>
                        </ProjectContentCardButton>
                  </ProjectContentCard>
            </>
      );
};

export default ProjectContent;
