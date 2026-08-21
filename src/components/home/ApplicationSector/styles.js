import styled from 'styled-components';

export const ApplicationHead = styled.div`
   width: 100%;
   height: 100%;
   ${'' /* padding-left: 40px; */}
   h2 {
      font-weight: 600;
      font-size: 2.5rem;
      text-transform: capitalize;
      @media screen and (max-width: 600px) {
         font-size: 1.5rem;
      }
   }
   h6 {
      color: var(--secondary__color);
   }
`;
export const ApplicationItemContainer = styled.div`
   position: relative;
   overflow: hidden;
   border-radius: 10px;
   width: 100%;
   .card {
      position: relative;
      border: none;
   }
   .card-body {
      padding: 0px;
   }
   .card-title {
      position: absolute;
      bottom: 20px;
      left: 20px;
      z-index: 100;
      font-size: 18px;
      color: ${(props) => props.theme.white};
      @media screen and (max-width: 600px) {
         font-size: 15px;
      }
   }
   .card-img {
      height: 270px;
      object-fit: cover;
      position: relative;
      border-radius: 10px;
      @media screen and (max-width: 600px) {
         height: 150px;
      }
   }
   &:before {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      content: '';
      background: rgb(22, 36, 61);
      background: linear-gradient(
         0deg,
         rgba(22, 36, 61, 0.9164040616) 14%,
         rgba(22, 36, 61, 0.0368522409) 58%
      );
      z-index: 1;
      border-radius: 10px;
   }
   &:after {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      content: '';
      border-radius: 10px;
      background-color: rgba(22, 36, 61, 0.3);
      transition: all 500ms ease;
      transform: translate3d(0px, -100%, 0px);
   }
   &:hover {
      &:after {
         transform: translate3d(0px, 0, 0px);
         transition: all 500ms ease;
      }
   }
`;

export const ApplicationContentCard = styled.div`
   background-color: #f8f5f1;
   width: 100%;
   height: 100%;
   padding: 40px 50px 50px 50px;
   @media screen and (max-width: 600px) {
      padding: 20px;
   }
`;
export const ApplicationSubTitle = styled.p`
   color: #767676;
   font-size: 15px;
`;
export const ApplicationDescription = styled.h4`
   font-weight: 600;
   margin-bottom: 30px;
   @media screen and (max-width: 600px) {
      margin-bottom: 15px;
   }
`;
