import { Button, Collapse, ListGroupItem } from "react-bootstrap";
import styled from "styled-components";

export const IndustriesSection = styled.div`
      background: #f8f9f9;
      .customBorder {
            border-radius: 10px;
      }
`;

export const IndustriesButton = styled(Button)`
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 100;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 100%;
      padding: 0px 30px;
      span {
            color: ${(props) => props.theme.white};
      }
`;
export const IndustriesCollapse = styled.div``;

export const IndustryDescription = styled(ListGroupItem)`
      background: url(${(props) => props.backgroundImage});
      background-repeat: no-repeat;
      position: relative;
      background-size: cover;

      &::after {
            content: "";
            position: absolute;
            background: #0000008c;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
      }
`;

export const IndustriesContent = styled.div`
      ${IndustriesButton} {
            span {
                  transition: 0.2s transform ease-in;
                  color: ${(props) => props.theme.white};
            }
      }

      .buttonRotate {
            transition: 0.2s transform ease-in;
            color: ${(props) => props.theme.primary};
            span {
                  transform: rotate(90deg) !important;
                  transition: 0.2s transform ease-in;
            }
      }
      .show {
            ${IndustriesButton} {
                  span {
                        transform: rotate(90deg);
                  }
            }
      }
`;
export const IndustriesImage = styled.div`
      position: relative;
      height: 215px;

      &:after {
            content: "";
            position: absolute;
            background: #0000008c;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            border-radius: 10px;
      }

      img {
            height: 100%;
            width: 100%;
            object-fit: cover;
      }
`;
export const IndustriesTitle = styled.h3`
      font-size: 16px;
      margin-bottom: 0px;
      color: ${(props) => props.theme.white};
`;
export const IndustriesList = styled.div`
      color: white !important;
      position: relative;
      z-index: 99999;

      ul {
            li {
                  color: white !important;
                  margin-bottom: 7px;
                  font-size: 15px;
                  color: #555;
            }
      }
`;

export const IndustriesDescription = styled.div`
      position: relative;
`;

export const IndustriesHeading = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;

      h2 {
            font-size: 18px;
            margin: 0;
      }
`;

export const CloseButton = styled.div`
      span {
            cursor: pointer;
      }
`;

export const IndustriesHeadingList = styled.div`
      ul {
            .list-group-item {
                  &:first-child {
                        background: ${(props) => props.theme.primary};
                        color: ${(props) => props.theme.white};
                        h2 {
                              text-transform: uppercase;
                              font-size: 20px;
                              padding: 6px 12px;
                        }
                  }
            }
      }
`;
export const IndustriesContainer = styled.div`
      position: sticky;
      top: 8rem;

      .buttonRotate {
            transition: 0.2s transform ease-in;
            color: ${(props) => props.theme.primary};
            span {
                  transform: rotate(90deg) !important;
                  transition: 0.2s transform ease-in;
            }
      }

      h3 {
            font-size: 16px;
      }

      ${IndustriesTitle} {
            ul li {
                  h2 {
                        color: #212121;
                  }
            }
      }
`;

export const IndustriesListButton = styled(Button)`
      ${IndustriesTitle} {
            color: #212121;
      }
      span {
            transition: 0.2s transform ease-in;
            color: ${(props) => props.theme.primary};
      }

      .show {
            ${IndustriesButton} {
                  span {
                        transform: rotate(90deg);
                  }
            }
      }
`;
