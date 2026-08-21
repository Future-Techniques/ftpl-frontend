import styled from 'styled-components';

export const ProjectContentCardWrapper = styled.div`
`;
export const ProjectContentCardButton = styled.div`
`;
export const ProjectContentCard = styled.div`
   width: 100%;
   height: 100%;
   padding: 50px 47px 0px 0px;
   @media screen and (max-width: 600px) {
      padding: 0px 47px 0px 0px;
   }
   h5 {
      font-size: 16px;
      margin-bottom: 10px;
      color: #767676;
   }
   h2 {
      margin-bottom: 20px;
      color: var(--primary__color);
   }
   p {
      font-size: 15px;
      color: #666;
      line-height: 1.6rem;
      margin-bottom: 30px;
   }
`;

export const ProjectSliderImage = styled.div``;
export const ProjectSliderContent = styled.div.attrs(() => ({
   className:
      'w-100 h-100 d-flex flex-column justify-content-center align-items-center'
}))`
   position: absolute;
   z-index: 100;
   top: 0;
   left: -275px;
   background-color: rgba(0, 0, 0, 0.3);
   opacity: 1;
   -webkit--transition: transform 0.3s ease, opaicty 0.3s ease;
   transition: transform 0.3s ease, opacity 0.3s ease;
`;
export const ProjectSiderButton = styled.div`
   margin-bottom: 32px;
   background: #fff;
   padding: 5px 5px;
   -webkit-transition: background 0.3s ease;
   transition: background 0.3s ease;
   svg {
      transform: rotate(315deg);
      transition: transform 0.3s ease;
   }
   &:hover {
      background: ${(props) => props.theme.primary};
      -webkit-transition: background 0.3s ease;
      transition: background 0.3s ease;
      a {
         svg {
            transform: rotate(360deg);
            transition: transform 0.3s ease;
            fill: ${(props) => props.theme.white};
         }
      }
   }
`;
export const ProjectSliderTitle = styled.div`
   h4 {
      color: #fff;
      font-size: 18px;
   }
   hr {
      color: #fff;
   }
`;
export const ProjectSliderLocation = styled.div`
   color: #fff;
   font-size: 13px;
`;
export const ProjectSliderNumber = styled.div`
   position: absolute;
   z-index: 100;
   top: 415px;
   padding: 30px;
   background-color: #000;
`;

export const ProjectsSliderContainer = styled.div`
   position: relative;
   overflow: hidden;
   &:hover {
      ${ProjectSliderContent} {
         transform: translateX(275px);
         -webkit--transition: transform 0.3s ease, opaicty 0.3s ease;
         transition: transform 0.3s ease, opacity 0.3s ease;
         opacity: 1;
         cursor: pointer;
      }
      ${ProjectSliderNumber} {
         background-color: var(--primary-color);
      }
   }
`;
