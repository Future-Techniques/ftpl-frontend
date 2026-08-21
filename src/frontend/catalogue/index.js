import React, { useContext } from "react";
import BreadcrumbBox from "../../components/common/BreadcrumbBox";
import { Col, Container, Row } from "react-bootstrap";
import { CatalogueBox, CatalogueImage, CatalogueInfo } from "./styles";
import MetaContext from "../../stores/MetaContext";

const CataloguePage = () => {
      const metaCtx = useContext(MetaContext);
      metaCtx.handleSlug("digital-catalogue");

      return (
            <>
                  <BreadcrumbBox title="Digital Catalogue" />

                  <Container className="my-5">
                        <Row className="g-3">
                              <Col lg={4}>
                                    <CatalogueBox>
                                          <CatalogueImage>
                                                <img
                                                      src="/images/img/blogs/frontpage-image1.jpg"
                                                      alt=""
                                                />
                                          </CatalogueImage>
                                          <CatalogueInfo>
                                                <h2>
                                                      <a href="#">
                                                            MAGNIFIED COLLECTION
                                                            23
                                                      </a>
                                                </h2>
                                                <div>
                                                      <a href="#">
                                                            <i class="bx bxs-cloud-download"></i>
                                                            {/* <span>
                                                                  Download
                                                            </span> */}
                                                      </a>
                                                </div>
                                          </CatalogueInfo>
                                    </CatalogueBox>
                              </Col>
                        </Row>
                  </Container>
            </>
      );
};

export default CataloguePage;
