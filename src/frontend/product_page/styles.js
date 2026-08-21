import styled from "styled-components";
import { ImageHolder, Item } from "../solutions/styles";

export const CategoryContainer = styled.div`
      padding: 60px 0px;
      ${Item} {
            &:hover {
                  ${ImageHolder} {
                        &:after {
                              background-color: rgba(15, 15, 22, 0.5);
                        }
                  }
            }
      }
      ${ImageHolder} {
            &:after {
                  background: rgba(0, 0, 0, 0.3);
            }
      }
`;
