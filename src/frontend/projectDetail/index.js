import React from 'react';
import BreadcrumbBox from '../../components/common/BreadcrumbBox';
import { Col, Container, Row } from 'react-bootstrap';
import {
      ProjectDetailContainer,
      ProjectInfo,
      ProjectInfoDetails,
      ProjectSingleContainer,
      ProjectTitle,
      SidebarContainer
} from './styles';
import ProjectSlider from './ProjectSlider';

const ProjectDetail = () => {
      return (
            <>
                  <BreadcrumbBox
                        title="Our Projects"
                        otherLink="Regulance Complaince System"
                  />
                  <ProjectDetailContainer>
                        <Container className="mt-5">
                              <Row className="g-5">
                                    <Col lg={8}>
                                          <ProjectSingleContainer>
                                                <ProjectSlider />
                                                <ProjectTitle className="mt-4">
                                                      <b>
                                                            {' '}
                                                            Regulatory
                                                            Compliance System
                                                      </b>
                                                </ProjectTitle>
                                                <p className="text-justify">
                                                      Lorem ipsum is simply free
                                                      text used by copytyping
                                                      refreshing. Neque porro
                                                      est qui dolorem ipsum quia
                                                      quaed inventore veritatis
                                                      et quasi architecto beatae
                                                      vitae dicta sunt
                                                      explicabo. Aelltes port
                                                      lacus quis enim var sed
                                                      efficitur turpis gilla sed
                                                      sit amet finibus eros.
                                                      Lorem Ipsum is simply
                                                      dummy text of the printing
                                                      and typesetting industry.
                                                      Lorem Ipsum has been the
                                                      ndustry standard dummy
                                                      text ever since the 1500s,
                                                      when an unknown printer
                                                      took a galley of type and
                                                      scrambled it to make a
                                                      type specimen book. It has
                                                      survived not only five
                                                      centuries. Lorem Ipsum is
                                                      simply dummy text of the
                                                      new design printng and
                                                      type setting Ipsum Take a
                                                      look at our round up of
                                                      the best shows coming soon
                                                      to your telly box has been
                                                      the is industrys. When an
                                                      unknown printer took a
                                                      galley of type and
                                                      scrambled it to make a
                                                      type specimen book. It has
                                                      survived not only five
                                                      centuries, but also the
                                                      leap into electronic
                                                      typesetting, remaining
                                                      essentially unchanged. It
                                                      was popularised in the
                                                      1960s with the release of
                                                      Letraset sheets
                                                      containing.
                                                </p>
                                          </ProjectSingleContainer>
                                    </Col>
                                    <Col lg={4}>
                                          <SidebarContainer>
                                                <ProjectInfo>
                                                      <ProjectTitle>
                                                            Regulatory
                                                            Compliance System
                                                      </ProjectTitle>
                                                      <ProjectInfoDetails>
                                                            <p className="mb-4">
                                                                  It is a long
                                                                  established
                                                                  fact that a
                                                                  reader will be
                                                                  distracted by
                                                                  the readable
                                                                  content of a
                                                                  page.
                                                            </p>
                                                            <ul className="p-0">
                                                                  <li className="d-flex align-items-center ">
                                                                        <h5 className="w-25">
                                                                              Date
                                                                              :
                                                                        </h5>
                                                                        <p>
                                                                              02
                                                                              November
                                                                              2020
                                                                        </p>
                                                                  </li>
                                                                  <li className="d-flex align-items-center ">
                                                                        <h5 className="w-25">
                                                                              Category
                                                                              :{' '}
                                                                        </h5>
                                                                        <p>
                                                                              Heating
                                                                              and
                                                                              Induction
                                                                        </p>
                                                                  </li>
                                                                  <li className="d-flex align-items-center ">
                                                                        <h5 className="w-25">
                                                                              Clients
                                                                              :
                                                                        </h5>
                                                                        <p>
                                                                              William
                                                                              Dixon
                                                                        </p>
                                                                  </li>
                                                                  <li className="d-flex align-items-center ">
                                                                        <h5 className="w-25">
                                                                              Location
                                                                              :
                                                                        </h5>
                                                                        <p>
                                                                              London,
                                                                              NW18JR,
                                                                              UK
                                                                              Brochures
                                                                        </p>
                                                                  </li>
                                                            </ul>
                                                      </ProjectInfoDetails>
                                                </ProjectInfo>
                                          </SidebarContainer>
                                    </Col>
                              </Row>
                        </Container>
                  </ProjectDetailContainer>
            </>
      );
};

export default ProjectDetail;
