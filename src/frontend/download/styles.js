import styled from 'styled-components';

export const DownloadContent = styled.div``;
export const DownLoadLink = styled.div`
   .material-symbols-outlined {
      font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24;
   }
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 15px 10px;
   width: 100%;
   a {
      color: ${(props) => props.theme.primary};
      text-decoration: none;
   }
`;
