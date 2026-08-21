import React from "react";
import { Col, Form } from "react-bootstrap";
import { FormInputBox } from "./styles";

function FormInput({ title, type, classes, handleChange, value }) {
      return (
            <>
                  <Form.Group as={Col} lg={classes ? classes : 6}>
                        <FormInputBox
                              placeholder={title}
                              type={type ? type : "text"}
                              value={value}
                              onChange={(event) =>
                                    handleChange(event.target.value)
                              }
                        />
                  </Form.Group>
            </>
      );
}

export default FormInput;
