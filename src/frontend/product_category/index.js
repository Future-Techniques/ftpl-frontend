import React, { useEffect, useState } from "react";
import BreadcrumbBox from "../../components/common/BreadcrumbBox";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { CategoryContainer } from "../category/styles";
import { Container, Row, Spinner } from "react-bootstrap";
import {
      ImageAbsolute,
      ImageHolder,
      InspirationItem,
      Item,
      ItemIn,
      TitleHolder,
} from "../solutions/styles";
import { Helmet } from "react-helmet";

const ProductCategoryPage = () => {
      const { categoryId } = useParams();

      const [loading, setLoading] = useState(false);
      const [products, setProducts] = useState([]);
      const [category, setCategory] = useState([]);

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(
                        `${process.env.REACT_APP_SECRET_KEY}/api/categories/${categoryId}`,
                        {
                              headers: {
                                    apikey: process.env.REACT_APP_API_KEY,
                              },
                        }
                  )
                  .then((response) => {
                        if (response.data.result === "success") {
                              setCategory(response.data.category);
                              setProducts(response.data.products);
                        }
                  })
                  .catch((error) => {
                        console.log(error.message);
                  });
            setLoading(false);
      };

      useEffect(() => {
            loadData();
      }, [categoryId]);

      return (
            <>
                  {!loading && (
                        <Helmet>
                              <title>
                                    {category?.seo_title ||
                                          `Product by ${category?.title}`}
                              </title>
                              <link
                                    rel="canonical"
                                    href={window.location.href}
                              />
                              {category.seo_description && (
                                    <meta
                                          name="description"
                                          content={category.seo_description}
                                    />
                              )}
                              {category.seo_keyword && (
                                    <meta
                                          name="keyword"
                                          content={category.seo_keyword}
                                    />
                              )}
                              <meta property="og:locale" content="en_US" />
                              <meta property="og:type" content="website" />
                              <meta
                                    property="og:title"
                                    content={
                                          category?.seo_title ||
                                          `Product by ${category?.title}`
                                    }
                              />
                              <meta
                                    property="og:url"
                                    content={window.location.href}
                              />
                              {category?.seo_description && (
                                    <meta
                                          property="og:description"
                                          content={category?.seo_description}
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

                  <BreadcrumbBox title={category?.title} />
                  <CategoryContainer>
                        <Container>
                              <Row className="g-5">
                                    {!loading ? (
                                          products.map((item, index) => (
                                                <InspirationItem
                                                      className={`filter-item ${
                                                            `category-` + index
                                                      }`}
                                                      lg={4}
                                                      key={index}
                                                >
                                                      <Item>
                                                            <ItemIn>
                                                                  <Link
                                                                        to={`${
                                                                              "/products/" +
                                                                              item?.slug
                                                                        }`}
                                                                  >
                                                                        {" "}
                                                                  </Link>
                                                                  <ImageHolder>
                                                                        <img
                                                                              src={
                                                                                    item.image
                                                                              }
                                                                              alt=""
                                                                        />
                                                                  </ImageHolder>
                                                                  <ImageAbsolute
                                                                        backgroundImage={`url(${item.image})`}
                                                                  />
                                                            </ItemIn>
                                                            <TitleHolder
                                                                  to={`${
                                                                        "/products/" +
                                                                        item?.slug
                                                                  }`}
                                                            >
                                                                  <h3>
                                                                        {
                                                                              item.title
                                                                        }
                                                                  </h3>
                                                            </TitleHolder>
                                                      </Item>
                                                </InspirationItem>
                                          ))
                                    ) : (
                                          <div className="text-center">
                                                <Spinner />
                                          </div>
                                    )}
                              </Row>
                        </Container>
                  </CategoryContainer>
            </>
      );
};

export default ProductCategoryPage;
