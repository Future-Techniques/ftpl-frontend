import React, { useEffect, useState } from "react";
import { AssociateSection, AssociateWrapper } from "../styles";
import { Container } from "react-bootstrap";
import AssociateHeading from "../../../components/home/AssociateSector/AssociateHeading";
import AssociateItem from "../../../components/home/AssociateSector/AssociateItem";
import axios from "axios";

const AssociateBox = ({ limit }) => {
      const [loading, setLoading] = useState(false);
      const [associates, setAssociates] = useState([]);

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(
                        `${process.env.REACT_APP_SECRET_KEY}/api/associates/list`,
                        {
                              headers: {
                                    apikey: process.env.REACT_APP_API_KEY,
                              },
                        }
                  )
                  .then((response) => {
                        if (response.data.result === "success") {
                              setAssociates(response.data.associates);
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
                  <AssociateSection>
                        <Container className="table-responsive">
                              {!loading
                                    ? associates?.length &&
                                      associates
                                            ?.slice(0, limit || 1)
                                            .map((item, index) => (
                                                  <div
                                                        key={index}
                                                        className={
                                                              index === 0
                                                                    ? "mb-5 pb-5"
                                                                    : ""
                                                        }
                                                  >
                                                        <AssociateHeading
                                                              title={`${item?.title}:`}
                                                        />
                                                        <AssociateWrapper
                                                              key={index}
                                                        >
                                                              {item?.items?.map(
                                                                    (
                                                                          associate,
                                                                          key
                                                                    ) => (
                                                                          <AssociateItem
                                                                                title={
                                                                                      associate?.title
                                                                                }
                                                                                image={
                                                                                      associate?.image
                                                                                }
                                                                                key={
                                                                                      key
                                                                                }
                                                                                link={
                                                                                      associate?.link
                                                                                }
                                                                          />
                                                                    )
                                                              )}
                                                        </AssociateWrapper>
                                                  </div>
                                            ))
                                    : null}
                        </Container>
                  </AssociateSection>
            </>
      );
};

export default AssociateBox;
