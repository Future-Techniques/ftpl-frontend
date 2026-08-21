import React from "react";
import { ProjectAdditionalContainer, ProjectAdditionalContent } from "./styles";
import { Col, Container, Row } from "react-bootstrap";

const ProductAdditional = () => {
      return (
            <>
                  <ProjectAdditionalContainer>
                        <Container>
                              <h2 className="text-center mb-5">
                                    Increase Energy Efficiency & Savings
                              </h2>
                              <Row>
                                    <Col lg={6}>
                                          <ProjectAdditionalContent>
                                                <h5>Maximum efficiency</h5>
                                                <p>
                                                      The hot water storage tank
                                                      is designed to maximize
                                                      the efficiency of hot
                                                      water production:
                                                </p>
                                                <ul>
                                                      <li>
                                                            Multiple layers of
                                                            polyurethane foam
                                                            fully insulate the
                                                            water heater
                                                      </li>
                                                      <li>
                                                            Stainless steel heat
                                                            exchanger, with a
                                                            capacity of 29
                                                            liters, runs the
                                                            entire length of the
                                                            tank.
                                                      </li>
                                                      <li>
                                                            Provides hot water
                                                            at all levels.
                                                      </li>
                                                </ul>
                                                <br />
                                                <h5>Energy savings</h5>
                                                <p>
                                                      By combining a heat pump
                                                      and a hot water storage
                                                      tank, you achieve optimal
                                                      savings:
                                                </p>
                                                <ul>
                                                      <li>
                                                            Reduce the
                                                            electricity required
                                                            to produce domestic
                                                            hot water by up to
                                                            70%, (compared to a
                                                            traditional hot
                                                            water heater).
                                                      </li>
                                                      <li>
                                                            Nearly instantaneous
                                                            production of hot
                                                            water, without
                                                            additional electric
                                                            power for the water
                                                            disinfection cycle.
                                                      </li>
                                                </ul>
                                          </ProjectAdditionalContent>
                                    </Col>
                                    <Col lg={6}>
                                          <img
                                                src="/images/img/Products/view-bioengineering-advance-with-robotic-human-hands.jpg"
                                                alt=""
                                                className="img-fluid"
                                          />
                                    </Col>
                              </Row>
                        </Container>
                  </ProjectAdditionalContainer>
            </>
      );
};

export default ProductAdditional;
