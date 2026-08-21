import React from "react";
import {
      ProjectListContainer,
      ProjectListContent,
      ProjectListImage,
      ProjectListLink,
} from "./styles";
import { Link } from "react-router-dom";

const ProjectListItem = ({ image, title, location, link }) => {
      return (
            <>
                  <ProjectListContainer>
                        <ProjectListImage>
                              <img
                                    src={image}
                                    alt={title}
                                    className="img-fluid"
                              />
                              <ProjectListLink>
                                    <Link
                                          to=""
                                          className="d-flex aling-items-center justify-content-center text-decoration-none"
                                    >
                                          <span class="material-symbols-outlined">
                                                arrow_right_alt
                                          </span>
                                    </Link>
                              </ProjectListLink>
                        </ProjectListImage>
                        <ProjectListContent>
                              <p className="mb-2">{location}</p>
                              <h4>
                                    <Link to={link}>{title}</Link>
                              </h4>
                        </ProjectListContent>
                  </ProjectListContainer>
            </>
      );
};

export default ProjectListItem;
