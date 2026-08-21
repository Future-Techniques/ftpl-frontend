import React, { useEffect, useState } from "react";
import BreadcrumbBox from "../../components/common/BreadcrumbBox";
import { Col, Container, Row } from "react-bootstrap";
import FaqWidget from "../../components/frontend/FaqWidget";
import { CareerContent } from "./styles";
import { WidgetButton } from "../faq/styles";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { sanitizeHtml } from "../../helpers/sanitize";

const CareerDetail = () => {
      const { careerId } = useParams();
      const [loading, setLoading] = useState(false);
      const [career, setCareer] = useState([]);

      const loadData = async () => {
            setLoading(true);
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
            setLoading(false);
      };

      useEffect(() => {
            loadData();
      }, []);

      return (
            <>
                  {!loading && (
                        <Helmet>
                              <title>
                                    {career?.seo_title || career?.title}
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
                        title={career.title}
                        link="/careers"
                        linkTitle="Career"
                  />

                  <Container className="my-5">
                        <Row>
                              <Col lg={4}>
                                    <FaqWidget />
                              </Col>
                              <Col lg={8}>
                                    <CareerContent className="border">
                                          <table className="table">
                                                <tbody>
                                                      <tr>
                                                            <td colspan="3">
                                                                  <strong>
                                                                        Basic
                                                                        Information
                                                                  </strong>
                                                            </td>
                                                      </tr>
                                                      <tr>
                                                            <td className="w-25">
                                                                  Title
                                                            </td>
                                                            <td className="w-3">
                                                                  :
                                                            </td>
                                                            <td className="w-64">
                                                                  {career.title}
                                                            </td>
                                                      </tr>
                                                      <tr>
                                                            <td className="w-25">
                                                                  Job Type
                                                            </td>
                                                            <td className="w-3">
                                                                  :
                                                            </td>
                                                            <td className="w-64">
                                                                  {career.type}
                                                            </td>
                                                      </tr>
                                                      <tr>
                                                            <td className="w-25">
                                                                  No. of Vacancy
                                                            </td>
                                                            <td className="w-3">
                                                                  :
                                                            </td>
                                                            <td className="w-64">
                                                                  {
                                                                        career.no_of_vacancy
                                                                  }
                                                            </td>
                                                      </tr>
                                                      <tr>
                                                            <td className="w-25">
                                                                  Salary
                                                            </td>
                                                            <td className="w-3">
                                                                  :
                                                            </td>
                                                            <td className="w-64">
                                                                  {
                                                                        career.salary
                                                                  }
                                                            </td>
                                                      </tr>
                                                      <tr>
                                                            <td className="w-25">
                                                                  Qualification
                                                            </td>
                                                            <td className="w-3">
                                                                  :
                                                            </td>
                                                            <td className="w-64">
                                                                  {
                                                                        career.education
                                                                  }
                                                            </td>
                                                      </tr>
                                                      <tr>
                                                            <td className="w-25">
                                                                  Experience
                                                            </td>
                                                            <td className="w-3">
                                                                  :
                                                            </td>
                                                            <td className="w-64">
                                                                  {
                                                                        career.experience
                                                                  }
                                                            </td>
                                                      </tr>
                                                      <tr>
                                                            <td className="w-25">
                                                                  Deadline
                                                            </td>
                                                            <td className="w-3">
                                                                  :
                                                            </td>
                                                            <td className="w-64">
                                                                  {
                                                                        career.deadline
                                                                  }
                                                            </td>
                                                      </tr>
                                                </tbody>
                                          </table>
                                          <table className="table  mt-4 table">
                                                <tbody>
                                                      <tr>
                                                            <td colspan="3">
                                                                  <strong>
                                                                        Other
                                                                        Details
                                                                  </strong>
                                                            </td>
                                                      </tr>
                                                      <tr>
                                                            <td colspan="3">
                                                                  <div
                                                                        dangerouslySetInnerHTML={{
                                                                              __html: sanitizeHtml(career.description),
                                                                        }}
                                                                  ></div>
                                                            </td>
                                                      </tr>
                                                </tbody>
                                          </table>
                                          <WidgetButton
                                                color={(props) =>
                                                      props.theme.primary
                                                }
                                                hover={(props) =>
                                                      props.theme.secondary
                                                }
                                                to={`/careers/${career.slug}/apply`}
                                          >
                                                Submit
                                          </WidgetButton>
                                    </CareerContent>
                              </Col>
                        </Row>
                  </Container>
            </>
      );
};

export default CareerDetail;
