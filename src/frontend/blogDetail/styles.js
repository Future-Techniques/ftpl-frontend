import styled from "styled-components";

export const BlogDetailContent = styled.div``;

export const BlogDetailImage = styled.div`
      margin-bottom: 10px;
      height: 420px;

      img {
            width: 100%;
            height: 100%;
            object-fit: contain;
      }
`;

export const BlogDetailInfo = styled.div`
      position: relative;

      ul {
            margin: 0;
            padding: 0;
            list-style: none;

            li {
                  display: inline-block;
                  font-size: 18px;
                  font-weight: 500;
                  color: #ff5e15;
                  position: relative;

                  &:nth-child(2) {
                        position: relative;

                        &::after {
                              position: absolute;
                              width: 24px;
                              height: 2px;
                              background-color: #00173c;
                              top: 13px;
                              right: -40px;
                              content: "";
                        }
                  }

                  &:last-child {
                        margin-left: 60px;
                  }

                  &:first-child {
                        position: absolute;
                        left: 0px;
                        top: -10px;
                        z-index: 1;
                        margin-right: 0px;
                        transform: rotate(-90deg);
                        transform-origin: left 0px;
                        border-right: 20px solid #fff;
                        border-bottom: 20px solid #fff;
                        background-color: #fff;

                        span {
                              background-color: ${(props) =>
                                    props.theme.primary};
                              color: #fff;
                              text-align: center;
                              text-transform: uppercase;
                              /* background-color: #ff5e15; */
                              font-size: 18px;
                              display: block;
                              padding: 2px 15px;
                              letter-spacing: 2px;
                        }
                  }
            }
      }
`;

export const BlogDetailTitle = styled.div`
      h2 {
            font-size: 24px;
      }
`;

export const BlogDetailDescription = styled.div`
      p {
            font-size: 16px;
            color: ${(props) => props.theme.primary};
            text-align: justify;
      }

      img {
            width: 100%;
            border-radius: 5px;
            margin-bottom: 10px;
      }
`;

export const BlogWidget = styled.div`
      padding: 20px;
      border: 2px solid #eff3f6;
      background-color: #f2f2f2;
`;

export const BlogWidgetTitle = styled.div`
      h3 {
            font-size: 24px;
      }
`;

export const BlogWidgetList = styled.div`
      ul {
            margin: 0;
            padding: 0;
            list-style: none;

            li {
                  border-bottom: 1px solid #e1e1e1;

                  a {
                        padding-bottom: 10px;
                        padding-top: 10px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        text-decoration: none;
                        color: #333;

                        &:hover {
                              color: ${(props) => props.theme.secondary};
                        }
                  }

                  &:last-child {
                        border: 0;
                  }
            }
      }
`;

export const BlogWidgetBlog = styled.div``;
