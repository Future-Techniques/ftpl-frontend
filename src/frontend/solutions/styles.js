import { Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const SolutionContainer = styled.div`
      p {
            color: #555;
            font-size: 15px;
            text-align: justify;
      }
`;
export const SolutionTitle = styled.div`
      h2 {
            font-size: 28px;
            font-weight: 600;
      }
`;
export const SolutionsListHeading = styled.div``;
export const SolutionsListContent = styled.div``;

export const SolutionsListContainer = styled.div`
      position: relative;
      margin-bottom: 50px;
      overflow: hidden;
      background-color: ${(props) => props.theme.primary};
      border-radius: 5px;
      ${SolutionsListHeading} {
            width: 100%;
            padding: 22px 31px 11px;
            background-color: rgba(255, 255, 255, 0.1);
            position: relative;
            margin-bottom: 12px;
            color: #fff;
            h3 {
                  font-size: 17px;
            }
      }
      ${SolutionsListContent} {
            padding: 25px 30px;

            li {
                  margin: 0 0 19px;
                  list-style-type: none;
                  a {
                        color: ${(props) => props.theme.white};
                        font-size: 15px;
                        &:hover {
                              color: ${(props) => props.theme.primary};
                        }
                  }
            }
      }
`;

export const InspirationContainer = styled(Container)`
      padding: 20px 0px 20px 0px;
`;
export const InspirationTab = styled.ul`
      padding-left: 0px;
      padding-top: 10px;
`;
export const InspirationTabNav = styled.li`
      width: 150px;
      background: ${(props) => props.theme.primary};
      padding: 10px 0px;
      color: ${(props) => props.theme.white};
      display: flex;
      justify-content: center;
      font-size: 15px;
      border-radius: 0px 0px 0px 0px;
      transition: background 0.3s ease-in-out;
      &:hover {
            cursor: pointer;
            background: ${(props) => props.theme.secondary};
            transition: background 0.3s ease-in-out;
      }
`;
export const InspirationItemImage = styled.div`
      overflow: hidden;

      margin-bottom: 10px;
`;

export const InspirationItem = styled(Col)`
      transition: transform 0.3s ease-in-out;
      a {
            text-decoration: none;
      }
      h4 {
            font-size: 15px;
            color: #212121;
      }
      img {
            border-radius: 0px 0px 0px 0px;

            object-fit: cover;
            width: 100%;
            transform: scale(1);
            transition: transform 0.3s ease-in-out;
      }
      &:hover {
            img {
                  transform: scale(1.1);
                  transition: transform 0.3s ease-in-out;
            }
      }
`;
// solution detail css
export const SolutionDetailContainer = styled.div`
      padding: 70px 0px;
`;
export const SolutionDetailSlider = styled.div``;
export const SolutionDetailItem = styled.div``;
export const SolutionDetailTitle = styled.h2``;
export const SolutionDetailDesc = styled.p`
      text-align: justify;
`;
export const PackageSliderContainer = styled.div`
      padding: 0px 0px 20px;
      img {
            height: 450px;
      }
`;
export const PackageSliderSlide = styled(SwiperSlide)`
      img {
            border-radius: 10px;
            width: 100%;
      }
`;

export const ImageRounded = css`
      border-radius: 10px;
      width: 100%;
`;
export const PackageSliderThumb = styled(SwiperSlide)`
      height: 100%;
      img {
            width: 100%;
            height: 100%;
      }
`;

export const PackageSliderWrapper = styled(Swiper)`
      margin-bottom: 20px;
`;
export const PackageSliderWrapperThumb = styled(Swiper)`
      img {
            ${ImageRounded}
            height: 150px;
      }
`;

export const ItemIn = styled.div`
      width: 100%;
      float: left;
      clear: both;
      position: relative;
      border: 1px solid #ccc;
      border-radius: 10px;

      a {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            z-index: 25;
      }
`;
export const ImageHolder = styled.div`
      width: 100%;
      float: left;
      clear: both;
      position: relative;
      border-radius: 10px;
      overflow: hidden;
      background-color: white;

      img {
            position: relative;
            z-index: -5;
            opacity: 0;
            min-width: 100%;
            min-height: 270px;
      }
`;
export const ImageAbsolute = styled.div`
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 5;
      background-image: ${(props) => props.backgroundImage};
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50%;
      border-radius: 10px;
`;
export const TitleHolder = styled(Link)`
      width: 95%;
      float: left;
      clear: both;
      z-index: 10;
      padding: 20px 20px 0px;
      bottom: 0;
      background-color: ${(props) => props.theme.secondary};
      z-index: -1;
      border-radius: 0 0 5px 5px;
      margin-top: -10px;
      color: ${(props) => props.theme.white};
      transition: all 0.3s ease-in-out;

      h3 {
            padding: 0;
            font-size: 20px;
            letter-spacing: 0;
            font-weight: 300;
            margin: 0 0 10px;
      }

      &:hover {
            color: ${(props) => props.theme.primary};
      }
`;
export const Item = styled.div`
      width: 100%;
      float: left;
      clear: both;
      position: relative;
      border-radius: 10px;
      overflow: clip;
      &:hover {
            ${ImageHolder} {
                  &:after {
                        background-color: rgba(15, 15, 22, 0.9);
                  }
            }
            a {
                  &:after {
                        height: 20px;
                  }
                  &:before {
                        width: 20px;
                  }
            }
      }
      @media (max-width: 768px) {
            ${TitleHolder} {
                  padding: 24px 20px 16px;
            }
      }
`;
