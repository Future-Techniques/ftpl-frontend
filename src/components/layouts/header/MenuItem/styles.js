import styled from "styled-components";

export const MenuItemContainer = styled.li`
      position: ${(props) => (props.position ? "" : "relative")};
      transition: 0.3s all ease;
`;
