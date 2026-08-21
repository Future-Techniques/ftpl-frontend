import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import BreadcrumbBox from "../../components/common/BreadcrumbBox";
import {
      BlogDetailContent,
      BlogDetailDescription,
      BlogDetailImage,
      BlogDetailInfo,
      BlogDetailTitle,
      BlogWidget,
      BlogWidgetBlog,
      BlogWidgetList,
      BlogWidgetTitle,
} from "./styles";
import BlogWidgetItem from "../../components/blogs/BlogWidgetItem";
import WidgetBlogItem from "../../components/blogs/WidgetBlogItem";
import { WidgetBox } from "../faq/styles";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import { sanitizeHtml } from "../../helpers/sanitize";

const BlogDetail = () => {
      const [loading, setLoading] = useState(false);
      const [blog, setBlog] = useState([]);
      const [categories, setCategories] = useState([]);
      const [blogs, setBlogs] = useState([]);

      const { blogId } = useParams();

      const loadData = async () => {
            setLoading(true);

            await axios
                  .get(
                        `${process.env.REACT_APP_SECRET_KEY}/api/blogs/${blogId}`,
                        {
                              headers: {
                                    apikey: process.env.REACT_APP_API_KEY,
                              },
                        }
                  )
                  .then((response) => {
                        if (response.data.result === "success") {
                              setBlog(response.data.blog);
                              setBlogs(response.data.blogs);
                              setCategories(response.data.categories);
                        }
                  })
                  .catch((error) => {
                        console.log(error.message);
                  });

            setLoading(false);
      };

      useEffect(() => {
            loadData();
      }, [blogId]);

      return (
            <>
                  {!loading && (
                        <Helmet>
                              <title>{blog?.seo_title || blog?.title}</title>
                              <link
                                    rel="canonical"
                                    href={window.location.href}
                              />
                              {blog.seo_description && (
                                    <meta
                                          name="description"
                                          content={blog.seo_description}
                                    />
                              )}
                              {blog.seo_keyword && (
                                    <meta
                                          name="keyword"
                                          content={blog.seo_keyword}
                                    />
                              )}
                              <meta property="og:locale" content="en_US" />
                              <meta property="og:type" content="website" />
                              <meta
                                    property="og:title"
                                    content={blog?.seo_title || blog?.title}
                              />
                              <meta
                                    property="og:url"
                                    content={window.location.href}
                              />
                              {blog?.seo_description && (
                                    <meta
                                          property="og:description"
                                          content={blog?.seo_description}
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
                        title={blog.title}
                        linkTitle="Blogs"
                  />
                  <Container className="my-5">
                        {!loading ? (
                              <>
                                    <Row>
                                          <Col lg={8}>
                                                <BlogDetailContent>
                                                      <BlogDetailImage>
                                                            <img
                                                                  src={
                                                                        blog.image
                                                                  }
                                                                  alt={
                                                                        blog.title
                                                                  }
                                                            />
                                                      </BlogDetailImage>

                                                      <BlogDetailInfo>
                                                            <ul>
                                                                  <li>
                                                                        <span>
                                                                              {
                                                                                    blog.category
                                                                              }
                                                                        </span>
                                                                  </li>
                                                                  <li className="blog__author">
                                                                        <span>
                                                                              {
                                                                                    blog.date
                                                                              }
                                                                        </span>
                                                                  </li>
                                                                  <li>
                                                                        <span>
                                                                              Admin
                                                                        </span>
                                                                  </li>
                                                            </ul>
                                                      </BlogDetailInfo>

                                                      <BlogDetailTitle>
                                                            <h2>
                                                                  {blog.title}
                                                            </h2>
                                                      </BlogDetailTitle>

                                                      <BlogDetailDescription>
                                                            <div
                                                                  dangerouslySetInnerHTML={{
                                                                        __html: sanitizeHtml(blog.description),
                                                                  }}
                                                            ></div>
                                                      </BlogDetailDescription>
                                                </BlogDetailContent>
                                          </Col>
                                          <Col lg={4}>
                                                <WidgetBox>
                                                      <BlogWidget className="mb-4">
                                                            <BlogWidgetTitle>
                                                                  <h3>
                                                                        Categories
                                                                  </h3>
                                                            </BlogWidgetTitle>
                                                            <BlogWidgetList>
                                                                  <ul>
                                                                        {!loading
                                                                              ? categories?.length >
                                                                                      0 &&
                                                                                categories?.map(
                                                                                      (
                                                                                            item,
                                                                                            index
                                                                                      ) => (
                                                                                            <BlogWidgetItem
                                                                                                  title={
                                                                                                        item.title
                                                                                                  }
                                                                                                  blogs={
                                                                                                        item.blogs
                                                                                                  }
                                                                                                  slug={
                                                                                                        item.slug
                                                                                                  }
                                                                                            />
                                                                                      )
                                                                                )
                                                                              : null}
                                                                  </ul>
                                                            </BlogWidgetList>
                                                      </BlogWidget>
                                                      <BlogWidget>
                                                            <BlogWidgetTitle className="mb-4">
                                                                  <h3>
                                                                        Recent
                                                                        Post
                                                                  </h3>
                                                            </BlogWidgetTitle>
                                                            <BlogWidgetBlog>
                                                                  {!loading
                                                                        ? blogs?.length
                                                                              ? blogs?.map(
                                                                                      (
                                                                                            item,
                                                                                            index
                                                                                      ) => (
                                                                                            <WidgetBlogItem
                                                                                                  title={
                                                                                                        item.title
                                                                                                  }
                                                                                                  image={
                                                                                                        item.image
                                                                                                  }
                                                                                                  date={
                                                                                                        item.date
                                                                                                  }
                                                                                                  slug={
                                                                                                        item.slug
                                                                                                  }
                                                                                            />
                                                                                      )
                                                                                )
                                                                              : null
                                                                        : null}
                                                            </BlogWidgetBlog>
                                                      </BlogWidget>
                                                </WidgetBox>
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

export default BlogDetail;
