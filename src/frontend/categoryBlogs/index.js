import React, { useEffect, useState } from "react";
import BreadcrumbBox from "../../components/common/BreadcrumbBox";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import BlogItemBox from "../../components/home/BlogSector/BlogItemBox";
import { Helmet } from "react-helmet";

const CategoryBlogPage = () => {
      const { categoryId } = useParams();
      const [loading, setLoading] = useState(false);
      const [category, setCategory] = useState([]);
      const [blogs, setBlogs] = useState([]);

      const loadData = async () => {
            setLoading(true);

            await axios
                  .get(
                        `${process.env.REACT_APP_SECRET_KEY}/api/blogs/categories/${categoryId}`,
                        {
                              headers: {
                                    apikey: process.env.REACT_APP_API_KEY,
                              },
                        }
                  )
                  .then((response) => {
                        if (response.data.result === "success") {
                              setBlogs(response.data.blogs);
                              setCategory(response.data.category);
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
                                          `Blog by ${category?.title}`}
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
                                          `Blog by ${category?.title}`
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

                  <BreadcrumbBox
                        link="/blogs"
                        linkTitle="Blogs"
                        title={`Blog by: ${category.title}`}
                  />

                  <Container className="my-5">
                        <Row className="g-5">
                              {!loading ? (
                                    blogs?.length > 0 &&
                                    blogs.map((blog, index) => (
                                          <Col lg={4} key={index}>
                                                <BlogItemBox blog={blog} />
                                          </Col>
                                    ))
                              ) : (
                                    <>
                                          <div className="text-center">
                                                <Spinner />
                                          </div>
                                    </>
                              )}
                        </Row>
                  </Container>
            </>
      );
};

export default CategoryBlogPage;
