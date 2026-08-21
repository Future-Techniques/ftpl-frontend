import React, { useContext, useEffect, useState } from "react";
import BreadcrumbBox from "../../components/common/BreadcrumbBox";
import {
      Col,
      Container,
      FormLabel,
      FormSelect,
      Row,
      Spinner,
} from "react-bootstrap";
import { DownLoadLink, DownloadContent } from "./styles";
import axios from "axios";
import MetaContext from "../../stores/MetaContext";

const Download = () => {
      const [loading, setLoading] = useState(false);
      const [downloads, setDownloads] = useState([]);
      const [categories, setCategories] = useState([]);
      const [products, setProducts] = useState([]);
      const [category, setCategory] = useState("");
      const [product, setProduct] = useState("");
      const [models, setModels] = useState([]);

      const metaCtx = useContext(MetaContext);
      metaCtx.handleSlug("downloads");

      const loadData = async () => {
            setLoading(true);

            await axios
                  .get(`${process.env.REACT_APP_SECRET_KEY}/api/categories`, {
                        headers: {
                              apikey: process.env.REACT_APP_API_KEY,
                        },
                  })
                  .then((response) => {
                        if (response.data.result === "success") {
                              setCategories(response.data.categories);
                        }
                  })
                  .catch((error) => {
                        console.log(error.message);
                  });

            await axios
                  .get(`${process.env.REACT_APP_SECRET_KEY}/api/downloads`, {
                        headers: {
                              apikey: process.env.REACT_APP_API_KEY,
                        },
                  })
                  .then((response) => {
                        if (response.data.result === "success") {
                              setDownloads(response.data.downloads);
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

      const filterProduct = async () => {
            setLoading(true);
            await axios
                  .get(
                        `${process.env.REACT_APP_SECRET_KEY}/api/categories/${category}`,
                        {
                              headers: {
                                    apikey: process.env.REACT_APP_API_KEY,
                              },
                        }
                  )
                  .then((response) => {
                        if (response.data.result === "success") {
                              setProducts(response.data.products);
                        }
                  })
                  .catch((error) => {
                        console.log(error.message);
                  });
            setLoading(false);
      };

      useEffect(() => {
            filterProduct();
      }, [category]);

      return (
            <>
                  <BreadcrumbBox title="Downloads" />
                  <Container className="my-5">
                        <Row className="mb-4">
                              <Col lg={12}>
                                    <FormLabel>Filter by</FormLabel>
                              </Col>
                              <Col lg={4}>
                                    <FormSelect
                                          onChange={(event) =>
                                                setCategory(event.target.value)
                                          }
                                    >
                                          <option value="">
                                                Select Category
                                          </option>
                                          {!loading ? (
                                                categories?.map(
                                                      (item, index) => (
                                                            <option
                                                                  value={
                                                                        item?.slug
                                                                  }
                                                                  key={index}
                                                            >
                                                                  {item?.title}
                                                            </option>
                                                      )
                                                )
                                          ) : (
                                                <option>Loading</option>
                                          )}
                                    </FormSelect>
                              </Col>
                              {products?.length > 0 && (
                                    <Col lg={4}>
                                          <FormSelect
                                                onChange={(event) =>
                                                      setProduct(
                                                            event.target.value
                                                      )
                                                }
                                          >
                                                <option value="">
                                                      Select Product
                                                </option>
                                                {!loading ? (
                                                      products?.map(
                                                            (item, index) => (
                                                                  <option
                                                                        value={
                                                                              item?.slug
                                                                        }
                                                                        key={
                                                                              index
                                                                        }
                                                                        onChange={() =>
                                                                              filterProduct(
                                                                                    item
                                                                              )
                                                                        }
                                                                  >
                                                                        {
                                                                              item?.title
                                                                        }
                                                                  </option>
                                                            )
                                                      )
                                                ) : (
                                                      <option>Loading</option>
                                                )}
                                          </FormSelect>
                                    </Col>
                              )}
                              {models?.length > 0 && (
                                    <Col lg={4}>
                                          <FormSelect>
                                                <option value="">
                                                      Select Models
                                                </option>
                                                {models?.map((item, index) => (
                                                      <option
                                                            value={item?.slug}
                                                            key={index}
                                                      >
                                                            {item?.title}
                                                      </option>
                                                ))}
                                          </FormSelect>
                                    </Col>
                              )}
                        </Row>
                        <Row>
                              {!loading ? (
                                    downloads?.length > 0 &&
                                    downloads?.map((item, index) => (
                                          <Col lg={4}>
                                                <DownloadContent className="border">
                                                      <DownLoadLink key={index}>
                                                            <a
                                                                  href={
                                                                        item.image
                                                                  }
                                                                  download={
                                                                        true
                                                                  }
                                                                  target="_blank"
                                                                  rel="noopener noreferrer"
                                                            >
                                                                  {item.title}
                                                            </a>
                                                            <a
                                                                  href={
                                                                        item.image
                                                                  }
                                                                  download
                                                                  target="_blank"
                                                            >
                                                                  <span className="material-symbols-outlined">
                                                                        download
                                                                  </span>
                                                            </a>
                                                      </DownLoadLink>
                                                </DownloadContent>
                                          </Col>
                                    ))
                              ) : (
                                    <div className="text-center">
                                          <Spinner />
                                    </div>
                              )}
                        </Row>
                  </Container>
            </>
      );
};

export default Download;
