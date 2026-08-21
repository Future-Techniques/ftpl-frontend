import React, { useEffect, useState } from "react";
import {
      FooterBody,
      FooterContactList,
      FooterContainer,
      FooterContent,
      FooterCredential,
      FooterCredentialContainer,
      FooterHeading,
      FooterItem,
      FooterRow,
} from "./styles";
import FooterMenuItem from "./FooterMenuItem";
import { Link } from "react-router-dom";
import MailIcon from "../../../icons/MailIcon";
import PhoneIcon from "../../../icons/PhoneIcon";
import SubscriberForm from "./SubscriberForm";
import FooterServices from "./FooterServices";

const Footer = () => {
      const [isVariableTrue, setVariable] = useState(true);

      useEffect(() => {
            const handleResize = () => {
                  setVariable(window.innerWidth > 600);
            };

            // Initial check on mount
            handleResize();

            // Event listener for window resize
            window.addEventListener("resize", handleResize);

            // Cleanup the event listener on component unmount
            return () => {
                  window.removeEventListener("resize", handleResize);
            };
      }, []);

      const currentYear = new Date().getFullYear();

      return (
            <>
                  <FooterContainer>
                        <FooterBody>
                              <FooterRow
                                    className={isVariableTrue ? "g-5" : ""}
                              >
                                    <FooterItem lg={4}>
                                          <FooterHeading className="mb-3">
                                                <h4>
                                                      <img
                                                            src="/images/png/logo/FT white@2x.png"
                                                            alt="FutureTek Official logo"
                                                      /> <br />
                                                      
                                                </h4>
                                          </FooterHeading>
                                          <FooterContent marginbottom={true}>
                                                <h4 className="text-white">Future Techniques Pvt. Ltd.</h4>
                                                <p>
                                                      We are the leaders in the
                                                      building construction and
                                                      factories. We’re around
                                                      over the worldwide. We
                                                      never give up on the
                                                      challenges
                                                </p>
                                                <FooterContactList>
                                                      <Link to="mailto:info@ftpl.com.np">
                                                            <MailIcon />
                                                            <span>
                                                                  info@ftpl.com.np
                                                            </span>
                                                      </Link>
                                                </FooterContactList>
                                                <FooterContactList>
                                                      <Link to="tel:15911605">
                                                            <PhoneIcon />
                                                            <span>
                                                                  +977 1-5911605
                                                            </span>
                                                      </Link>
                                                </FooterContactList>
                                          </FooterContent>
                                    </FooterItem>
                                    <FooterItem>
                                          <FooterHeading>
                                                <h4>Quick Links</h4>
                                          </FooterHeading>
                                          <FooterContent>
                                                <ul>
                                                      <FooterMenuItem
                                                            link="faqs"
                                                            title="FAQs"
                                                      />
                                                      <FooterMenuItem
                                                            link="blogs"
                                                            title="Blogs and News"
                                                      />
                                                      <FooterMenuItem
                                                            link="privacy-policy"
                                                            title="Privacy Policy"
                                                      />
                                                      <FooterMenuItem
                                                            link="contact-us"
                                                            title="Contact Us"
                                                      />
                                                      <FooterMenuItem
                                                            link="careers"
                                                            title="Career"
                                                      />
                                                </ul>
                                          </FooterContent>
                                    </FooterItem>
                                    <FooterServices />
                                    <FooterItem lg={3}>
                                          <SubscriberForm />
                                    </FooterItem>
                              </FooterRow>
                        </FooterBody>
                        <FooterCredential>
                              <FooterCredentialContainer>
                                    <div className="footer__copyright">
                                          Copyright © {currentYear} by{" "}
                                          <a href="/">
                                                Future Techniques Pvt. Ltd.
                                          </a>
                                    </div>
                              </FooterCredentialContainer>
                        </FooterCredential>
                  </FooterContainer>
            </>
      );
};

export default Footer;
