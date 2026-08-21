import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import BlogItemBox from "../../components/home/BlogSector/BlogItemBox";
import BreadcrumbBox from "../../components/common/BreadcrumbBox";
import axios from "axios";
import MetaContext from "../../stores/MetaContext";

const BlogPage = () => {
      const [loading, setLoading] = useState(false);
      const [blogs, setBlogs] = useState([]);

      const metaCtx = useContext(MetaContext);
      metaCtx.handleSlug("blogs");

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(`${process.env.REACT_APP_SECRET_KEY}/api/blogs`, {
                        headers: {
                              apikey: process.env.REACT_APP_API_KEY,
                        },
                  })
                  .then((response) => {
                        if (response.data.result === "success") {
                              setBlogs(response.data.blogs);
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
                  <BreadcrumbBox title="Blogs & News" />
                  <Container className="my-5">
                        <Row className="g-4">
                              {blogs?.length > 0 ? (
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

export default BlogPage;
