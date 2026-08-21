import React from 'react';
import { FormButtonBox } from './styles';
import { Col, Spinner } from 'react-bootstrap';

const FormButton = ({ title, classes, type, loading }) => {
      return (
            <>
                  <Col lg={classes ? classes : 12}>
                        <FormButtonBox type={type ? type : 'submit'}>
                              {title}
                              {loading && <Spinner />}
                        </FormButtonBox>
                  </Col>
            </>
      );
};

export default FormButton;
