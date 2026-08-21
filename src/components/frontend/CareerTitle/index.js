import React from 'react';
import { Col } from 'react-bootstrap';

const CareerTitle = ({ classes, title }) => {
      return (
            <>
                  <Col lg={classes ? classes : 12}>
                        <h3>{title}</h3>
                  </Col>
            </>
      )
}

export default CareerTitle;