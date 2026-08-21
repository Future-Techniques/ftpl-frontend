import { Form } from 'react-bootstrap';
import styled from 'styled-components';

export const CareerForm = styled(Form)`
      h3 {
            font-size: 22px;
            margin-bottom: 0;
            padding-bottom: 10px;
            padding-top: 10px;
            border-bottom: 1px solid rgb(206, 212, 218);
      }

      .form-select, input[type='file'] {
            border-radius: 0;
            box-shadow: none;
      }
`;
