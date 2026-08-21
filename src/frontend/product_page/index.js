import React, { useContext, useEffect, useState } from "react";
import { CategoryContainer } from "./styles";
import { Container, Row, Spinner } from "react-bootstrap";
import BreadcrumbBox from "../../components/common/BreadcrumbBox";
import {
      ImageAbsolute,
      ImageHolder,
      InspirationItem,
      Item,
      ItemIn,
      TitleHolder,
} from "../solutions/styles";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import MetaContext from "../../stores/MetaContext";

const ProductPage = () => {
      const { categoryId } = useParams();

      const [loading, setLoading] = useState(false);
      const [categories, setCategories] = useState([]);

      const metaCtx = useContext(MetaContext);
      metaCtx.handleSlug("products");

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
            setLoading(false);
      };

      useEffect(() => {
            loadData();
      }, [categoryId]);

      return (
            <>
                  <BreadcrumbBox title="Our Products" />
                  <CategoryContainer>
                        <Container>
                              <Row className="g-5">
                                    {!loading ? (
                                          categories.map((item, index) => (
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
                                                                              item
                                                                                    ?.subCategory
                                                                                    ?.length >
                                                                              0
                                                                                    ? "/category/" +
                                                                                      item?.slug
                                                                                    : "/category/" +
                                                                                      item?.slug +
                                                                                      "/products"
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
                                                                        item
                                                                              ?.subCategory
                                                                              ?.length >
                                                                        0
                                                                              ? "/category/" +
                                                                                item?.slug
                                                                              : "/category/" +
                                                                                item?.slug +
                                                                                "/products"
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

export default ProductPage;
