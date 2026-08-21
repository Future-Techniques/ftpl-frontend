import React, { useEffect, useState } from "react";
import {
      DropdownContent,
      DropDownList,
      HeaderContainer,
      HeaderContent,
      HeaderInfo,
      HeaderInfoContent,
      HeaderInfoIcon,
      HeaderLogo,
      HeaderNav,
      HeaderScroll,
      HeaderTop,
      HeaderTopContainer,
      MenuContainer,
} from "./styles";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import MenuItem from "../../../components/layouts/header/MenuItem";
import SocialMedia from "../../../components/common/SocialMedia";
import { MenuLink, MobileMenu } from "../../../components/layouts/header";
import axios from "axios";

const Header = () => {
      const [isHeaderVisible, setIsHeaderVisible] = useState(false);
      useEffect(() => {
            window.addEventListener("scroll", handleScroll);
            return () => {
                  window.removeEventListener("scroll", handleScroll);
            };
      }, []);
      const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 100) {
                  setIsHeaderVisible(true);
            } else setIsHeaderVisible(false);
      };

      const [loading, setLoading] = useState(false);
      const [categories, setCategories] = useState([]);

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
      }, []);

      return (
            <>
                  <HeaderContainer>
                        <HeaderTop>
                              <Container>
                                    <HeaderTopContainer>
                                          <HeaderInfo>
                                                <HeaderInfoContent>
                                                      <HeaderInfoIcon>
                                                            <img
                                                                  src="/images/svg/phone.svg"
                                                                  alt="FutureTek phone icon"
                                                            />
                                                      </HeaderInfoIcon>
                                                      <Link to="tel:+97715911605">
                                                            +977 1-5911605
                                                      </Link>
                                                </HeaderInfoContent>
                                                <HeaderInfoContent>
                                                      <HeaderInfoIcon>
                                                            <img
                                                                  src="/images/svg/mail.svg"
                                                                  alt="FutureTek mail icon"
                                                            />
                                                      </HeaderInfoIcon>
                                                      <Link to="mailto:info@ftpl.com.np">
                                                            info@ftpl.com.np
                                                      </Link>
                                                </HeaderInfoContent>
                                          </HeaderInfo>

                                          <SocialMedia />
                                    </HeaderTopContainer>
                              </Container>
                        </HeaderTop>
                        <Container>
                              <HeaderContent>
                                    <HeaderLogo>
                                          <Link to="/">
                                                <img
                                                      src="/images/png/logo/FT purple@2x 3.png"
                                                      alt="Future Techniques logo image"
                                                />
                                          </Link>
                                    </HeaderLogo>
                                    <HeaderNav>
                                          <MenuContainer>
                                                <MenuItem
                                                      link="/"
                                                      title="Home"
                                                />
                                                <MenuItem
                                                      title="About"
                                                      link="#"
                                                >
                                                      <DropdownContent>
                                                            <ul class="ps-0">
                                                                  <li>
                                                                        <Link
                                                                              to="/about"
                                                                              class="text-decoration-none"
                                                                        >
                                                                              About
                                                                              Company
                                                                        </Link>
                                                                  </li>
                                                                  <li>
                                                                        <Link
                                                                              to="/associates"
                                                                              class="text-decoration-none"
                                                                        >
                                                                              Our
                                                                              Associates
                                                                        </Link>
                                                                  </li>
                                                                  <li>
                                                                        <Link
                                                                              to="/sister-concerns"
                                                                              class="text-decoration-none"
                                                                        >
                                                                              Sister
                                                                              Concerns
                                                                        </Link>
                                                                  </li>
                                                            </ul>
                                                      </DropdownContent>
                                                </MenuItem>
                                                <MenuItem
                                                      title="Services"
                                                      link="services"
                                                />
                                                <MenuItem
                                                      title="References"
                                                      link="reference"
                                                />
                                                <MenuItem
                                                      link="/products"
                                                      title="Our Products"
                                                      position={true}
                                                      classes="dropdown__container"
                                                >
                                                      <div className="dropdown__content">
                                                            <DropDownList className="">
                                                                  {!loading ? (
                                                                        categories.length >
                                                                        0 ? (
                                                                              <div className="define">
                                                                                    <ul>
                                                                                          {categories?.map(
                                                                                                (
                                                                                                      item,
                                                                                                      index
                                                                                                ) => (
                                                                                                      <li
                                                                                                            key={
                                                                                                                  index
                                                                                                            }
                                                                                                      >
                                                                                                            <MenuLink
                                                                                                                  title={
                                                                                                                        item?.title
                                                                                                                  }
                                                                                                                  slug={
                                                                                                                        item?.slug
                                                                                                                  }
                                                                                                                  cat={
                                                                                                                        item
                                                                                                                  }
                                                                                                            />
                                                                                                            {item
                                                                                                                  ?.subCategory
                                                                                                                  ?.length >
                                                                                                                  0 && (
                                                                                                                  <ul>
                                                                                                                        {item?.subCategory?.map(
                                                                                                                              (
                                                                                                                                    subItem,
                                                                                                                                    key
                                                                                                                              ) => (
                                                                                                                                    <li
                                                                                                                                          key={
                                                                                                                                                key
                                                                                                                                          }
                                                                                                                                    >
                                                                                                                                          <MenuLink
                                                                                                                                                title={
                                                                                                                                                      subItem?.title
                                                                                                                                                }
                                                                                                                                                subCategory={
                                                                                                                                                      true
                                                                                                                                                }
                                                                                                                                                slug={
                                                                                                                                                      subItem?.slug
                                                                                                                                                }
                                                                                                                                                cat={
                                                                                                                                                      subItem
                                                                                                                                                }
                                                                                                                                          />
                                                                                                                                    </li>
                                                                                                                              )
                                                                                                                        )}
                                                                                                                  </ul>
                                                                                                            )}
                                                                                                      </li>
                                                                                                )
                                                                                          )}
                                                                                    </ul>
                                                                              </div>
                                                                        ) : null
                                                                  ) : null}
                                                            </DropDownList>
                                                      </div>
                                                </MenuItem>
                                                <MenuItem
                                                      title="Industries"
                                                      link="/industries"
                                                />
                                                <MenuItem
                                                      title="Downloads"
                                                      link="/downloads"
                                                />
                                                <MenuItem
                                                      title="Contact"
                                                      link="contact-us"
                                                />
                                          </MenuContainer>
                                          <MobileMenu />
                                    </HeaderNav>
                              </HeaderContent>
                        </Container>
                  </HeaderContainer>
                  <HeaderScroll isVisible={isHeaderVisible}>
                        <Container>
                              <HeaderContent>
                                    <HeaderLogo>
                                          <Link to="/">
                                                <img
                                                      src="/images/png/logo/FT purple@2x 3.png"
                                                      alt="Future Techniques logo image"
                                                />
                                          </Link>
                                    </HeaderLogo>
                                    <HeaderNav>
                                          <MenuContainer>
                                                <MenuItem
                                                      link="/"
                                                      title="Home"
                                                />
                                                <MenuItem
                                                      title="About"
                                                      link="about"
                                                >
                                                      <DropdownContent>
                                                            <ul class="ps-0">
                                                                  <li>
                                                                        <Link
                                                                              to="/about"
                                                                              class="text-decoration-none"
                                                                        >
                                                                              About
                                                                              Company
                                                                        </Link>
                                                                  </li>
                                                                  <li>
                                                                        <Link
                                                                              to="/associates"
                                                                              class="text-decoration-none"
                                                                        >
                                                                              Our
                                                                              Associates
                                                                        </Link>
                                                                  </li>
                                                                  <li>
                                                                        <Link
                                                                              to="/sister-concerns"
                                                                              class="text-decoration-none"
                                                                        >
                                                                              Sister
                                                                              Concerns
                                                                        </Link>
                                                                  </li>
                                                            </ul>
                                                      </DropdownContent>
                                                </MenuItem>
                                                <MenuItem
                                                      title="Services"
                                                      link="services"
                                                />
                                                <MenuItem
                                                      title="References"
                                                      link="reference"
                                                />
                                                <MenuItem
                                                      link="/products"
                                                      title="Our Products"
                                                      position={true}
                                                      classes="dropdown__container"
                                                >
                                                      <div className="dropdown__content">
                                                            <DropDownList className="">
                                                                  {!loading ? (
                                                                        categories.length >
                                                                        0 ? (
                                                                              <div className="define">
                                                                                    <ul>
                                                                                          {categories?.map(
                                                                                                (
                                                                                                      item,
                                                                                                      index
                                                                                                ) => (
                                                                                                      <li
                                                                                                            key={
                                                                                                                  index
                                                                                                            }
                                                                                                      >
                                                                                                            <MenuLink
                                                                                                                  title={
                                                                                                                        item?.title
                                                                                                                  }
                                                                                                                  slug={
                                                                                                                        item?.slug
                                                                                                                  }
                                                                                                                  cat={
                                                                                                                        item
                                                                                                                  }
                                                                                                            />
                                                                                                            {item
                                                                                                                  ?.subCategory
                                                                                                                  ?.length >
                                                                                                                  0 && (
                                                                                                                  <ul>
                                                                                                                        {item?.subCategory?.map(
                                                                                                                              (
                                                                                                                                    subItem,
                                                                                                                                    key
                                                                                                                              ) => (
                                                                                                                                    <li
                                                                                                                                          key={
                                                                                                                                                key
                                                                                                                                          }
                                                                                                                                    >
                                                                                                                                          <MenuLink
                                                                                                                                                title={
                                                                                                                                                      subItem?.title
                                                                                                                                                }
                                                                                                                                                subCategory={
                                                                                                                                                      true
                                                                                                                                                }
                                                                                                                                                slug={
                                                                                                                                                      subItem?.slug
                                                                                                                                                }
                                                                                                                                                cat={
                                                                                                                                                      subItem
                                                                                                                                                }
                                                                                                                                          />
                                                                                                                                    </li>
                                                                                                                              )
                                                                                                                        )}
                                                                                                                  </ul>
                                                                                                            )}
                                                                                                      </li>
                                                                                                )
                                                                                          )}
                                                                                    </ul>
                                                                              </div>
                                                                        ) : null
                                                                  ) : null}
                                                            </DropDownList>
                                                      </div>
                                                </MenuItem>
                                                <MenuItem
                                                      title="Industries"
                                                      link="/industries"
                                                />
                                                <MenuItem
                                                      title="Downloads"
                                                      link="downloads"
                                                />
                                                <MenuItem
                                                      title="Contact"
                                                      link="contact-us"
                                                />
                                          </MenuContainer>
                                          <MobileMenu />
                                    </HeaderNav>
                              </HeaderContent>
                        </Container>
                  </HeaderScroll>
            </>
      );
};

export default Header;
