import styled from "styled-components";

export const FormButtonBox = styled.button`
      padding: 15px 22px;
      text-align: center;
      font-size: 15px;
      font-weight: 500;
      width: ${(props) => props.width || "120px"};
      border: 0;
      transition: all 0.3s ease-in;
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme.primary};

      &:hover {
            background-color: ${(props) => props.theme.secondary};
      }

      .spinner-border {
            margin-left: 10px;
            width: 1rem;
            height: 1rem;
            border-width: 1px;
      }
`;
