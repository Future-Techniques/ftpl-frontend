import React, { useContext, useEffect, useState } from "react";
import BreadcrumbBox from "../../components/common/BreadcrumbBox";
import { Col, Container, Row } from "react-bootstrap";
import {
      ImageAbsolute,
      ImageHolder,
      InspirationContainer,
      InspirationItem,
      InspirationTab,
      InspirationTabNav,
      Item,
      ItemIn,
      SolutionContainer,
      SolutionTitle,
      TitleHolder,
} from "./styles";
import Isotope from "isotope-layout";
import { Link } from "react-router-dom";
import axios from "axios";
import MetaContext from "../../stores/MetaContext";

const Solutions = () => {
      const isotope = React.useRef();
      const [filterKey, setFilterKey] = React.useState("*");

      const metaCtx = useContext(MetaContext);
      metaCtx.handleSlug("references");

      React.useEffect(() => {
            isotope.current = new Isotope(".filter-container", {
                  itemSelector: ".filter-item",
                  layoutMode: "fitRows",
            });
            return () => isotope.current.destroy();
      }, []);

      React.useEffect(() => {
            const iso = new Isotope(".filter-container", {
                  itemSelector: ".filter-item",
                  layoutMode: "fitRows",
            });
            filterKey === "*"
                  ? isotope.current.arrange({ filter: `*` })
                  : isotope.current.arrange({ filter: `.${filterKey}` });
            return () => {
                  iso.destroy();
            };
      }, [filterKey]);

      const handleFilterKeyChange = (key) => () => setFilterKey(key);

      const [loading, setLoading] = useState(false);
      const [references, setReferences] = useState([]);

      const loadData = async () => {
            setLoading(true);

            await axios
                  .get(`${process.env.REACT_APP_SECRET_KEY}/api/references`, {
                        headers: {
                              apikey: process.env.REACT_APP_API_KEY,
                        },
                  })
                  .then((response) => {
                        if (response.data.result === "success") {
                              setReferences(response.data.references);
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
                  <BreadcrumbBox title="References" />
                  <Container className="mt-5">
                        <Row>
                              <Col lg={12}>
                                    <SolutionContainer className="my-3 ">
                                          <SolutionTitle className="mb-3">
                                                <h2>References</h2>
                                          </SolutionTitle>
                                          <p className="">
                                                Future Techniques is dedicated
                                                to providing top-notch turnkey
                                                systems and stainless steel
                                                components, drawing on our
                                                wealth of experience from over a
                                                thousand installations globally.
                                                Our customized units are
                                                designed to meet your specific
                                                requirements, offering a
                                                comprehensive suite of services,
                                                including expert advice,
                                                meticulous planning, precise
                                                engineering, thorough
                                                supervision, and specialized
                                                training. With a commitment to
                                                excellence, we ensure flexible
                                                and efficient project
                                                implementation to cater to the
                                                diverse needs of our clients
                                                across different continents and
                                                industries.
                                          </p>
                                    </SolutionContainer>
                                    <InspirationContainer>
                                          <InspirationTab className="d-flex list-inline gap-3 mb-4">
                                                <InspirationTabNav
                                                      onClick={handleFilterKeyChange(
                                                            "*"
                                                      )}
                                                >
                                                      All
                                                </InspirationTabNav>
                                                {!loading
                                                      ? references?.length >
                                                              0 &&
                                                        references?.map(
                                                              (
                                                                    category,
                                                                    index
                                                              ) => (
                                                                    <InspirationTabNav
                                                                          onClick={handleFilterKeyChange(
                                                                                "category-" +
                                                                                      index
                                                                          )}
                                                                          key={
                                                                                index
                                                                          }
                                                                    >
                                                                          {
                                                                                category.title
                                                                          }
                                                                    </InspirationTabNav>
                                                              )
                                                        )
                                                      : null}
                                          </InspirationTab>

                                          <InspirationTab className="filter-container">
                                                <Row className="g-4">
                                                      {!loading
                                                            ? references?.length >
                                                                    0 &&
                                                              references?.map(
                                                                    (
                                                                          category,
                                                                          index
                                                                    ) =>
                                                                          category?.items?.map(
                                                                                (
                                                                                      reference,
                                                                                      key
                                                                                ) => (
                                                                                      <InspirationItem
                                                                                            className={`filter-item ${
                                                                                                  `category-` +
                                                                                                  index
                                                                                            }`}
                                                                                            lg={
                                                                                                  4
                                                                                            }
                                                                                            key={
                                                                                                  key
                                                                                            }
                                                                                      >
                                                                                            <Item>
                                                                                                  <ItemIn>
                                                                                                        <Link
                                                                                                              to={
                                                                                                                    reference.slug
                                                                                                              }
                                                                                                        >
                                                                                                              {" "}
                                                                                                        </Link>
                                                                                                        <ImageHolder>
                                                                                                              <img
                                                                                                                    src={
                                                                                                                          reference.image
                                                                                                                    }
                                                                                                                    alt=""
                                                                                                              />
                                                                                                        </ImageHolder>
                                                                                                        <ImageAbsolute
                                                                                                              backgroundImage={`url(${reference.image})`}
                                                                                                        ></ImageAbsolute>
                                                                                                        <TitleHolder>
                                                                                                              <h3>
                                                                                                                    {
                                                                                                                          reference.title
                                                                                                                    }
                                                                                                              </h3>
                                                                                                              <p>
                                                                                                                    View
                                                                                                                    More
                                                                                                                    <svg
                                                                                                                          class="fn__svg"
                                                                                                                          version="1.1"
                                                                                                                          xmlns="http://www.w3.org/2000/svg"
                                                                                                                          xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                                                                          x="0px"
                                                                                                                          y="0px"
                                                                                                                          viewBox="0 0 31.49 31.49"
                                                                                                                          xmlSpace="preserve"
                                                                                                                          fill="#fff"
                                                                                                                    >
                                                                                                                          <path d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111  C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587  c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"></path>
                                                                                                                    </svg>
                                                                                                              </p>
                                                                                                        </TitleHolder>
                                                                                                  </ItemIn>
                                                                                            </Item>
                                                                                      </InspirationItem>
                                                                                )
                                                                          )
                                                              )
                                                            : null}
                                                </Row>
                                          </InspirationTab>
                                    </InspirationContainer>
                              </Col>
                        </Row>
                  </Container>
            </>
      );
};

export default Solutions;
