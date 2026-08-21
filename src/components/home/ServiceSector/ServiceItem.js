import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { ServiceItemContent } from './styles';

const ServiceItem = ({ title, icon, index }) => {
   return (
      <>
         <ServiceItemContent>
            <Card>
               <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Img variant="top" src={icon} alt={title} />
               </Card.Body>
            </Card>
         </ServiceItemContent>
      </>
   );
};

export default ServiceItem;
