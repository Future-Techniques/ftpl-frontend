import styled from "styled-components";

export const ButtonContainer = styled.div`
      display: inline-block;
      text-align: center;
      font-size: 15px;
      transition: all 0.3s ease-in-out;
      font-weight: 500;

      a {
            background: ${(props) => props.theme.white};
            padding: 15px 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            text-decoration: none;
            color: ${(props) => props.theme.primary};
            gap: 1rem;
      }

      &.active {
            a {
                  background: ${(props) => props.theme.primary};
                  color: ${(props) => props.theme.white};
                  transition: all 0.3s ease-in-out;
            }

            span {
                  transform: rotate(90deg);
                  transition: all 0.3s ease-in-out;
            }
      }
      .material-symbols-outlined {
            font-variation-settings: "FILL" 0, "wght" 200, "GRAD" 0, "opsz" 24;
      }

      @media screen and (max-width: 600px) {
            ${"" /* height: 40px; */}
            padding: 10px 10px;
            font-size: 14px;
            a {
                  gap: 0.5rem !important;
                  span {
                        font-size: 16px;
                  }
            }
      }
`;
