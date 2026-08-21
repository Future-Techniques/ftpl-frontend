import React from 'react';
import { Col, Form } from 'react-bootstrap';

const FormFile = ({ description, handleForm, value }) => {
      return (
            <>
                  <Col lg={6}>
                        <Form.Control
                              type="file"
                              onChange={(event) =>
                                    handleForm(event.target.files[0])
                              }
                              value={value ? value?.filename : ''}
                        />
                        <p className="text-danger mb-0">{description}</p>
                  </Col>
            </>
      );
};

export default FormFile;
