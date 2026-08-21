import React, { useContext, useEffect, useState } from "react";
import BreadcrumbBox from "../../components/common/BreadcrumbBox";
import { Col, Container, Row } from "react-bootstrap";
import FaqWidget from "../../components/frontend/FaqWidget";
import CareerItem from "../../components/frontend/CareerItem";
import axios from "axios";
import MetaContext from "../../stores/MetaContext";

const CareerPage = () => {
      const [loading, setLoading] = useState(false);
      const [careers, setCareers] = useState([]);

      const metaCtx = useContext(MetaContext);
      metaCtx.handleSlug("career");

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(`${process.env.REACT_APP_SECRET_KEY}/api/careers`, {
                        headers: {
                              apikey: process.env.REACT_APP_API_KEY,
                        },
                  })
                  .then((response) => {
                        if (response.data.result === "success") {
                              setCareers(response.data.careers);
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
                  <BreadcrumbBox title="Careers" />
                  <Container className="my-5">
                        <Row>
                              <Col lg={4}>
                                    <FaqWidget />
                              </Col>
                              <Col lg={8}>
                                    <Row>
                                          <Col lg={6}>
                                                <CareerItem
                                                      careers={careers}
                                                      loading={loading}
                                                />
                                          </Col>
                                    </Row>
                              </Col>
                        </Row>
                  </Container>
            </>
      );
};

export default CareerPage;
