import React, { useEffect, useState } from "react";
import { FeatureSection } from "../styles";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { FeatureItem } from "../../../components/home";
import axios from "axios";

const FeatureBox = () => {
      const [loading, setLoading] = useState(false);
      const [features, setFeatures] = useState([]);

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(`${process.env.REACT_APP_SECRET_KEY}/api/features`, {
                        headers: {
                              apikey: process.env.REACT_APP_API_KEY,
                        },
                  })
                  .then((response) => {
                        if (response.data.result === "success") {
                              setFeatures(response.data.features);
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
                  <FeatureSection>
                        <Container>
                              <Row className="g-5">
                                    {!loading ? (
                                          features?.map((item, index) => (
                                                <Col lg={3} key={index}>
                                                      <FeatureItem
                                                            item={item}
                                                      />
                                                </Col>
                                          ))
                                    ) : (
                                          <div className="text-center">
                                                <Spinner />
                                          </div>
                                    )}
                              </Row>
                        </Container>
                  </FeatureSection>
            </>
      );
};

export default FeatureBox;
