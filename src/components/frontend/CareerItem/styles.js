import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CareerItemLink = styled(Link)`
      display: block;
      color: #333;
      background-color: #f2f2f2;
      text-decoration: none;
`;

export const CareerItemContent = styled.div`
      padding-left: 5px;

      ul {
            margin: 0;
            padding: 0;
            list-style: none;

            li {
                  span {
                        &:first-child {
                              padding-right: 10px;
                        }
                  }
            }
      }
`;

export const CareerItemHeader = styled.div`
      margin-bottom: 10px;
      display: flex;
      gap: 1.5rem;
`;

export const CareerItemImage = styled.div`
      width: 60px;
      height: 60px;

      img {
            height: 100%;
            width: 100%;
            object-fit: contain;
      }
`;

export const CareerItemTitle = styled.div`
      h2 {
            margin-bottom: 2px;
      }
`;
