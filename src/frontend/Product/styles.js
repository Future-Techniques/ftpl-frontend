import styled from 'styled-components';
export const ProductContainer = styled.div`
      margin-bottom: 4rem;
`;

export const ProductContent = styled.div`
      p {
            font-size: 16px;
            text-align: justify;
            color: #38414e;
            font-weight: 400;
            line-height: 28px;
            font-weight: 200;
            margin-bottom: 28px;
      }
      h4 {
            color: #000000;
            font-family: 'Poppins', Sans-serif;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.6px;
            margin-bottom: 20px;
      }
`;
export const ProductTitle = styled.div`
      position: relative;
      margin-bottom: 32px;
      &:before {
            content: ' ';
            width: 60px;
            height: 3px;
            background: ${(props) => props.theme.primary};
            position: absolute;
            bottom: -11px;
            left: 0;
      }
      &:after {
            content: ' ';
            width: 50%;
            height: 1px;
            background: ${(props) => props.theme.primary};
            position: absolute;
            bottom: -10px;
            left: 0;
            z-index: -1;
      }
      h2 {
            font-size: 30px;
            color: ${(props) => props.theme.primary};
      }
`;
export const ProductImage = styled.div``;
export const ProductIframeContainer = styled.div`
      iframe {
            width: 100%;
            height: 100vh;
      }
      width: 100%;
`;
