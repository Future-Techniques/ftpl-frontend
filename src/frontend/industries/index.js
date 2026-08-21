import React, { useContext, useEffect, useState } from "react";
import BreadcrumbBox from "../../components/common/BreadcrumbBox";
import {
      CloseButton,
      IndustriesButton,
      IndustriesCollapse,
      IndustriesContainer,
      IndustriesContent,
      IndustriesDescription,
      IndustriesHeading,
      IndustriesHeadingList,
      IndustriesImage,
      IndustriesList,
      IndustriesSection,
      IndustriesTitle,
      IndustryDescription,
} from "./styles";
import { Col, Container, ListGroup, Row, Spinner } from "react-bootstrap";
import axios from "axios";
import { CloseIcon } from "../../icons";
import MetaContext from "../../stores/MetaContext";
import { sanitizeHtml } from "../../helpers/sanitize";

const Industries = () => {
      const [open, setOpen] = useState(false);

      const [galleryCol, setGalleryCol] = useState(12);

      const additionalClassName =
            "d-flex justify-content-between align-items-center w-100 border-0 customBorder";

      const [loading, setLoading] = useState(false);
      const [industries, setIndustries] = useState([]);

      const [industry, setIndustry] = useState("");

      const metaCtx = useContext(MetaContext);
      metaCtx.handleSlug("industries");

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(`${process.env.REACT_APP_SECRET_KEY}/api/industries`, {
                        headers: {
                              apikey: process.env.REACT_APP_API_KEY,
                        },
                  })
                  .then((response) => {
                        if (response.data.result === "success") {
                              setIndustries(response.data.industries);
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

      const handleOpen = (index) => {
            setGalleryCol(8);
            setOpen(true);
            setIndustry(industries[index]);
      };

      const handleClose = () => {
            setGalleryCol(12);
            setOpen(false);
      };

      return (
            <>
                  <BreadcrumbBox title="Industries" />
                  <IndustriesSection className="py-5">
                        <Container>
                              <Row>
                                    <Col lg={galleryCol}>
                                          <Row className="g-3">
                                                {!loading ? (
                                                      industries?.length > 0 &&
                                                      industries?.map(
                                                            (
                                                                  industry,
                                                                  index
                                                            ) => (
                                                                  <Col
                                                                        lg={4}
                                                                        key={
                                                                              index
                                                                        }
                                                                  >
                                                                        <IndustriesContainer
                                                                              className="customBorder"
                                                                              onClick={() =>
                                                                                    handleOpen(
                                                                                          index
                                                                                    )
                                                                              }
                                                                        >
                                                                              <IndustriesDescription className="customBorder">
                                                                                    <IndustriesImage className="customBorder">
                                                                                          <img
                                                                                                src={
                                                                                                      industry.image
                                                                                                }
                                                                                                alt={
                                                                                                      industry.title
                                                                                                }
                                                                                                className="img-fluid w-100 customBorder"
                                                                                          />
                                                                                    </IndustriesImage>
                                                                                    <IndustriesButton
                                                                                          aria-controls={`subcategory-collapse-${index}`}
                                                                                          aria-expanded={
                                                                                                open ===
                                                                                                index
                                                                                          }
                                                                                          variant="btn"
                                                                                          className={`${additionalClassName}  ${
                                                                                                open ===
                                                                                                index
                                                                                                      ? "buttonRotate"
                                                                                                      : ""
                                                                                          }`}
                                                                                    >
                                                                                          <IndustriesTitle className="cutomBorder">
                                                                                                {
                                                                                                      industry.title
                                                                                                }
                                                                                          </IndustriesTitle>
                                                                                    </IndustriesButton>
                                                                              </IndustriesDescription>
                                                                        </IndustriesContainer>
                                                                  </Col>
                                                            )
                                                      )
                                                ) : (
                                                      <div className="text-center">
                                                            <Spinner />
                                                      </div>
                                                )}
                                          </Row>
                                    </Col>
                                    {open && (
                                          <Col lg={4}>
                                                <IndustriesContainer>
                                                      <IndustriesHeadingList>
                                                            <ListGroup as="ul">
                                                                  <ListGroup.Item>
                                                                        <IndustriesHeading>
                                                                              <h2>
                                                                                    {
                                                                                          industry?.title
                                                                                    }
                                                                              </h2>
                                                                              <CloseButton
                                                                                    onClick={() =>
                                                                                          handleClose()
                                                                                    }
                                                                              >
                                                                                    <CloseIcon />
                                                                              </CloseButton>
                                                                        </IndustriesHeading>
                                                                  </ListGroup.Item>
                                                                  <IndustryDescription
                                                                        backgroundImage={
                                                                              industry?.image
                                                                        }
                                                                  >
                                                                        <IndustriesContent>
                                                                              <IndustriesCollapse className="mt-2">
                                                                                    <div>
                                                                                          <IndustriesList>
                                                                                                <div
                                                                                                      dangerouslySetInnerHTML={{
                                                                                                            __html: sanitizeHtml(industry?.description),
                                                                                                      }}
                                                                                                ></div>
                                                                                          </IndustriesList>
                                                                                    </div>
                                                                              </IndustriesCollapse>
                                                                        </IndustriesContent>
                                                                  </IndustryDescription>
                                                            </ListGroup>
                                                      </IndustriesHeadingList>
                                                </IndustriesContainer>
                                          </Col>
                                    )}
                              </Row>
                        </Container>
                  </IndustriesSection>
            </>
      );
};

export default Industries;
