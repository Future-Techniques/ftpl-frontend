import React, { useContext } from "react";
import BreadcrumbBox from "../../components/common/BreadcrumbBox";
import { Col, Container, Row } from "react-bootstrap";
import {
      AboutBody,
      AboutContainer,
      AboutContent,
      AboutImage,
      AboutSection,
      AboutSector,
      SiteHeading,
} from "./style";
import AboutSectorBox from "../../components/home/AboutSector";
import { AssociateBox, FeatureBox, TestimonialBox } from "../home/component";
import MetaContext from "../../stores/MetaContext";

const AboutPage = () => {
      const metaCtx = useContext(MetaContext);
      metaCtx.handleSlug("about-company");

      return (
            <>
                  <BreadcrumbBox title="About Us" />
                  <AboutSection>
                        <Container>
                              <Row className="g-5">
                                    <Col lg={6}>
                                          <AboutContainer>
                                                <AboutContent>
                                                      <SiteHeading>
                                                            <h2>
                                                                  [ We are
                                                                  FutureTechniques
                                                                  Pvt. Ltd. ]
                                                            </h2>
                                                            <h3>
                                                                  Transforming
                                                                  <br />
                                                                  With
                                                                  Innovations
                                                            </h3>
                                                      </SiteHeading>
                                                      <AboutBody>
                                                            {/* <p className="mb-5">
                                                                  We “Solustrid”
                                                                  are here to
                                                                  support that
                                                                  economy
                                                                  through that
                                                                  driver and we
                                                                  proudly want
                                                                  to say that we
                                                                  have succeeded
                                                                  with so many
                                                                  ups and downs
                                                                  for the past
                                                                  25 years with
                                                                  the family we
                                                                  built with the
                                                                  love of our
                                                                  customers.
                                                            </p> */}
                                                      </AboutBody>
                                                      <AboutSector>
                                                            <AboutSectorBox
                                                                  title={
                                                                        "Industrial Solution"
                                                                  }
                                                                  
                                                                  image={
                                                                        "/images/svg/manufacture.svg"
                                                                  }
                                                                  // description="Veniam quis node exercitation ullamco nisi aliquip laboris"
                                                            />
                                                      </AboutSector>
                                                </AboutContent>
                                          </AboutContainer>
                                    </Col>
                                    <Col lg={6}>
                                          <AboutImage>
                                                <Container>
                                                      <Row className="g-5">
                                                            <Col lg={6}>
                                                                  <img
                                                                        src="/images/img/services/about.png"
                                                                        className="img-fluid"
                                                                  />
                                                            </Col>
                                                            <Col lg={6}>
                                                                  <img
                                                                        src="/images/img/about/industry-2.jpg"
                                                                        className="img-fluid  top__margin"
                                                                  />
                                                            </Col>
                                                      </Row>
                                                </Container>
                                          </AboutImage>
                                    </Col>
                              </Row>
                        </Container>
                  </AboutSection>
                  <FeatureBox />
                  <TestimonialBox />
                  <AssociateBox limit={2} />
            </>
      );
};

export default AboutPage;
