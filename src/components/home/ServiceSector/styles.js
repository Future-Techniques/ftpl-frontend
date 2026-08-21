import styled from 'styled-components';

export const ServiceItemContent = styled.div`
   background-color: ${(props) => props.theme.primary && props.theme.primary};
   width: 100%;
   position: relative;
   border-radius: 5px;
   overflow: hidden;
   transition: all 0.3s ease-in-out;
   .card {
      border: none;
      background: transparent;
      padding: 30px 40px;
      @media screen and (max-width: 600px) {
         padding: 0px 10px;
      }
   }
   .card-title {
      text-align: left;
      color: ${(props) => props.theme.white};
      margin-bottom: 50px;
      line-height: 1.8;
      @media screen and (max-width: 600px) {
         font-size: 1rem;
         font-weight: normal;
         margin-bottom: 20px;
      }
   }
   .card-img-top {
      height: 70px;
      width: 70px;
      @media screen and (max-width: 600px) {
         height: 40px;
         width: 40px;
      }
   }
   &:after {
      background: #fff;
      position: absolute;
      content: '';
      height: 216px;
      width: 216px;
      left: -35px;
      bottom: -65px;
      border-radius: 50%;
      opacity: 0.1;
      @media screen and (max-width: 600px) {
         left: -80px;
         bottom: -138px;
      }
   }
   &:hover {
      background-color: ${(props) => props.theme.secondary};
      transition: all 0.3s ease-in-out;
   }
`;
