import React from 'react';
import { Col, Form } from 'react-bootstrap';

const FormSelect = ({
      classes,
      title,
      setData,
      loading,
      options,
      selected,
}) => {
      return (
            <>
                  <Col lg={classes ? classes : 6}>
                        <Form.Select
                              value={selected}
                              onChange={(event) => setData(event.target.value)}
                        >
                              <option>Select {title}</option>
                              {!loading ? (
                                    options.length > 0 ? (
                                          options.map((option, index) => (
                                                <option
                                                      key={index}
                                                      value={option.id}
                                                >
                                                      {option.title}
                                                </option>
                                          ))
                                    ) : (
                                          <option>No data found</option>
                                    )
                              ) : (
                                    <option>Loading</option>
                              )}
                        </Form.Select>
                  </Col>
            </>
      );
};

export default FormSelect;
