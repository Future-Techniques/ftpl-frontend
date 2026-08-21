import React, { useContext, useState } from "react";
import BreadcrumbBox from "../../components/common/BreadcrumbBox";
import { Col, Container, Form, Row } from "react-bootstrap";
import { ContactContent, ContactForm, ContactItem, ContactMap } from "./styles";
import { WidgetTitle } from "../faq/styles";
import FormInput from "../../components/form/FormInput";
import FormTextarea from "../../components/form/FormTextarea";
import FormButton from "../../components/form/FormButton";
import axios from "axios";
import MetaContext from "../../stores/MetaContext";
import toast from "react-hot-toast";
import $ from "jquery";

function ContactPage() {
      const [loading, setLoading] = useState(false);
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [phoneNumber, setPhoneNumber] = useState("");
      const [message, setMessage] = useState("");

      const metaCtx = useContext(MetaContext);
      metaCtx.handleSlug("contact-us");

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
            <div>
                  <BreadcrumbBox title="Contact Us" />

                  <Container className="my-5">
                        <Row className="g-0 align-items-center">
                              <Col lg={7}>
                                    <ContactForm>
                                          <WidgetTitle
                                                color={(props) =>
                                                      props.theme.primary
                                                }
                                          >
                                                For any Query?
                                          </WidgetTitle>
                                          <p>
                                                Feel Free to Contact us any
                                                time. we will get back to you as
                                                soon as possible.
                                          </p>
                                          <Form onSubmit={handleForm}>
                                                <Row className="g-4">
                                                      <FormInput
                                                            classes={12}
                                                            title="Name"
                                                            handleChange={
                                                                  setName
                                                            }
                                                            value={name}
                                                      />
                                                      <FormInput
                                                            classes={6}
                                                            type="email"
                                                            title="Email"
                                                            handleChange={
                                                                  setEmail
                                                            }
                                                            value={email}
                                                      />
                                                      <FormInput
                                                            classes={6}
                                                            title="Phone"
                                                            handleChange={
                                                                  setPhoneNumber
                                                            }
                                                            value={phoneNumber}
                                                      />
                                                      <FormTextarea
                                                            classes={12}
                                                            rows={4}
                                                            title="Message"
                                                            handleChange={
                                                                  setMessage
                                                            }
                                                            value={message}
                                                      />
                                                      <FormButton
                                                            title="Submit"
                                                            loading={loading}
                                                      />
                                                </Row>
                                          </Form>
                                    </ContactForm>
                              </Col>
                              <Col lg={5}>
                                    <ContactContent>
                                          <ContactItem>
                                                <h2>Address</h2>
                                                <p>
                                                      Aspen Marg, (St. Xavier
                                                      College Rd), Maitighar
                                                      Mandala, Kathmandu
                                                </p>
                                          </ContactItem>
                                          <ContactItem>
                                                <h2>Phone Number</h2>
                                                <p>+977 1-5911605</p>
                                          </ContactItem>
                                          <ContactItem>
                                                <h2>Email Address</h2>
                                                <p>info@ftpl.com.np</p>
                                          </ContactItem>
                                    </ContactContent>
                              </Col>
                              <Col lg={12}>
                                    <ContactMap>
                                          <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.7521673984133!2d85.31508475542071!3d27.6940537321585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190076a12b75%3A0xf2795a1b0c3b173a!2sFuture%20techniques%20pvt%20ltd.!5e0!3m2!1sen!2snp!4v1744099321128!5m2!1sen!2snp"
                                                width="600"
                                                height="450"
                                                allowfullscreen=""
                                                className="border-0 w-100"
                                                loading="lazy"
                                                title="Future Techniques Pvt Ltd."
                                                referrerpolicy="no-referrer-when-downgrade"
                                          ></iframe>
                                    </ContactMap>
                              </Col>
                        </Row>
                  </Container>
            </div>
      );
}

export default ContactPage;
