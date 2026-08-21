import React, { useState } from "react";
import {
      ContactButton,
      ContactCard,
      ContactContainer,
      ContactContent,
      ContactSection,
} from "../styles";
import { Col, Container, Row } from "react-bootstrap";
import CommonButton from "../../../components/common/Button";

const ContactBox = ({ status, setStatus }) => {
      return (
            <>
                  <ContactSection>
                        <ContactContainer>
                              <ContactCard>
                                    <ContactContent>
                                          <Container>
                                                <Row>
                                                      <Col>
                                                            <h5>
                                                                  Trending on
                                                                  Social Media
                                                            </h5>
                                                            <p>
                                                                  We are always
                                                                  Ready To Help
                                                                  You
                                                            </p>
                                                      </Col>
                                                      <Col>
                                                            <ContactButton className="gap-3">
                                                                  <CommonButton
                                                                        title="Facebook"
                                                                        active={
                                                                              status ===
                                                                              "Facebook"
                                                                        }
                                                                        onChange={() =>
                                                                              setStatus(
                                                                                    "Facebook"
                                                                              )
                                                                        }
                                                                  />
                                                                  <CommonButton
                                                                        title="LinkedIn"
                                                                        buttonColor="white"
                                                                        onChange={() =>
                                                                              setStatus(
                                                                                    "LinkedIn"
                                                                              )
                                                                        }
                                                                        active={
                                                                              status ===
                                                                              "LinkedIn"
                                                                        }
                                                                        color={(
                                                                              props
                                                                        ) =>
                                                                              props
                                                                                    .theme
                                                                                    .primary
                                                                        }
                                                                  />
                                                            </ContactButton>
                                                      </Col>
                                                </Row>
                                          </Container>
                                    </ContactContent>
                              </ContactCard>
                        </ContactContainer>
                  </ContactSection>
            </>
      );
};

export default ContactBox;
