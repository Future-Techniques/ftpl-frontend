import React, { useEffect, useState } from 'react';
import BreadcrumbBox from '../../components/common/BreadcrumbBox';
import { Col, Container, Row } from 'react-bootstrap';
import ProjectSkeleton from '../../components/skeletons/ProjectSkeleton';
import { Project } from '../../data/projectList';
import ProjectListItem from './components/ProjectListItem';

const Projects = () => {
      const [isLoading, setIsLoading] = useState(true);
      useEffect(() => {
            setTimeout(() => {
                  setIsLoading(false);
            }, 2000);
      }, []);
      return (
            <>
                  <BreadcrumbBox title="Our Projects" />
                  <Container className="my-5">
                        {!isLoading ? (
                              <Row className="g-5">
                                    {Project.map((project, index) => (
                                          <Col lg={3}>
                                                <ProjectListItem
                                                      title={project.title}
                                                      image={project.image}
                                                      location={
                                                            project.location
                                                      }
                                                />
                                          </Col>
                                    ))}
                              </Row>
                        ) : (
                              <Row>
                                    <Col lg={3}>
                                          <ProjectSkeleton />
                                    </Col>
                                    <Col lg={3}>
                                          <ProjectSkeleton />
                                    </Col>
                                    <Col lg={3}>
                                          <ProjectSkeleton />
                                    </Col>
                                    <Col lg={3}>
                                          <ProjectSkeleton />
                                    </Col>
                              </Row>
                        )}
                  </Container>
            </>
      );
};

export default Projects;
