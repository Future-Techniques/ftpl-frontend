import styled from 'styled-components';

export const ContactForm = styled.div`
      background-color: #e7e7e7;
      padding: 60px;
`;

export const ContactContent = styled.div`
      margin-left: -50px;
      position: relative;
      background-color: ${(props) => props.theme.primary};
      padding: 60px;
`;

export const ContactItem = styled.div`
      h2 {
            color: ${(props) => props.theme.white};
            font-size: 24px;
            margin-bottom: 0px;
      }

      p {
            color: #e7e7e7;
      }
`;

export const ContactMap = styled.div`
      margin-top: 3rem;
`;
