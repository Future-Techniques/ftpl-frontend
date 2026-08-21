import React from "react";
import { ApplicationSection, ApplicationWrapper } from "../styles";
import { Col, Container, Row } from "react-bootstrap";
import ApplicationHeading from "../../../components/home/ApplicationSector/ApplicationHeading";
import { applications } from "../../../data/applicationList";
import ApplicationItem from "../../../components/home/ApplicationSector/ApplicationItem";
import ApplicationContent from "../../../components/home/ApplicationSector/ApplicationContent";
import MobileApplication from "../../../components/responsive/MobileApplicationBox";

const ApplicationBox = () => {
      return (
            <>
                  <ApplicationSection>
                        <Container>
                              <Row className="g-4">
                                    <Col lg={3}>
                                          <ApplicationHeading />
                                    </Col>
                                    <MobileApplication />
                                    {applications?.length &&
                                          applications?.map(
                                                (application, index) => (
                                                      <ApplicationWrapper
                                                            sm={3}
                                                            key={index}
                                                            data-aos="fade-right"
                                                            data-aos-easing="linear"
                                                            data-aos-duration="1500"
                                                      >
                                                            <ApplicationItem
                                                                  title={
                                                                        application.title
                                                                  }
                                                                  image={
                                                                        application.image
                                                                  }
                                                            />
                                                      </ApplicationWrapper>
                                                )
                                          )}
                                    <Col lg={6}>
                                          <ApplicationContent />
                                    </Col>
                              </Row>
                        </Container>
                  </ApplicationSection>
            </>
      );
};

export default ApplicationBox;
