import { Form } from 'react-bootstrap';
import styled from 'styled-components';

export const FormInputBox = styled(Form.Control)`
      border-radius: 0;
      background-color: transparent;
      border: 0;
      border-bottom: 1px solid #c1c1c1;
      padding: 0.375rem 0.75rem;
      color: #212529;
      &:focus {
            box-shadow: none;
            border-color: ${(props) => props.theme.secondary};
            background-color: transparent;
      }

      &:focus-visible {
            outline: 0;
      }
`;
