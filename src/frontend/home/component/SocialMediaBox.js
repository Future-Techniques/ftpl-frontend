import React from "react";
import { AssociateSection } from "../styles";
import { Container } from "react-bootstrap";
import { facebookLists, linkedInLists } from "../../../data/associateList";
import Marquee from "react-fast-marquee";
import { SocialMediaImage } from "./style";

const SocialMediaBox = ({ status }) => {
      let items;
      if (status === "LinkedIn") {
            items = linkedInLists;
      } else {
            items = facebookLists;
      }

      return (
            <>
                  <AssociateSection className="pb-3">
                        <Container className="table-responsive">
                              <Marquee>
                                    {items?.length &&
                                          items.map((item, index) => (
                                                <SocialMediaImage
                                                      to={item?.link}
                                                      target="_blank"
                                                      key={index}
                                                >
                                                      <img
                                                            src={item?.image}
                                                            alt={item?.title}
                                                      />
                                                </SocialMediaImage>
                                          ))}
                              </Marquee>
                        </Container>
                  </AssociateSection>
            </>
      );
};

export default SocialMediaBox;
