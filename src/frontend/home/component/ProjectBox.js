import React from "react";
import ProjectSlider from "../../../components/home/ProjectSector/ProjectSlider";
import {
      ProjectContainer,
      ProjectSection,
      ProjectSliderContainer,
} from "../styles";
import { Col, Container, Row } from "react-bootstrap";
import ProjectContent from "../../../components/home/ProjectSector/ProjectContent";

const ProjectBox = () => {
      return (
            <>
                  <ProjectSection>
                        <ProjectContainer>
                              <Container>
                                    <Row>
                                          <Col lg={5}>
                                                <ProjectContent />
                                          </Col>
                                          <Col lg={7}>
                                                <ProjectSliderContainer>
                                                      <ProjectSlider />
                                                </ProjectSliderContainer>
                                          </Col>
                                    </Row>
                              </Container>
                        </ProjectContainer>
                  </ProjectSection>
            </>
      );
};

export default ProjectBox;
