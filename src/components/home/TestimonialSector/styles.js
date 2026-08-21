import styled from 'styled-components';

export const TestimonialHead = styled.div``;

export const TestimonialContainer = styled.div`
   background: ${(props) => props.theme.white};
   padding: 40px;
   max-width: 100%;
   border-radius: 10px;
   @media screen and (max-width: 600px) {
      padding: 20px;
      p {
         font-size: 13px;
      }
   }
   p {
      font-size: 15px;
      color: #555;
      line-height: 1.6;
      margin-bottom: 20px;
      @media screen and (max-width: 600px) {
         font-size: 13px;
      }
   }
`;

export const TestimonialContent = styled.div.attrs(() => ({
   className: 'd-flex align-items-center justify-content-start gap'
}))``;

export const TestimonialImage = styled.div`
   max-width: 60px;
   margin-right: 15px;
   margin-bottom: 0;
   img {
      border-radius: 50%;
   }
`;

export const TestimonialInfo = styled.div`
   h4 {
      font-size: 17px;
   }
   p {
      margin-bottom: 0px;
      font-weight: 300;
   }
`;
