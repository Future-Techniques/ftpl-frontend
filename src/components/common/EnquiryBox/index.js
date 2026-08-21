import React, { useState } from "react";
import {
      EnquiryButton,
      EnquiryCard,
      EnquiryContainer,
      EnquiryForm,
      EnquiryHeader,
      EnquiryWrapper,
} from "./styles";
import { Button, Form, Spinner } from "react-bootstrap";
import $ from "jquery";
import axios from "axios";
import toast from "react-hot-toast";

const EnquiryBox = () => {
      const [showForm, setShowForm] = useState(false);

      const [loading, setLoading] = useState(false);
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [phoneNumber, setPhoneNumber] = useState("");
      const [message, setMessage] = useState("");

      const handleForm = async (event) => {
            event.preventDefault();
            setLoading(true);

            const data = {
                  name: name,
                  email: email,
                  phone_number: phoneNumber,
                  message: message,
            };

            await axios
                  .post(
                        `${process.env.REACT_APP_SECRET_KEY}/api/contact`,
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
                                    setName("");
                                    setEmail("");
                                    setPhoneNumber("");
                                    setMessage("");
                                    $("form").trigger("reset");
                              }
                              if (response.data.result === "error") {
                                    if (response.data.message.name) {
                                          toast.error(
                                                response.data.message.name
                                          );
                                    }
                                    if (response.data.message.email) {
                                          toast.error(
                                                response.data.message.email
                                          );
                                    }
                                    if (response.data.message.phone_number) {
                                          toast.error(
                                                response.data.message
                                                      .phone_number
                                          );
                                    }
                                    if (response.data.message.message) {
                                          toast.error(
                                                response.data.message.message
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
                  <EnquiryContainer>
                        <EnquiryButton
                              className="d-flex align-items-center gap-2"
                              onClick={() => setShowForm(!showForm)}
                        >
                              Enquire Us
                              <span class="material-symbols-outlined">
                                    mail
                              </span>
                        </EnquiryButton>
                        <EnquiryCard className={showForm ? "active" : ""}>
                              <EnquiryWrapper>
                                    <EnquiryHeader className="d-flex align-items-center justify-content-between mb-4">
                                          <h4 className="mb-0">
                                                Send Us A Message
                                          </h4>
                                          <span
                                                class="material-symbols-outlined"
                                                onClick={() =>
                                                      setShowForm(!showForm)
                                                }
                                          >
                                                close
                                          </span>
                                    </EnquiryHeader>
                                    <EnquiryForm onSubmit={handleForm}>
                                          <Form.Group>
                                                <Form.Control
                                                      type="text"
                                                      placeholder="Name"
                                                      onChange={(event) =>
                                                            setName(
                                                                  event.target
                                                                        .value
                                                            )
                                                      }
                                                      required
                                                />
                                          </Form.Group>
                                          <Form.Group>
                                                <Form.Control
                                                      type="email"
                                                      onChange={(event) =>
                                                            setEmail(
                                                                  event.target
                                                                        .value
                                                            )
                                                      }
                                                      placeholder="Email"
                                                      required
                                                />
                                          </Form.Group>
                                          <Form.Group>
                                                <Form.Control
                                                      type="tel"
                                                      onChange={(event) =>
                                                            setPhoneNumber(
                                                                  event.target
                                                                        .value
                                                            )
                                                      }
                                                      placeholder="Phone"
                                                      required
                                                />
                                          </Form.Group>
                                          <Form.Group>
                                                <Form.Control
                                                      as="textarea"
                                                      placeholder="Leave a message here."
                                                      style={{
                                                            height: "100px",
                                                      }}
                                                      onChange={(event) =>
                                                            setMessage(
                                                                  event.target
                                                                        .value
                                                            )
                                                      }
                                                />
                                          </Form.Group>
                                          <Button
                                                type="submit"
                                                className="border-0"
                                          >
                                                {" "}
                                                {!loading ? (
                                                      "Submit"
                                                ) : (
                                                      <Spinner />
                                                )}
                                          </Button>
                                    </EnquiryForm>
                              </EnquiryWrapper>
                        </EnquiryCard>
                  </EnquiryContainer>
            </>
      );
};

export default EnquiryBox;
