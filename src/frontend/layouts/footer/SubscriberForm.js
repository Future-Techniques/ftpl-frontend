import React, { useState } from "react";
import { FooterContent, FooterHeading } from "./styles";
import { Button, Form, Spinner } from "react-bootstrap";
import SocialMedia from "../../../components/common/SocialMedia";
import axios from "axios";
import toast from "react-hot-toast";

const SubscriberForm = () => {
      const [loading, setLoading] = useState(false);
      const [email, setEmail] = useState("");

      const handelSubmit = async (event) => {
            event.preventDefault();
            setLoading(true);

            const data = {
                  email: email,
            };

            await axios
                  .post(
                        `${process.env.REACT_APP_SECRET_KEY}/api/subscriber`,
                        data,
                        {
                              headers: {
                                    apikey: process.env.REACT_APP_API_KEY,
                              },
                        }
                  )
                  .then((response) => {
                        setTimeout(() => {
                              if (response.data.result === "success") {
                                    toast.success(response.data.message);
                                    setEmail("");
                              }
                              if (response.data.result === "error") {
                                    if (response.data.message.email) {
                                          toast.error(
                                                response.data.message.email
                                          );
                                    }
                              }
                              setLoading(false);
                        }, 3000);
                  })
                  .catch((error) => {
                        setTimeout(() => {
                              setLoading(false);
                              console.log(error.message);
                        }, 3000);
                  });
      };

      return (
            <>
                  <FooterHeading>
                        <h4>NewsLetter</h4>
                  </FooterHeading>
                  <FooterContent>
                        <p>
                              Stay Informed, Leave Your Email – Never Miss a
                              Blog Post or Case Study
                        </p>
                        <Form onSubmit={handelSubmit}>
                              <Form.Group
                                    className="mb-3 d-flex align-item-center justify-content-between form__group"
                                    controlId="exampleForm.ControlInput1"
                              >
                                    <Form.Control
                                          type="email"
                                          onChange={(event) =>
                                                setEmail(event.target.value)
                                          }
                                          value={email}
                                          placeholder="Enter Email Address"
                                    />
                                    <Button type="submit">
                                          {!loading ? (
                                                <i className="bx bx-paper-plane"></i>
                                          ) : (
                                                <Spinner />
                                          )}
                                    </Button>
                              </Form.Group>
                        </Form>
                        <SocialMedia />
                  </FooterContent>
            </>
      );
};

export default SubscriberForm;
