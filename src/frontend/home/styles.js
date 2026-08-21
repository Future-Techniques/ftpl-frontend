import styled, { css } from "styled-components";
import Swiper from "swiper";
import { IndustryItemContatiner } from "../../components/home/IndustryItem/styles";
import { Col } from "react-bootstrap";

export const RightContainer = css``;

export const BackgroundCss = css`
      background-size: cover;
      background-position: center;
`;
export const BannerContainer = styled.div`
      position: relative;
      ${"" /* height: calc(100vh - 90px); */}
`;
export const BannerSliderContainer = styled.div``;

export const BannerContainerContent = styled.div`
      display: flex;
      align-items: center;
      height: 100%;
`;
export const BannerTop = styled.div`
      .swiper {
            height: calc(100vh - 128px);
      }
      @media screen and (max-width: 600px) {
            .swiper {
                  height: 180px;
            }
            img {
                  height: 100%;
                  width: 100%;
            }
      }

      img {
            height: 100% ${"" /* object-fit: contain; */};
      }
`;

export const BannerBottom = styled.div`
      margin-top: -90px;
      @media screen and (max-width: 600px) {
            margin-top: -60px;
      }
      .swiper .swiper-slide {
            background: #000000bf;
            opacity: 1;
            border-right: 1px solid #fff;
            &:last-child {
                  border-right: none;
            }
      }
      .mySwiper .swiper-slide-thumb-active {
            opacity: 1;
            background: #574b66b0;
      }
`;
export const BannerContent = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      padding: 20px 40px;
      @media screen and (max-width: 600px) {
            padding: 10px;
      }
      width: 100%;
      img {
            width: 2.5rem;
            height: 2.5rem;
            @media screen and (max-width: 600px) {
                  width: 30px;
                  height: 30px;
            }
      }
      h5 {
            margin-bottom: 0px;
            color: #fff;
            @media screen and (max-width: 600px) {
                  font-size: 14px;
            }
      }
`;

export const BannerTitle = styled.div`
      h1 {
            font-size: 50px;
            font-weight: 700;
            margin-bottom: 20px;

            span {
                  -webkit-text-stroke: 1px #fff;
                  text-stroke: 1px #fff;
                  -webkit-text-fill-color: transparent;
                  color: transparent;
                  font-family: monospace;
            }
      }

      p {
            font-size: 17px;
            color: #fff;
      }
`;

const sharedButtonStyles = css`
      display: inline-block;
      background: ${(props) => props.theme.primary};
      padding: 15px 20px;
      text-align: center;
      font-size: 15px;
      font-weight: 500;
      .material-symbols-outlined {
            font-variation-settings: "FILL" 0, "wght" 200, "GRAD" 0, "opsz" 24;
      }
`;
export const BannerButton = styled.div`
      ${sharedButtonStyles}
`;

// about section css
export const AboutSection = styled.section`
      padding: 150px 0px;
      background-image: url("/images/img/about/about-section-two-bg.png");
      background-repeat: none;
      background-size: cover;
      background-position: bottom center;
`;

export const AboutImage = styled.div`
      .top__margin {
            margin-top: 11rem;
      }
`;
export const ImageContainer = styled.div``;

export const AboutContainer = styled.div`
      display: flex;
      align-items: center;
      height: 100%;
`;

export const AboutContent = styled.div``;
export const SiteHeading = styled.div`
      position: relative;
      margin-bottom: 40px;
      h2 {
            position: relative;
            display: block;
            font-size: 18px;
            line-height: 24px;
            color: ${(props) => props.theme.white};
            font-weight: 400;
            text-transform: capitalize;
            margin-bottom: 10px;
            font-size: 16px;
      }
      h3 {
            position: relative;
            display: block;
            font-size: 44px !important;
            line-height: 1.2em !important;
            color: ${(props) => props.theme.white};
            font-weight: 700 !important;
            padding-bottom: 25px !important;
            &:after {
                  position: absolute;
                  content: "";
                  background-color: var(--secondary__color);
                  left: 0px;
                  bottom: 0px;
                  width: 120px;
                  height: 2px;
            }
            &:before {
                  position: absolute;
                  content: "";
                  left: 0px;
                  bottom: 0px;
                  width: 40px;
                  height: 2px;
                  background-color: ${(props) => props.theme.white};
                  z-index: 100;
            }
      }
`;

export const AboutBody = styled.div`
      p {
            color: #e2e2e2;
            font-size: 15px;
            line-height: 1.7em;
            font-weight: 300;
            margin-bottom: 60px;
      }
`;
export const AboutSector = styled.div`
      display: flex;
      justify-content: space-between;
`;

// Feature Section css

export const FeatureSection = styled.section`
      margin: 0px 0px 60px 0px;
`;
export const FeatureItem = styled.section``;

// industry section css
export const IndustrySection = styled.section`
      margin-top: 100px;
      margin-bottom: 90px;
      .col-lg-4 {
            &:nth-child(2) {
                  ${IndustryItemContatiner} {
                        border-bottom: 1px solid #ececec;
                  }
            }
            &:nth-child(5) {
                  ${IndustryItemContatiner} {
                        border-right: 1px solid #ececec;
                  }
            }
      }
