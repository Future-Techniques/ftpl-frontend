import styled from 'styled-components';
export const HeaderLinks = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;
`;
export const HeaderLinkItem = styled.div`
   a {
      height: 19px;
      width: 19px;
      display: block;
      text-decoration: none;
      svg {
         height: 15px;
         width: 18px;
         fill: ${(props) => props.theme.white};
      }
      i {
         color: ${(props) => props.theme.white};
         font-size: 19px;
      }

      &:hover {
         i {
            color: ${(props) => props.theme.secondary};
         }
      }
   }
`;
