import React from "react";
import { Link } from "react-router-dom";
import { MenuItemContainer } from "./styles";

const MenuItem = ({ title, link, children, classes, position }) => {
      return (
            <>
                  <MenuItemContainer
                        position={position}
                        className={`list-inline-item ${classes}`}
                  >
                        <Link
                              to={link ? link : "#"}
                              className={
                                    "d-flex align-items-center text-decoration-none  px-3 "
                              }
                        >
                              {title}
                        </Link>
                        {children}
                  </MenuItemContainer>
            </>
      );
};

export default MenuItem;
