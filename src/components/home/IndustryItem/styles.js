import styled from 'styled-components';

// placeholder card css
export const IndustryBackground = styled.div`
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      ${(props) =>
            props.active
                  ? `
      height: 100%;
      width:100%;
      opacity:1;
      visibility: visible;
      `
                  : `
      width: 70%;
      height: 100%;
      opacity: 0;
      visibility: hidden;
      `}

      transition: all 0.25s ease-in-out;
      img {
            object-fit: cover;
            height: 100%;
            position: relative;
      }
`;
export const IndustryBackgroundImage = styled.div`
      position: relative;
      height: 100%;
      width: 100%;
      img {
            width: 100%;
      }
      &:before {
            position: absolute;
            content: '';
            left: 0px;
            bottom: 0px;
            width: 100%;
            height: 100%;
            background-color: #000;
            opacity: 0.6;
            z-index: 10000;
            transition: all 0.35s ease-in-out;
      }
`;
export const IndustryItemIcon = styled.div``;
export const IndustryItemContatiner = styled.div`
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 45px 50px;
      height: 100%;
      background-color: ${(props) =>
            props.backgroundcolor && props.backgroundcolor};
      &:nth-child(4) {
            border-right: 1px solid #000;
      }
      .card {
            border: none;
            background-color: transparent;

            img {
                  width: 50px;
                  height: 50px;
                  margin-bottom: 30px;
            }
            .card-title {
                  margin-bottom: 20px;
            }
            button {
                  background-color: transparent;
                  border: none;
                  color: var(--primary__color);
                  &:active {
                        color: ${(props) => props.theme.white};
                        background-color: transparent;
                        border: none;
                  }
            }
            a {
                  text-decoration: none;
                  color: ${(props) => (props.active ? '#fff' : '#232323')};
            }
            p {
                  font-size: 14px;
                  color: ${(props) => (props.active ? '#fff' : '#666')};
            }
            ${'' /* //for heading */}
            h6 {
                  margin-bottom: 15px;
                  font-weight: 500;
                  font-size: 14px;
                  color: #555;
            }
            h2 {
                  font-size: 30px;
                  color: var(--primary__color);
                  font-weight: 600;
            }
      }

      &:hover {
            transition: all 0.25s ease-in-out;
            ${IndustryBackground} {
                  height: 100%;
                  width: 100%;
                  opacity: 1;
                  visibility: visible;
                  transition: all 0.25s ease-in-out;
            }
            .card {
                  a {
                        text-decoration: none;
                        color: #fff;
                  }
                  p {
                        font-size: 14px;
                        color: #fff;
                  }
            }
      }
`;
export const IndustryImage = styled.div`
      background: ${(props) => props.theme.primary};
      display: flex;
      align-items: center;
      justify-content: center;
      width: 107px;
      height: 107px;
      padding: 9px;
      transition: 0.3s transform linear;
      border-radius: 50%;

      img {
            width: 30px;
            height: 30px;
            transition: 0.3s transform linear;
      }
`;
export const IndustryTabContainer = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;

      p {
            margin-top: 10px;
            margin-bottom: 0px;
            color: #212121;
      }
      &:hover {
            transition: 0.3s transform linear;
            img {
                  transform: rotateY(-180deg);
            }
            ${IndustryImage} {
                  background: #d79aa0;
            }
      }
`;

export const IndustryContentContainer = styled.div`
      img {
            height: 350px;
      }
      h4 {
            font-weight: 600;
            font-size: 25px;
      }
      p {
            color: #666;
            font-size: 15px;
      }
`;
export const IndustryContentImage = styled.div`
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
`;
