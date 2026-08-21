import React, { useEffect, useState } from "react";
import BreadcrumbBox from "../../components/common/BreadcrumbBox";
import { Col, Container, Row } from "react-bootstrap";
import FaqWidget from "../../components/frontend/FaqWidget";
import { CareerContent } from "../careerDetail/styles";
import FormInput from "../../components/form/FormInput";
import { CareerForm } from "./styles";
import CareerTitle from "../../components/frontend/CareerTitle";
import FormButton from "../../components/form/FormButton";
import FormTextarea from "../../components/form/FormTextarea";
import FormSelect from "../../components/form/FormSelect";
import FormFile from "../../components/form/FormFile";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import $ from "jquery";
import { Helmet } from "react-helmet";

const options = [
      {
            id: "Male",
            title: "Male",
      },
      {
            id: "Female",
            title: "Female",
      },
];

const CareerApply = () => {
      const { careerId } = useParams();
      const [loading, setLoading] = useState(false);
      const [career, setCareer] = useState([]);

      const loadData = async () => {
            await axios
                  .get(
                        `${process.env.REACT_APP_SECRET_KEY}/api/careers/${careerId}`,
                        {
                              headers: {
                                    apikey: process.env.REACT_APP_API_KEY,
                              },
                        }
                  )
                  .then((response) => {
                        if (response.data.result === "success") {
                              setCareer(response.data.career);
                        }
                  })
                  .catch((error) => {
                        console.log(error.message);
                  });
      };

      useEffect(() => {
            loadData();
      }, []);

      const [firstName, setFirstName] = useState("");
      const [lastName, setLastName] = useState("");
      const [gender, setGender] = useState("");
      const [dateOfBirth, setDateOfBirth] = useState("");
      const [email, setEmail] = useState("");
      const [currentAddress, setCurrentAddress] = useState("");
      const [phoneNumber, setPhoneNumber] = useState("");
      const [permanentAddress, setPermanentAddress] = useState("");
      const [qualification, setQualification] = useState("");
      const [experience, setExperience] = useState("");
      const [aboutYourself, setAboutYourself] = useState("");
      const [resume, setResume] = useState("");

      const handleForm = async (event) => {
            setLoading(true);
            event.preventDefault();

            const data = {
                  first_name: firstName,
                  last_name: lastName,
                  gender: gender,
                  date_of_birth: dateOfBirth,
                  email: email,
                  current_address: currentAddress,
                  phone_number: phoneNumber,
                  permanent_address: permanentAddress,
                  education: qualification,
                  experience: experience,
                  about_yourself: aboutYourself,
                  resume: resume,
            };

            await axios
                  .post(
                        `${process.env.REACT_APP_SECRET_KEY}/api/careers/${careerId}`,
                        data,
                        {
                              headers: {
                                    apikey: process.env.REACT_APP_API_KEY,
                                    "Content-Type": "multipart/form-data",
                              },
                        }
                  )
                  .then((response) => {
                        setTimeout(() => {
                              if (response.data.result === "success") {
                                    toast.success(response.data.message);
                                    setFirstName("");
                                    setLastName("");
                                    setGender("");
                                    setDateOfBirth("");
                                    setEmail("");
                                    setCurrentAddress("");
                                    setPhoneNumber("");
                                    setPermanentAddress("");
                                    setQualification("");
                                    setExperience("");
                                    setAboutYourself("");
                                    setResume("");
                              }
                              if (response.data.message) {
                                    if (response.data.message.first_name) {
                                          toast.error(
                                                response.data.message.first_name
                                          );
                                    }
                                    if (response.data.message.last_name) {
                                          toast.error(
                                                response.data.message.last_name
                                          );
                                    }
                                    if (response.data.message.gender) {
                                          toast.error(
                                                response.data.message.gender
                                          );
                                    }
                                    if (response.data.message.date_of_birth) {
                                          toast.error(
                                                response.data.message
                                                      .date_of_birth
                                          );
                                    }
                                    if (response.data.message.email) {
                                          toast.error(
                                                response.data.message.email
                                          );
                                    }
                                    if (response.data.message.current_address) {
                                          toast.error(
                                                response.data.message
                                                      .current_address
                                          );
                                    }
                                    if (response.data.message.phone_number) {
                                          toast.error(
                                                response.data.message
                                                      .phone_number
                                          );
                                    }
                                    if (
                                          response.data.message
                                                .permanent_address
                                    ) {
                                          toast.error(
                                                response.data.message
                                                      .permanent_address
                                          );
                                    }
                                    if (response.data.message.education) {
                                          toast.error(
                                                response.data.message.education
                                          );
                                    }
                                    if (response.data.message.about_yourself) {
                                          toast.error(
                                                response.data.message
                                                      .about_yourself
                                          );
                                    }
                                    if (response.data.message.resume) {
                                          toast.error(
                                                response.data.message.resume
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
                  {!loading && (
                        <Helmet>
                              <title>
                                    {career?.seo_title ||
                                          `Apply for ${career?.title}`}
                              </title>
                              <link
                                    rel="canonical"
                                    href={window.location.href}
                              />
                              {career.seo_description && (
                                    <meta
                                          name="description"
                                          content={career.seo_description}
                                    />
                              )}
                              {career.seo_keyword && (
                                    <meta
                                          name="keyword"
                                          content={career.seo_keyword}
                                    />
                              )}
                              <meta property="og:locale" content="en_US" />
                              <meta property="og:type" content="website" />
                              <meta
                                    property="og:title"
                                    content={career?.seo_title || career?.title}
                              />
                              <meta
                                    property="og:url"
                                    content={window.location.href}
                              />
                              {career?.seo_description && (
                                    <meta
                                          property="og:description"
                                          content={career?.seo_description}
                                    />
                              )}
                              <meta
                                    property="og:site_name"
                                    content="Future Technologies"
                              />
                              <meta
                                    name="twitter:card"
                                    content="summary_large_image"
                              />
                        </Helmet>
                  )}

                  <BreadcrumbBox
                        otherLink="/careers"
                        otherTitle="Career"
                        link={`/careers/${career.slug}`}
                        linkTitle={career.title}
                        title={`Apply for ${career.title}`}
                  />
                  <Container className="my-5">
                        <Row>
                              <Col lg={4}>
                                    <FaqWidget />
                              </Col>

                              <Col lg={8}>
                                    <CareerForm onSubmit={handleForm}>
                                          <CareerContent className="border">
                                                <Row className="g-3">
                                                      <CareerTitle title="Personal Details" />
                                                      <FormInput
                                                            title="First Name"
                                                            handleChange={
                                                                  setFirstName
                                                            }
                                                            value={firstName}
                                                      />
                                                      <FormInput
                                                            title="Last Name"
                                                            handleChange={
                                                                  setLastName
                                                            }
                                                            value={lastName}
                                                      />
                                                      <FormSelect
                                                            title="Gender"
                                                            options={options}
                                                            setData={setGender}
                                                            selected={gender}
                                                      />
                                                      <FormInput
                                                            type="date"
                                                            title="Date of Birth"
                                                            handleChange={
                                                                  setDateOfBirth
                                                            }
                                                            value={dateOfBirth}
                                                      />
                                                      <FormInput
                                                            title="Email Address"
                                                            handleChange={
                                                                  setEmail
                                                            }
                                                            value={email}
                                                      />
                                                      <FormInput
                                                            title="Phone No."
                                                            handleChange={
                                                                  setPhoneNumber
                                                            }
                                                            value={phoneNumber}
                                                      />
                                                      <CareerTitle title="Address Details" />
                                                      <FormInput
                                                            title="Current Address"
                                                            handleChange={
                                                                  setCurrentAddress
                                                            }
                                                            value={
                                                                  currentAddress
                                                            }
                                                      />
                                                      <FormInput
                                                            title="Permanent Address"
                                                            handleChange={
                                                                  setPermanentAddress
                                                            }
                                                            value={
                                                                  permanentAddress
                                                            }
                                                      />
                                                      <CareerTitle title="Education & Experince Details" />
                                                      <FormInput
                                                            title="Qualification"
                                                            handleChange={
                                                                  setQualification
                                                            }
                                                            value={
                                                                  qualification
                                                            }
                                                      />
                                                      <FormInput
                                                            title="Experience"
                                                            handleChange={
                                                                  setExperience
                                                            }
                                                            value={experience}
                                                      />
                                                      <FormFile
                                                            type="file"
                                                            handleForm={
                                                                  setResume
                                                            }
                                                            value={resume}
                                                            description="Attach your Resume in docx, doc, pdf"
                                                      />
                                                      <FormTextarea
                                                            rows={4}
                                                            handleChange={
                                                                  setAboutYourself
                                                            }
                                                            value={
                                                                  aboutYourself
                                                            }
                                                            title="About yourself!"
                                                      />
                                                      <FormButton
                                                            title="Submit"
                                                            loading={loading}
                                                      />
                                                </Row>
                                          </CareerContent>
                                    </CareerForm>
                              </Col>
                        </Row>
                  </Container>
            </>
      );
};

export default CareerApply;
