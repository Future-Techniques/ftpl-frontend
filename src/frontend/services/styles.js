import styled from "styled-components";

export const ServiceListHeading = styled.div``;
export const ServiceListContent = styled.div``;

export const ServiceListContainer = styled.div`
      position: relative;
      margin-bottom: 50px;
      overflow: hidden;
      background-color: ${(props) => props.theme.primary};
      border-radius: 5px;

      ${ServiceListHeading} {
            width: 100%;
            padding: 22px 31px 11px;
            background-color: rgba(255, 255, 255, 0.1);
            position: relative;
            margin-bottom: 12px;
            color: #fff;
            h3 {
                  font-size: 17px;
            }
            &:after {
                  content: "";
                  position: absolute;
                  left: 30px;
                  top: 100%;
                  border: 15px solid transparent;
                  border-top: 13px solid rgba(255, 255, 255, 0.1);
            }
      }

      ${ServiceListContent} {
            padding: 25px 30px;

            ul {
                  margin: 0;

                  li {
                        margin: 0 0 19px;
                        list-style-type: none;

                        a {
                              color: ${(props) => props.theme.white};
                              font-size: 15px;
                              transition: all 0.3s ease-in-out;

                              &:hover {
                                    color: ${(props) => props.theme.secondary};
                                    padding-left: 10px;
                              }
                        }

                        &:last-child {
                              margin-bottom: 0;
                        }
                  }
            }
      }
`;
