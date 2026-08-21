import { Form } from "react-bootstrap";
import styled from "styled-components";

export const EnquiryContainer = styled.div`
      position: fixed;
      z-index: 99999;
      font-family: Poppins;
      top: 50%;
      left: -52px;
      display: flex;
      cursor: pointer;
      align-items: center;
      -webkit-transform: translateY(-50%);
      -moz-transform: translateY(-50%);
      transform: translateY(-50%);
      -webkit-transition: 1s;
      -moz-transition: 1s;
      transition: 1s;
      cursor: pointer;
      @media screen and (max-width: 600px) {
            display: none;
      }
`;
export const EnquiryButton = styled.div`
      background-color: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.white};
      -webkit-transform: rotate(90deg);
      -moz-transform: rotate(90deg);
      transform: rotate(90deg);
      display: block;

      padding: 18px 10px 10px;
      width: 144px;
      height: 53px;
      ${"" /* line-height: 1.2; */}
      -webkit-transform-origin: 51px 51px 0;
      -moz-transform-origin: 51px 51px 0;
      transform-origin: 51px 51px 0;
      box-shadow: -3px 0 6px rgba(0, 0, 0, 0.16);

      font-size: 14px;
      border-radius: 4px 4px 0 0;
      padding: 0.4rem 1.5rem;
      transform: rotate(90deg);
      span {
            font-size: 19px;
            font-variation-settings: "FILL" 0, "wght" 200, "GRAD" 0, "opsz" 24;
      }
`;

export const EnquiryCard = styled.div`
      background-color: rgb(255, 255, 255);
      max-height: 400px;
      width: 400px;
      transition: 0.5s ease;
      border-radius: 10px;
      position: absolute;
      top: -70px;
      left: 102px;
      z-index: -1;
      padding: 10px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.16);
      transform-origin: 0 100% 0;
      transform: rotateY(90deg);
      &.active {
            transform: rotateY(0) !important;
      }
      @media (max-width: 767px) {
            width: 250px;
      }
`;

export const EnquiryWrapper = styled.div`
      margin: 1rem;
      position: relative;
`;
export const EnquiryHeader = styled.div`
      color: ${(props) => props.theme.primary};
      h4 {
            font-size: 16px;
      }
`;
export const EnquiryForm = styled(Form)`
      .form-control {
            margin-bottom: 14px;
            width: 100%;

            border-radius: 8px;
            font-size: 12px;
            padding: 0.5rem;
            &:focus {
                  box-shadow: none;
                  border-color: ${(props) => props.theme.primary};
            }
      }
      .btn {
            padding: 0.4rem 0.8rem;
            background-color: ${(props) => props.theme.primary};
            font-size: 14px;
            color: #fff;
            text-transform: capitalize;
            transition: 0.3s ease;
            border-radius: 20px;
            width: 100%;
            font-weight: 500;
            &:hover {
                  background-color: #16161b !important;
            }

            .spinner-border {
                  width: 1rem;
                  height: 1rem;
                  border-width: 1px;
            }
      }
`;
