import { Container } from 'react-bootstrap';
import styled from 'styled-components';

// about section css
export const AboutSection = styled.section`
      padding: 50px 0px;
      background-image: url('/images/img/about/about-section-two-bg.png');
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
            color: ${(props) => props.theme.primary};
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
            color: ${(props) => props.theme.primary};
            font-weight: 700 !important;
            padding-bottom: 25px !important;
            &:after {
                  position: absolute;
                  content: '';
                  background-color: var(--secondary__color);
                  left: 0px;
                  bottom: 0px;
                  width: 120px;
                  height: 2px;
            }
            &:before {
                  position: absolute;
                  content: '';
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
            color: #555;
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

export const SisterConcernContainer = styled.div``;
export const SisterWrapper = styled(Container)`
      padding: 60px 0px;
`;
