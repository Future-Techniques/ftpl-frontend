import styled from 'styled-components';

export const CatalogueImage = styled.a`
      height: 293px;
      display: block;

      img {
            width: 100%;
            height: 100%;
      }
`;

export const CatalogueInfo = styled.div`
      margin: 10px 0;
      display: flex;
      justify-content: space-between;

      h2 {
            font-size: 18px;
            text-transform: capitalize;
            margin-bottom: 0;
      }

      i {
            font-size: 18px;
            line-height: 0;
            padding-right: 10px;
      }

      div {
            display: flex;
            align-items: center;
      }

      a {
            color: #333;
            display: block;
            text-decoration: none;
      }
`;

export const CatalogueBox = styled.div`
      height: 100%;
      transition: all 0.3s ease-in;

      &:hover {
            ${CatalogueImage} {
                  img {
                        filter: grayscale(100%);
                  }
            }

            ${CatalogueInfo} {
                  h2 {
                        a {
                              color: ${(props) => props.theme.secondary};
                        }
                  }
            }
      }
`;
