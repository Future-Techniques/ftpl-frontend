import styled from "styled-components";
import { MenuItemContainer } from "../../../components/layouts/header/MenuItem/styles";

export const HeaderContent = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
`;
export const HeaderLogo = styled.div`
      img {
            width: 150px;
            height: auto;
            @media screen and (max-width: 600px) {
                  width: 120px !important;
            }
      }
`;

export const DropdownContent = styled.div`
      position: absolute;
      top: 113px;
      left: -17px;
      z-index: 100000;
      background-color: #ffffff;
      width: 320px;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      opacity: 0;
      visibility: hidden;
      transition: 0.3s all linear;

      ul li {
            list-style: none;
            border-bottom: 1px dashed ${(props) => props.theme.primary};

            &:last-child {
                  border-bottom: 0;
            }

            a {
                  font-size: 15px;
                  color: ${(props) => props.theme.primary};
                  padding: 10px 5px 10px 20px;
                  display: block;
                  transition: all 0.2s ease-in-out;
            }
            &:hover {
                  background-color: ${(props) => props.theme.primary};

                  a {
                        color: ${(props) => props.theme.white};
                        padding-left: 25px;
                        transition: all 0.2s ease-in-out;
                  }
            }
      }
`;

export const DropDownList = styled.div`
      margin-bottom: 0;
      list-style: none;
      padding: 0;
      position: relative;

      .define {
            ul {
                  padding: 0;
                  grid-gap: 0;
                  display: flex;
                  flex-wrap: wrap;
                  margin: 0;
                  margin-bottom: 1rem;

                  li {
                        display: inline-block;
                        margin-right: 1.5rem;
                        min-width: 30%;

                        & > a {
                              margin-bottom: 10px;
                              text-decoration: none;

                              &:hover {
                                    color: ${(props) =>
                                          props.theme.secondary} !important;
                              }
                        }

                        ul {
                              li {
                                    min-width: 100%;

                                    a {
                                          font-size: 14px;
                                          text-align: left;
                                          font-weight: 500;
                                          margin-bottom: 0;
                                          text-transform: capitalize;
                                          text-decoration: none;

                                          &:hover {
                                                transform: translate(10px, 0px);
                                                color: ${(props) =>
                                                      props.theme
                                                            .secondary} !important;
                                          }
                                    }

                                    ul {
                                          display: grid;
                                          padding: 0;
                                          margin: 0;
                                          width: max-content;

                                          li {
                                                width: max-content;
                                                margin-left: -5px;

                                                a {
                                                      font-weight: 400;
                                                      width: max-content;

                                                      &:hover {
                                                            transform: translate(
                                                                  10px,
                                                                  0px
                                                            );
                                                            color: ${(props) =>
                                                                  props.theme
                                                                        .secondary} !important;
                                                      }
                                                }
                                          }
                                    }
                              }
                        }
                  }
            }
      }
`;

export const HeaderNav = styled.nav`
      position: relative;
      /* dropdown menu css */
      ${MenuItemContainer} {
            &:hover {
                  ${DropdownContent} {
                        visibility: visible;
                        opacity: 1;
                        transform: translateY(-30px);
                        transition: 0.3s all linear;
                  }
            }
      }
`;

export const MenuContainer = styled.ul`
      display: inline-block;
      margin-bottom: 0;
      li {
            a {
                  color: ${({ isVisible }) => (isVisible ? "#000" : "#000")};
                  padding: 30px;
            }
            &:last-child {
                  a {
                        padding-right: 0px !important;
                  }
            }
      }
`;

export const HeaderTop = styled.div`
      background-color: ${(props) => props.theme.primary};
      padding: 11px 0px;

      @media only screen and (max-width: 568px) {
            display: none;
      }
`;

export const HeaderTopContainer = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
`;

export const HeaderInfoIcon = styled.div`
      img {
            width: 17px;
            height: 17px;
      }
`;

export const HeaderInfo = styled.div`
      display: flex;
      gap: 1.5rem;
      align-items: center;
`;

export const HeaderInfoContent = styled.div`
      font-weight: 300;
      color: ${(props) => props.theme.white};
      font-size: 15px;
      gap: 0.5rem;
      display: flex;
      align-items: center;

      a {
            color: ${(props) => props.theme.white};
            text-decoration: none;

            &:hover {
                  color: ${(props) => props.theme.secondary};
            }
      }
`;

export const HeaderLinks = styled.div`
      display: flex;
      align-items: center;
      gap: 1rem;

      @media only screen and (max-width: 568px) {
            margin-bottom: 30px;
      }
`;

export const HeaderLinkItem = styled.div`
      a {
            height: 19px;
            width: 19px;
            display: block;
            svg {
                  margin-top: -8px;
                  height: 15.4px;
                  width: 19px;
                  fill: #777;
            }

            i {
                  color: rgba(255, 255, 255, 0.4);
                  font-size: 19px;
            }
      }
`;
export const MobileMenuButton = styled.div`
      display: none;
`;
export const HeaderContainer = styled.header`
      position: relative;
      top: 0;
      left: 0;
      z-index: 999;
      width: 100%;
      transition: 0.3s all linear;
      /* overflow: hidden; */
      ${"" /* responsive code */}

      @media screen and (max-width:1200px) {
            ${MenuContainer} {
                  display: none;
            }
            ${MobileMenuButton} {
                  display: block;
            }
            ${HeaderContent} {
                  padding: 20px 0px;
            }
            ${HeaderLogo} {
                  a {
                        img {
                              width: 150px;
                        }
                  }
            }
      }
`;

export const HeaderScroll = styled.div`
      position: fixed;
      top: ${({ isVisible }) => (isVisible ? "0" : "-100px")};
      left: 0;
      z-index: 99999;
      width: 100%;
      transition: top 0.3s ease-in-out;
      background: #fff;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      @media screen and (max-width: 1200px) {
            ${MenuContainer} {
                  display: none;
            }
            ${MobileMenuButton} {
                  display: block;
            }
            ${HeaderLogo} {
                  a {
                        img {
                              width: 150px;
                        }
                  }
            }
      }
      @media screen and (max-width: 600px) {
            display: none;
      }
`;
