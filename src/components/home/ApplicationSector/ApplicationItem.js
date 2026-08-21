import React from 'react';
import { ApplicationItemContainer } from './styles';
import { Card, Col } from 'react-bootstrap';

const ApplicationItem = ({ title, image }) => {
   return (
      <>
         <ApplicationItemContainer>
            <Card>
               <Card.Body>
                  <Card.Title>{title}</Card.Title>
               </Card.Body>
               <Card.Img src={image} alt={title} className="img-fluid" />
            </Card>
         </ApplicationItemContainer>
      </>
   );
};

export default ApplicationItem;
