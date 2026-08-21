import styled from 'styled-components';

export const ProductFeatureContainer = styled.div`
      padding: 20px;
      margin: 3rem 0;
`;
export const ProductFeatureContent = styled.div`
      h3 {
            font-size: 28px;
            color: ${(props) => props.theme.primary};
            margin-bottom: 20px;
      }

      ul li {
            color: #555;
      }
`;
