import styled from 'styled-components';

export const ServiceDetailContainer = styled.div``;
export const ServiceDetailImage = styled.div`
      height: 420px;

      img {
            height: 100%;
            width: 100%;
            object-fit: cover;
      }
`;
export const ServiceDetailContent = styled.div``;
export const ServiceDetailDescription = styled.div`
      p {
            font-size: 16px;
            color: #574b66;
            text-align: justify;
      }

      h3 {
            padding: 0;
            font-size: 24px;
            font-weight: 400;
            letter-spacing: 0;
            margin: 0 0 1rem;
      }

      ul li {
            list-style-type: none;
            margin-bottom: 10px;
            width: 100%;
            display: inline-block;
            position: relative;

            &::before {
                  content: 'check_box'; /* Unicode character for check mark */
                  display: inline-block;
                  width: 1em; /* Adjust the width as needed */
                  height: 1em; /* Adjust the height as needed */
                  position: absolute;
                  left: -1.5em; /* Adjust the positioning as needed */
                  top: 50%;
                  transform: translateY(-50%);
                  font-family: 'Material Symbols Outlined';
                  font-weight: normal;
                  font-style: normal;
                  font-size: 24px;
                  line-height: 1;
                  letter-spacing: normal;
                  text-transform: none;
                  display: inline-block;
                  white-space: nowrap;
                  word-wrap: normal;
                  direction: ltr;
                  -webkit-font-feature-settings: 'liga';
                  -webkit-font-smoothing: antialiased;
                  font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0,
                        'opsz' 24;
                  color: #d6969d;
            }
      }
`;
export const ServiceDetailTitle = styled.h2`
      font-size: 24px;
`;
