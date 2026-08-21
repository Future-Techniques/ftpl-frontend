import styled from 'styled-components';

export const ProjectListLink = styled.div`
   background: #fff;
   width: 50px;
   height: 50px;
   position: absolute;
   right: 10px;
   bottom: -50px;
   z-index: 100;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 50%;
   transition: 0.3s ease-in-out;
   a {
      color: ${(props) => props.theme.primary};
   }
`;
export const ProjectListImage = styled.div`
   position: relative;
   overflow: hidden;

   &:before {
      position: absolute;
      width: 200%;
      height: 90px;
      left: -10px;
      bottom: -10px;
      content: '';
      background-color: ${(props) => props.theme.primary};
      -webkit-transform: rotate(-15deg);
      transform: rotate(-15deg);
      z-index: 1;
      -webkit-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
   }
   &:after {
      position: absolute;
      width: 200%;
      height: 107px;
      left: -22px;
      bottom: -10px;
      content: '';
      background-color: ${(props) => props.theme.secondary};
      -webkit-transform: rotate(-19deg);
      transform: rotate(-19deg);
      -webkit-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
   }
   .material-symbols-outlined {
      font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24;
   }
`;
export const ProjectListContent = styled.div`
   background: ${(props) => props.theme.primary};
   padding: 20px 20px;
   transition: all 0.3s ease-in-out;
   h4 {
      font-size: 16px;
      a {
         text-decoration: none;
         color: ${(props) => props.theme.white};
      }
   }
   p {
      color: #cfcfcf;
      font-size: 14px;
   }
`;

export const ProjectListContainer = styled.div`
   &:hover {
      ${ProjectListLink} {
         transform: translateY(-50px);
      }
      ${ProjectListImage} {
         &:before {
            background-color: ${(props) => props.theme.secondary};
         }
      }
      ${ProjectListContent} {
         background: ${(props) => props.theme.secondary};
         transition: all 0.3s ease-in-out;
      }
   }
`;
