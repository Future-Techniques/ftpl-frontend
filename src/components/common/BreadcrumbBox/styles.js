import { Breadcrumb } from 'react-bootstrap';
import styled from 'styled-components';

export const BreadcrumbContainer = styled.div`
      height: 250px;
      background-size: contain;
      width: 100%;
      position: relative;
      /* background-attachment: fixed; */
      background-image: url('/images/background-image.png');
      z-index: 100;
      .container {
            height: 100%;
      }

      .breadcrumb-container {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            .breadcrumb {
                  margin-bottom: 0;

                  .breadcrumb-item + .breadcrumb-item::before {
                        color: ${(props) => props.theme.primary};
                        position: relative;
                        z-index: 9999;
                        font-size: 24px;
                  }

                  .breadcrumb-item a {
                        font-size: 24px;
                        z-index: 999;
                        text-decoration: none;
                        position: relative;
                        color: ${(props) => props.theme.primary};
                  }

                  .breadcrumb-item.active {
                        font-size: 24px;
                        position: relative;
                        z-index: 9999;
                        color: ${(props) => props.theme.secondary};
                  }
            }
      }
`;

export const BreadcrumbItem = styled(Breadcrumb.Item)``;

export const BreadcrumbColor = styled.div`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.7;
      /* background-color: #00173c; */
`;
