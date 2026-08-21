import styled from 'styled-components';

export const FeatureIcon = styled.div``;

export const FeatureItemIcon = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      margin-bottom: 20px;
      z-index: 100;
      ${FeatureIcon} {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            border-radius: 50%;
            transition: all 0.3s ease-in;
      }
      img {
            width: 50px;
            height: 50px;
           
      }
`;

export const FeatureItemContent = styled.div`
      position: relative;
      z-index: 100;
      margin-bottom: 25px;
      h3 {
            font-size: 20px;
            margin-bottom: 20px;
      }
      p {
            font-size: 14px;
            line-height: 1.7em;
            color: #555555;
            text-align: center;
      }
`;
export const FeatureItemButton = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: -20px;
      position: relative;
      z-index: 100;
      .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
      }
      a {
            color: ${(props) => props.theme.secondary};
            background: ${(props) => props.theme.white};
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      }
`;

export const FeatureItemCard = styled.div`
      background-color: #f3f5f9;
      padding: 60px 30px 0px;
      border-bottom: 3px solid var(--primary__color);
      position: relative;
      transition: all 0.3s ease-in;
      &:before {
            position: absolute;
            left: 0;
            content: '';
            background: var(--primary__color);
            width: 100%;
            height: 0%;
            top: 0;
            transition: all 0.3s ease-in;
      }

      &:hover {
        transition: all 0.3s ease-in;
            &:before {
                  height: 100%;
                  transition: all 0.3s ease-in;
            }

            ${FeatureItemContent} {
                  h3 {
                        color: ${(props) => props.theme.white};
                        transition: all 0.3s ease-in;
                  }
                  p {
                        color: ${(props) => props.theme.white};
                        transition: all 0.3s ease-in;
                  }
            }
            ${FeatureIcon} {
                transition: all 0.3s ease-in;
                background: ${(props) => props.theme.white};
            }
      }
`;
