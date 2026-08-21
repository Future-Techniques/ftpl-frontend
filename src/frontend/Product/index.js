import React, { useEffect, useState } from "react";

import BreadcrumbBox from "../../components/common/BreadcrumbBox";
import {
      ProductContainer,
      ProductContent,
      ProductImage,
      ProductTitle,
} from "./styles";
import { Col, Container, Row } from "react-bootstrap";
import ProductApplication from "./components/ProductApplication";
import ProductFeatures from "./components/ProductFeatures";
import ProductAdditional from "./components/ProductAdditional";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ServiceButton } from "../home/styles";
import { sanitizeHtml } from "../../helpers/sanitize";

const Product = () => {
      const { productId } = useParams();
      const [loading, setLoading] = useState(false);
      const [product, setProduct] = useState([]);

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(
                        `${process.env.REACT_APP_SECRET_KEY}/api/products/${productId}`,
                        {
                              headers: {
                                    apikey: process.env.REACT_APP_API_KEY,
                              },
                        }
                  )
                  .then((response) => {
                        if (response.data.result === "success") {
                              setProduct(response.data.product);
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
                                    {product?.seo_title || `${product?.title}`}
                              </title>
                              <link
                                    rel="canonical"
                                    href={window.location.href}
                              />
                              {product.seo_description && (
                                    <meta
                                          name="description"
                                          content={product.seo_description}
                                    />
                              )}
                              {product.seo_keyword && (
                                    <meta
                                          name="keyword"
                                          content={product.seo_keyword}
                                    />
                              )}
                              <meta property="og:locale" content="en_US" />
                              <meta property="og:type" content="website" />
                              <meta
                                    property="og:title"
                                    content={
                                          product?.seo_title ||
                                          `${product?.title}`
                                    }
                              />
                              <meta
                                    property="og:url"
                                    content={window.location.href}
                              />
                              {product?.seo_description && (
                                    <meta
                                          property="og:description"
                                          content={product?.seo_description}
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

                  <BreadcrumbBox title={product.title} />
                  <Container className="mt-5">
                        <Row className="g-5">
                              <Col lg={6}>
                                    <ProductContainer>
                                          <ProductTitle className="">
                                                <h2>{product.title}</h2>
                                          </ProductTitle>
                                          <ProductContent className="">
                                                <p
                                                      dangerouslySetInnerHTML={{
                                                            __html: sanitizeHtml(product.description),
                                                      }}
                                                ></p>
                                                <h4>
                                                      GET THE PRODUCT PROFILE
                                                      (PDF)
                                                </h4>
                                                {product.catalogue && (
                                                      <ServiceButton>
                                                            <Link
                                                                  to={
                                                                        product.catalogue
                                                                  }
                                                                  download={
                                                                        true
                                                                  }
                                                            >
                                                                  Download Pdf
                                                                  <span className="material-symbols-outlined"></span>
                                                            </Link>
                                                      </ServiceButton>
                                                )}
                                          </ProductContent>
                                    </ProductContainer>
                              </Col>
                              <Col lg={6}>
                                    <ProductImage>
                                          <img
                                                src={product.image}
                                                alt={product.title}
                                                className="img-fluid"
                                          />
                                    </ProductImage>
                              </Col>
                        </Row>
                  </Container>
                  <ProductApplication />
                  <ProductFeatures product={product} />
                  <ProductAdditional />
            </>
      );
};

export default Product;
