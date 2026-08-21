import styled from 'styled-components';

export const MobileHeaderContainer = styled.div`
   display: none !important;
   width: 100vw;
   bottom: 0px;
   right: 16px;
   position: fixed !important;
   background: ${(props) => props.theme.white};
   left: 0;
   z-index: 99999;
   @media screen and (max-width: 600px) {
      display: block !important;
   }
`;
export const MobileHeaderItem = styled.div`
   width: 25%;
   padding: 10px 0px;

   .material-symbols-outlined {
      font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
   }
   a {
      display: flex;
      align-items: center;
      flex-direction: column;
      color: #545353;
   }
`;

export const MobileHeaderTitle = styled.div`
   font-size: 14px;
`;
export const MobileHeaderIcon = styled.div``;

export const MobileMenuWrapper = styled.div`
`;