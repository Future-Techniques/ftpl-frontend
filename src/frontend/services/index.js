import React, { useContext, useEffect, useState } from "react";
import BreadcrumbBox from "../../components/common/BreadcrumbBox";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import ServiceItem from "../../components/services/ServicesItem";
import ServicesList from "./components/ServicesList";
import ServiceListEstimate from "./components/ServiceListEstimate";
import axios from "axios";
import MetaContext from "../../stores/MetaContext";

const ServicePage = () => {
      const [loading, setLoading] = useState(false);
      const [services, setServices] = useState([]);

      const metaCtx = useContext(MetaContext);
      metaCtx.handleSlug("services");

      const loadData = async () => {
            setLoading(true);

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
      }, []);

      return (
            <>
                  <BreadcrumbBox title="Our Services" />
                  <Container className="py-5">
                        <Row className="py-5 g-5">
                              <Col lg={9}>
                                    {!loading ? (
                                          services.map((service, index) => (
                                                <ServiceItem
                                                      title={service.title}
                                                      description={
                                                            service.summary
                                                      }
                                                      image={service.image}
                                                      serviceLink={`/services/${service.slug}`}
                                                      key={index}
                                                />
                                          ))
                                    ) : (
                                          <>
                                                <div className="text-center">
                                                      <Spinner />
                                                </div>
                                          </>
                                    )}
                              </Col>
                              <Col lg={3}>
                                    <ServiceListEstimate />
                              </Col>
                        </Row>
                  </Container>
            </>
      );
};

export default ServicePage;
