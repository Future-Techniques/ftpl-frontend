import React, { useContext } from "react";
import BreadcrumbBox from "../../components/common/BreadcrumbBox";
import { Col, Container, Row } from "react-bootstrap";
import PolicyWidget from "../../components/frontend/PolicyWidget";
import { PolicyContent } from "../privacy-policy/styles";
import MetaContext from "../../stores/MetaContext";
import { sanitizeHtml } from "../../helpers/sanitize";

const TermsAndCondition = () => {
      const metaCtx = useContext(MetaContext);
      metaCtx.handleSlug("terms-and-condition");

      return (
            <>
                  <BreadcrumbBox title="Terms & Condition" />
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

export default TermsAndCondition;
