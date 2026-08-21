import styled from 'styled-components';
import { ButtonContainer } from '../../../../components/common/Button/styles';

export const ServiceEstimateContainer = styled.div``;
export const ServiceEstimateImage = styled.div`
   width: 100%;
   float: left;
   clear: both;
   position: relative;
   height: 460px;

   img {
      height: 460px;
      width: 100%;
      object-fit: cover;
   }
   .helper1 {
      z-index: 15;
      position: absolute;
      border-left: 80px solid ${(props) => props.theme.primary};
      border-top: 55px solid transparent;
      left: 0;
      bottom: 0;
   }
   .helper2 {
      z-index: 15;
      position: absolute;
      border-right: 220px solid ${(props) => props.theme.primary};
      border-top: 55px solid transparent;
      right: 0;
      bottom: 0;
   }
   .helper3 {
      z-index: 10;
      position: absolute;
      border-top: 80px solid transparent;
      opacity: 0.2;
      bottom: 0;
      border-left: 80px solid #000;
      left: 0;
   }
   .helper4 {
      border-right: 220px solid #000;
      right: 0;
      z-index: 10;
      position: absolute;
      border-top: 80px solid transparent;
      opacity: 0.2;
      bottom: 0;
   }
   .helper5 {
      z-index: 5;
      position: absolute;
      border-left: 80px solid ${(props) => props.theme.primary};
      border-top: 80px solid transparent;
      left: 0;
      bottom: 0;
   }
   .helper6 {
      z-index: 5;
      content: '';
      position: absolute;
      border-right: 220px solid ${(props) => props.theme.primary};
      border-top: 80px solid transparent;
      right: 0;
      bottom: 0;
   }
`;

export const ServiceEstimateInner = styled.div`
   margin-top: -20px;
   background-color: ${(props) => props.theme.primary};
   padding: 11px 20px 30px;
   font-size: 19px;
   ${ButtonContainer} {
      background: #fff;
      padding: 10px 20px;
      a {
         color: #000 !important;
      }
   }
`;
