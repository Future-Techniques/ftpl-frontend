import styled from 'styled-components';
export const BlogItemImage = styled.div`
      overflow: hidden;
      height: 234px;

      img {
            transition: transform 0.4s ease-in;
            object-fit: cover;
            height: 100%;
            width: 100%;
      }
`;

export const BlogItem = styled.div`
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      transition: transform 0.3s ease-in;
      height: 100%;

      &:hover > ${BlogItemImage} {
            img {
                  transform: scale(1.05);
            }
      }
`;

export const BlogItemContent = styled.div`
      padding: 20px 30px 30px;
`;

export const BlogItemDetail = styled.div`
      font-family: 'Nunito Sans', sans-serif;
      font-size: 14px;
      color: #152e3a;
      display: flex;
      align-items: center;
      gap: 1.5rem;
`;

export const BlogItemAuthor = styled.div`
      display: flex;
      align-items: center;
      gap: 0.5rem;

      i {
            color: ${(props) => props.theme.secondary};
      }

      a {
            color: #0b1e33;
            display: block;
            text-decoration: none;

            span {
                  display: flex;
                  align-items: center;
                  gap: 0.5rem;
            }

            &:hover {
                  color: ${(props) => props.theme.secondary};
            }
      }
`;

export const BlogItemTitle = styled.div`
      margin: 1rem 0;

      h3 {
            font-size: 20px;
            text-align: left;
            font-family: 'Rajdhani', sans-serif;

            a {
                  color: #0b1e33;
                  display: block;
                  text-decoration: none;

                  &:hover {
                        color: ${(props) => props.theme.secondary};
                  }
            }
      }
`;

export const BlogItemInfo = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 1rem;

      span {
            color: #152e3a;
            font-size: 16px;
      }
`;

export const BlogItemButton = styled.div`
      a {
            color: ${(props) => props.theme.secondary};
            font-family: 20px;
            font-weight: 500;
            font-size: 16px;
      }
`;
