import styled from "styled-components";

export const ServiceItemImage = styled.div``;
export const ServiceItemContent = styled.div``;
export const ServiceItemTitle = styled.h3``;
export const ServiceItemDescription = styled.p``;
export const ServiceItemButton = styled.div``;

export const ServiceItemContainer = styled.div.attrs(() => ({
      className: "d-flex justify-content-between ",
}))`
      position: relative;
      box-shadow: 0 0 15px rgb(0 0 0/10%);
      padding: 40px 60px 40px 37px;
      min-height: 220px;
      margin-bottom: 70px;
      ${ServiceItemTitle} {
            padding: 0;
            font-size: 24px;
            letter-spacing: 0;
            margin: 0 0 18px;
            color: #14141c;
            font-weight: 500;
            &:hover {
                  color: ${(props) => props.theme.primary};
            }
      }
      ${ServiceItemImage} {
            width: 220px;
            height: 220px;
            margin-top: -70px;
            margin-right: 35px;
            img {
                  width: 220px;
                  height: 220px;
                  object-fit: cover;
            }
      }
      ${ServiceItemDescription} {
            color: #666;
            font-size: 15px;
      }
      ${ServiceItemButton} {
            position: absolute;
            right: 0;
            bottom: 0;
            background-color: ${(props) => props.theme.blackpearl};
            border-bottom-right-radius: 0.375rem;
            transition: all 0.3s ease-in-out;

            a {
                  padding: 8px 40px;
                  color: #fff;
                  display: block;
                  text-transform: text-uppercase;
            }
            &:after {
                  border-bottom: 40px solid transparent;
                  border-right: 20px solid #081225;
                  content: "";
                  position: absolute;
                  right: 100%;
                  bottom: 0;
                  transition: all 0.3s ease-in-out;
            }
            &:hover {
                  cursor: pointer;
                  background-color: ${(props) => props.theme.primary};

                  &:after {
                        border-right: 20px solid
                              ${(props) => props.theme.primary};
                        cursor: pointer;
                  }
            }
      }
`;
