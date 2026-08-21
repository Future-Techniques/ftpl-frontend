import styled from 'styled-components';
export const ProductApplicationTitle = styled.div``;
export const ProductApplicationContainer = styled.div`
      padding: 48px;
      background-image: url(/images/img/Products/pattern.png);
      background-color: #f9f9f9;
      background-repeat: no-repeat;
      background-size: cover;
`;
export const ProductApplicationHeading = styled.div`
      margin-bottom: 30px;
      h2 {
            margin-bottom: 0.5rem;
            font-family: inherit;
            font-weight: 500;
            line-height: 1.2;
            color: ${(props) => props.theme.primary};
            font-size: 28px;
      }
`;
export const ProductApplicationSlider = styled.div`
      .swiper-slide {
            background: transparent;
      }

      .swiper-wrapper {
            justify-content: center;
      }
`;

export const ProductApplicationContent = styled.div.attrs(() => ({
      className: 'd-flex align-items-center, justify-content-center flex-column'
}))``;
export const ProductApplicationIcon = styled.div.attrs(() => ({
      className: 'd-flex align-items-center justify-content-center'
}))`
      background: ${(props) => props.backColor};
      height: 100px;
      width: 100px;
      padding: 5px;
      border-radius: 50%;
      margin-bottom: 18px;
      svg {
            height: 40px;
            widht: 40px;
            fill: #fff;
      }
`;
