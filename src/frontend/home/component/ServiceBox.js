import React from 'react';
import {
   BannerButton,
   ServiceButton,
   ServiceContainer,
   ServiceContent,
   ServiceHeading,
   ServiceSection
} from '../styles';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ServiceSlider from '../../../components/home/ServiceSector/ServiceSlider';

const ServiceBox = () => {
   return (
      <>
         <ServiceSection>
            <Container>
               <ServiceContainer>
                  <Row>
                     <Col lg={4}>
                        <ServiceHeading>
                           <h2>Explore the Services We Provide</h2>
                        </ServiceHeading>
                     </Col>
                     <Col lg={4}>
                        <ServiceContent>
                           <p>
                              There are many variations of passages of lorem
                              Ipsum available, but the majority have suffered
                              alteration.
                           </p>
                        </ServiceContent>
                     </Col>
                     <Col
                        lg={4}
                        className=" align-item-center justify-content-center"
                     >
                        <ServiceButton className="d-flex align-items-center d-lg-block d-none">
                           <Link
                              to="#"
                              className="text-decoration-none text-white d-flex align-items-center justify-content-between gap-3"
                           >
                              Explore More{' '}
                              <span className="material-symbols-outlined">
                                 east
                              </span>
                           </Link>
                        </ServiceButton>
                     </Col>
                  </Row>
               </ServiceContainer>
               <ServiceContent>
                  <Row>
                     <Col lg={12}>
                        <ServiceSlider />
                     </Col>
                  </Row>
               </ServiceContent>
            </Container>
         </ServiceSection>
      </>
   );
};

export default ServiceBox;
