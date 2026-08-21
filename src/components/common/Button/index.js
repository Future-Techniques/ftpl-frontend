import React from "react";
import { ButtonContainer } from "./styles";
import { Link } from "react-router-dom";

const CommonButton = ({ link, title, icon, download, active, onChange }) => {
      return (
            <ButtonContainer
                  className={active ? "active" : ""}
                  onClick={onChange}
            >
                  <Link to={link ? link : "#"} download={download || false}>
                        {title}{" "}
                        {icon ? (
                              <span className={icon}>download</span>
                        ) : (
                              <span className="material-symbols-outlined">
                                    east
                              </span>
                        )}
                  </Link>
            </ButtonContainer>
      );
};

export default CommonButton;