`;

// services section css
export const ServiceSection = styled.section`
      background-image: url("/images/img/services/bg5.jpg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      position: relative;
      padding: 60px 0px;
      margin-bottom: 200px;
      &:before {
            position: absolute;
            top: 0;
            bottom: 0;
            content: "";
            background-color: #000;
            opacity: 0.8;
            width: 100%;
            height: 100%;
      }
      @media screen and (max-width: 600px) {
            padding: 30px 0px;
      }
`;
export const ServiceContainer = styled.div`
      position: relative;
      z-index: 100;
      padding: 50px 0px 30px;
      @media screen and (max-width: 600px) {
            padding: 20px 0px 20px;
            margin-bottom: 20px;
      }
      h2 {
            color: #fff;
      }
      p {
            color: #abb7c5;
      }
`;

export const ServiceContent = styled.div`
      margin-bottom: -180px;
      .swiper-slide {
            border-radius: 9px;
            background: transparent;
      }
      @media screen and (max-width: 600px) {
            margin-bottom: -200px;
      }
`;
export const ServiceHeading = styled.div`
      h2 {
            font-size: 2.4rem;
            line-height: 1.49;
            color: #fff;
            font-weight: 600;
            @media screen and (max-width: 600px) {
                  font-size: 1.4rem;
            }
      }
`;
export const ServiceButton = styled.div`
      ${sharedButtonStyles}

      display:inline-flex;
      justify-content: center;
      height: ${(props) => props.height || "60px"};
      transition: all 0.3s ease-in-out;
      background-color: ${(props) => props.backgroundColor};

      @media screen and (max-width: 600px) {
            height: 40px;
            padding: 0px 10px;
      }
      a {
            gap: 0.5rem !important;
            color: ${(props) => props.color || props.theme.white};
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            text-decoration: none;

            @media screen and (max-width: 600px) {
                  span {
                        display: none;
                  }
            }
      }

      &:hover {
            background-color: ${(props) => props.theme.secondary};
            color: ${(props) => props.theme.white};
      }
`;

// application sector css
export const ApplicationSection = styled.section`
      padding: 80px 0px;
      background-image: url("/images/img/application/background.png");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      @media screen and (max-width: 600px) {
            padding: 30px 0px 30px;
      }
`;

export const ApplicationWrapper = styled(Col)`
      @media screen and (max-width: 600px) {
            display: none;
      }
`;
// project section css
export const ProjectSection = styled.section`
      margin: 50px 0px 0px;
      overflow: hidden;
`;
export const ProjectContainer = styled.div`
      background-color: #f2f1f8;
      ${"" /* background-image: url('/images/img/projects/background.png'); */}
      ${"" /* margin-left: 99px; */}
      padding: 40px 0 40px 0px;
`;
export const ProjectSliderContainer = styled.div`
      margin-right: -107px;
      overflow: hidden;
`;

// associate section css
export const AssociateSection = styled.div`
      padding: 70px 0px;
      background: url("/images/img/projects/background.png");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      .row {
            border: 1px solid rgb(221, 221, 221);
      }
`;
export const AssociateWrapper = styled.div`
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      background-color: #e9e9e9;
      grid-column-gap: 1px;
      grid-row-gap: 1px;
      @media screen and (max-width: 950px) {
            grid-template-columns: repeat(3, 1fr);
      }
      border: 1px solid #e9e9e9;
`;

// testimonial section css

export const TestimonialSection = styled.div`
      padding: 50px 0px 100px;
      background: url("/images/img/testimonial/background.jpg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      .row {
      }
      .swiper-slide {
            background: transparent;
            text-align: left;
      }
      @media screen and (max-width: 600px) {
            padding: 50px 0px 50px;
      }
`;
// contact section css
export const ContactSection = styled.div``;
export const ContactContainer = styled.div`
      background: url("/images/img/contact/background.jpg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
`;
export const ContactCard = styled.div`
      padding: 60px;
      position: relative;
      @media screen and (max-width: 600px) {
            padding: 20px;
      }
      &:after {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: ${(props) => props.theme.primary};
            clip-path: polygon(0 0, 64% 0, 55% 100%, 0% 100%);
      }
`;
export const ContactContent = styled.div`
      position: relative;
      z-index: 100;

      h5 {
            color: ${(props) => props.theme.white};
            line-height: 1.6;
            font-size: 2.374em;
            font-weight: 500;
            @media screen and (max-width: 600px) {
                  font-size: 18px;
            }
      }
      p {
            color: ${(props) => props.theme.white};
            @media screen and (max-width: 600px) {
                  font-size: 14px;
                  color: #e2e0e0;
            }
      }
`;
export const ContactButton = styled.div`
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
`;

// blog section css
export const BlogSection = styled(ProjectSection)`
      margin-top: 0px;
      /* background-image: url(https://kodesolution.com/2022/cooltech/wp-content/uploads/2022/11/cta-bg1.png); */
      background-position: top center;
      background-image: url("/images/img/blogs/background.png");
      background-size: cover;
      background-repeat: no-repeat;
      .swiper {
            padding-bottom: 90px;
      }
`;
export const BlogContainer = styled.div`
      padding: 40px 0 40px 0px;
`;
export const BlogSlider = styled(Swiper)`
      padding: 20px !important;
`;
