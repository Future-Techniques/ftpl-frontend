import React from "react";
import { Col, Form } from "react-bootstrap";
import { FormInputBox } from "../FormInput/styles";

function FormTextarea({ title, type, handleChange, classes, rows, value }) {
      return (
            <>
                  <Form.Group as={Col} lg={classes ? classes : 12}>
                        <FormInputBox
                              as="Textarea"
                              rows={rows}
                              placeholder={title}
                              type={type ? type : "text"}
                              className="w-100"
                              value={value}
                              onChange={(event) =>
                                    handleChange(event.target.value)
                              }
                        />
                  </Form.Group>
            </>
      );
}

export default FormTextarea;
