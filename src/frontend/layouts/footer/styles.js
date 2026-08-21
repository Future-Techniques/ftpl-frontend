import { Col, Container, Row } from "react-bootstrap";
import { styled } from "styled-components";

export const FooterContainer = styled.footer`
      background-color: ${(props) => props.theme.primary};
      @media screen and (max-width: 600px) {
      }
`;

export const FooterRow = styled(Row)`
   @media screen and (max-width: 600px) {
      margin-right: 0;
      margin-left: 0;f
   }
`;
export const FooterBody = styled(Container)`
      padding: 70px 0px 50px;
`;

export const FooterItem = styled(Col)``;

export const FooterHeading = styled.div`
      margin-bottom: 2rem;

      h4 {
            color: ${(props) => props.theme.white};
            font-size: 20px;

            img {
                  width: 150px;
            }
      }
`;

export const FooterContent = styled.div`
      margin-bottom: ${(props) => props.marginbottom && "1.5rem"};
      p {
            color: #c1c1c1;
            text-align: justify;
            font-size: 14px;
            font-family: "Nunito Sans", sans-serif;
      }

      ul {
            padding: 0;

            li {
                  list-style-type: none;
                  margin-bottom: 10px;

                  a {
                        color: #d9d9d9;
                        font-family: "Rajdhani", sans-serif;
                        font-size: 14px;
                        transition: all 0.3s ease-in-out;

                        &:hover {
                              padding-left: 10px;
                              color: ${(props) => props.theme.secondary};
                        }
                  }
            }
      }
      form {
            margin-top: 30px;
      }
      .form__group {
            background: #fff;
            padding: 2px 15px;
            .form-control {
                  border: none;
                  background-color: transparent;
                  font-size: 13px;
                  &:focus {
                        box-shadow: none;
                  }
            }
            .btn-primary {
                  background: transparent;
                  color: #000;
                  border: none;
                  font-size: 22px;
            }
      }

      .spinner-border {
            border-width: 1.5px;
            width: 1rem;
            height: 1rem;
      }
`;

export const FooterContact = styled.div`
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;

      span {
            &:first-child {
                  color: ${(props) => props.theme.white};
            }

            color: #a5a5a5;
      }
`;

export const FooterCredential = styled.div`
      font-size: 14px;
      font-family: "Rajdhani", sans-serif;
`;

export const FooterCredentialContainer = styled(Container)`
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 1rem 0;
      border-top: 1px solid #ababab;
      color: ${(props) => props.theme.white};

      a {
            color: ${(props) => props.theme.secondary};
            text-decoration: none;
      }
`;

export const FooterContactList = styled.div`
      a {
            text-decoration: none;
            color: ${(props) => props.theme.white};
            font-family: "Rajdhani", sans-serif;
            display: flex;
            align-items: center;
            margin-bottom: 7px;
            ${"" /* gap: 5px; */}
            span {
                  padding-left: 10px;
            }

            &:hover {
                  color: ${(props) => props.theme.secondary};
            }
            svg {
                  fill: ${(props) => props.theme.white};
                  width: 17px;
                  height: 17px;
            }
      }
      .material-symbols-outlined {
            font-variation-settings: "FILL" 0, "wght" 200, "GRAD" 0, "opsz" 24;
      }
`;
