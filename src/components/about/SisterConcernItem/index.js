import React from "react";
import {
      SisterConcernContainer,
      SisterWrapper,
} from "../../../frontend/about/style";
import { Col, Row } from "react-bootstrap";
import {
      SisterConcernDesc,
      SisterConcernDetail,
      SisterConcernHeading,
      SisterConcernItemImage,
} from "./styles";
import CustomHeading from "../../common/CommonHeading";
import { sanitizeHtml } from "../../../helpers/sanitize";

const SisterConcernItem = ({ item, index }) => {
      return (
            <>
                  <SisterConcernContainer
                        style={{
                              background: index % 2 === 0 ? "#FCFBFF" : "unset",
                        }}
                  >
                        <SisterWrapper>
                              <Row className="g-5">
                                    <Col
                                          lg={5}
                                          style={{
                                                order:
                                                      index % 2 === 0
                                                            ? "2"
                                                            : "unset",
                                          }}
                                    >
                                          <SisterConcernItemImage>
                                                <img
                                                      src={item?.image}
                                                      alt={item?.title}
                                                      className="img-fluid"
                                                />
                                          </SisterConcernItemImage>
                                    </Col>
                                    <Col lg={7}>
                                          <SisterConcernDetail>
                                                <SisterConcernHeading>
                                                      <CustomHeading
                                                            title={item?.title}
                                                            fontSize="23px"
                                                      />
                                                </SisterConcernHeading>
                                                <SisterConcernDesc
                                                      dangerouslySetInnerHTML={{
                                                            __html: sanitizeHtml(item?.description),
                                                      }}
                                                />
                                          </SisterConcernDetail>
                                    </Col>
                              </Row>
                        </SisterWrapper>
                  </SisterConcernContainer>
            </>
      );
};

export default SisterConcernItem;
