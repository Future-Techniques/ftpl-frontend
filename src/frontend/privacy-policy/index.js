import React, { useContext } from "react";
import BreadcrumbBox from "../../components/common/BreadcrumbBox";
import { Col, Container, Row } from "react-bootstrap";
import { PolicyContent } from "./styles";
import PolicyWidget from "../../components/frontend/PolicyWidget";
import MetaContext from "../../stores/MetaContext";
import { sanitizeHtml } from "../../helpers/sanitize";

const PrivacyPolicy = () => {
      const metaCtx = useContext(MetaContext);
      metaCtx.handleSlug("privacy-policy");

      return (
            <>
                  <BreadcrumbBox title="Privacy Policy" />
                  <Container className="my-5">
                        <Row>
                              <Col lg={4}>
                                    <PolicyWidget />
                              </Col>
                              <Col lg={8}>
                                    <PolicyContent
                                          dangerouslySetInnerHTML={{
                                                __html: sanitizeHtml(
                                                      metaCtx?.meta?.description
                                                ),
                                          }}
                                    />
                              </Col>
                        </Row>
                  </Container>
            </>
      );
};

export default PrivacyPolicy;
