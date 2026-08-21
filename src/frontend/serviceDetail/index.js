import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import BreadcrumbBox from "../../components/common/BreadcrumbBox";
import ServicesList from "../services/components/ServicesList";
import ServiceListEstimate from "../services/components/ServiceListEstimate";
import {
      ServiceDetailContainer,
      ServiceDetailContent,
      ServiceDetailDescription,
      ServiceDetailImage,
      ServiceDetailTitle,
} from "./styles";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { sanitizeHtml } from "../../helpers/sanitize";

const ServiceDetail = () => {
      const { serviceId } = useParams();
      const [loading, setLoading] = useState(false);
      const [service, setService] = useState([]);
      const [services, setServices] = useState([]);

      const loadData = async () => {
            setLoading(true);

            await axios
                  .get(
                        `${process.env.REACT_APP_SECRET_KEY}/api/services/${serviceId}`,
                        {
                              headers: {
                                    apikey: `${process.env.REACT_APP_API_KEY}`,
                              },
                        }
                  )
                  .then((response) => {
                        if (response.data.result === "success") {
                              setService(response.data.service);
                        }
                  })
                  .catch((error) => {
                        console.log(error.message);
                  });

            await axios
                  .get(`${process.env.REACT_APP_SECRET_KEY}/api/services`, {
                        headers: {
                              apikey: `${process.env.REACT_APP_API_KEY}`,
                        },
                  })
                  .then((response) => {
                        if (response.data.result === "success") {
                              setServices(response.data.services);
                        }
                  })
                  .catch((error) => {
                        console.log(error.message);
                  });

            setLoading(false);
      };

      useEffect(() => {
            loadData();
      }, [serviceId]);

      return (
            <>
                  {!loading && (
                        <Helmet>
                              <title>
                                    {service?.seo_title || `${service?.title}`}
                              </title>
                              <link
                                    rel="canonical"
                                    href={window.location.href}
                              />
                              {service.seo_description && (
                                    <meta
                                          name="description"
                                          content={service.seo_description}
                                    />
                              )}
                              {service.seo_keyword && (
                                    <meta
                                          name="keyword"
                                          content={service.seo_keyword}
                                    />
                              )}
                              <meta property="og:locale" content="en_US" />
                              <meta property="og:type" content="website" />
                              <meta
                                    property="og:title"
                                    content={
                                          service?.seo_title ||
                                          `${service?.title}`
                                    }
                              />
                              <meta
                                    property="og:url"
                                    content={window.location.href}
                              />
                              {service?.seo_description && (
                                    <meta
                                          property="og:description"
                                          content={service?.seo_description}
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
                        link="/services"
                        linkTitle="Services"
                        title={!loading ? service.title : ""}
                  />
                  <Container className="py-5">
                        {!loading ? (
                              <>
                                    <Row className="py-5 g-5">
                                          <Col lg={9}>
                                                <ServiceDetailContainer>
                                                      <ServiceDetailImage className="mb-4">
                                                            <img
                                                                  src={
                                                                        service.image
                                                                  }
                                                                  alt=""
                                                                  className="img-fluid rounded-2"
                                                            />
                                                      </ServiceDetailImage>
                                                      <ServiceDetailContent>
                                                            <ServiceDetailTitle className="mb-3">
                                                                  {
                                                                        service.title
                                                                  }
                                                            </ServiceDetailTitle>

                                                            <ServiceDetailDescription className="mb-4">
                                                                  <div
                                                                        dangerouslySetInnerHTML={{
                                                                              __html: sanitizeHtml(service.description),
                                                                        }}
                                                                  ></div>
                                                            </ServiceDetailDescription>
                                                      </ServiceDetailContent>
                                                </ServiceDetailContainer>
                                          </Col>
                                          <Col lg={3}>
                                                <ServicesList
                                                      services={services}
                                                />
                                                <ServiceListEstimate />
                                          </Col>
                                    </Row>
                              </>
                        ) : (
                              <>
                                    <div className="text-center">
                                          <Spinner />
                                    </div>
                              </>
                        )}
                  </Container>
            </>
      );
};

export default ServiceDetail;
