import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const WidgetBox = styled.div`
      position: sticky;
      top: 120px;
`;

export const CatalogueWidget = styled.div`
      background-color: ${(props) => props.theme.primary};
      padding: 30px 20px;

      p {
            color: ${(props) => props.theme.white};
      }
`;

export const WidgetTitle = styled.h4`
      font-size: 24px;
      font-weight: 600;
      margin-bottom: ${(props) => (props.color ? '20px' : '30px')};
      color: ${(props) => (props.color ? props.color : props.theme.white)};
`;

export const WidgetButton = styled(Link)`
      width: ${(props) => (props.color ? 'fit-content' : '100%')};
      display: block;
      background-color: ${(props) =>
            props.color ? props.color : props.theme.white};
      padding: 10px 16px;
      text-decoration: none;
      color: ${(props) =>
            props.color ? props.theme.white : props.theme.primary};
      transition: all 0.5s ease-in-out;

      &:hover {
            color: ${(props) =>
                  props.color ? props.hover ? props.theme.white : props.theme.primary : props.theme.white};
            background-color: ${(props) =>
                  props.color ? props.hover ? props.hover : props.theme.white : props.theme.secondary};
      }
`;

export const QueryWidget = styled.div`
      padding: 30px 25px;
      margin-top: 30px;
      background-color: ${(props) => props.theme.secondary};

      p {
            color: ${(props) => props.theme.white};
      }
`;

export const FaqAccordionItem = styled.div`
      margin-bottom: 40px;
`;

export const FaqAccordion = styled(Accordion)`
      .accordion-item {
            background-color: #eff3f6;
            margin-bottom: 20px;
            border: 0;

            &:last-child {
                  margin-bottom: 0;
            }
      }

      .accordion-button:not(.collapsed) {
            box-shadow: none;
      }

      .accordion-button {
            background-color: #eff3f6;
      }
`;
