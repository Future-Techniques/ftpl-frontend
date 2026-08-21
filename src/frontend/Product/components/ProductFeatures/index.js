import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ProductFeatureContainer, ProductFeatureContent } from './styles';
import { sanitizeHtml } from '../../../../helpers/sanitize';

const ProductFeatures = ({ product }) => {
      return (
            <>
                  <ProductFeatureContainer>
                        <Container>
                              <Row className="g-5">
                                    {product?.benefit_image && (
                                          <Col lg={4}>
                                                <img
                                                      src={
                                                            product?.benefit_image
                                                      }
                                                      alt=""
                                                      className="img-fluid"
                                                />
                                          </Col>
                                    )}
                                    <Col lg={6}>
                                          <ProductFeatureContent>
                                                <h3>Features and Benefits</h3>
                                                <div
                                                      dangerouslySetInnerHTML={{
                                                            __html: sanitizeHtml(
                                                                  product?.benefit_description
                                                            )
                                                      }}
                                                ></div>
                                          </ProductFeatureContent>
                                    </Col>
                              </Row>
                        </Container>
                  </ProductFeatureContainer>
            </>
      );
};

export default ProductFeatures;
