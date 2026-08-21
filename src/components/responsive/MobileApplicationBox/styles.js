import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const MobileApplicationContainer = styled(Swiper)`
   display: none;
   height: 100%;
   @media screen and (max-width: 600px) {
      display: block;
   }
`;
