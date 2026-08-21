import { Link } from "react-router-dom";
import styled from "styled-components";

export const AssociateImage = styled(Link)`
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      background: #ffff;

      @media screen and (max-width: 1200px) and (min-width: 600px) {
            padding: 0px 0px !important;
      }
      @media screen and (max-width: 600px) {
            padding: 0px 0px !important;
      }
      img {
            height: 100%;
            height: 100%;
            aspect-ratio: 3/2;
            object-fit: contain;
      }
`;
export const AssociateHead = styled.div`
      margin-bottom: 30px;
      font-size: 20px;
      color: ${(props) => props.theme.primary};
`;
