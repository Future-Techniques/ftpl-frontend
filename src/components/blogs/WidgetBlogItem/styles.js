import styled from 'styled-components';

export const WidgetBlogItemImage = styled.div`
      height: 90px;
      width: 120px;

      img {
            width: 100%;
            height: 100%;
      }
`;

export const WidgetBlogItemContent = styled.div`
      display: flex;
      gap: 10px;
      margin-bottom: 20px;

      &:last-child {
            margin-bottom: 0;
      }
`;

export const WidgetBlogItemInfo = styled.div`
      width: calc(100% - 120px);

      a {
            text-decoration: none;
            color: #333;
            font-weight: 600;
            text-align: justify;

            &:hover {
                  color: ${(props) => props.theme.secondary};
            }
      }

      p {
            color: ${props => props.theme.secondary};
            margin: 0;
      }
`;
