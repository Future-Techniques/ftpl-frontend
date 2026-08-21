import React from "react";
import { Link } from "react-router-dom";
import { HeaderLinkItem } from "./styles";

const SocialMediaLink = ({ icon, link, svg, target }) => {
      return (
            <>
                  <HeaderLinkItem>
                        <Link
                              to={link}
                              target={target ? "_blank" : ""}
                              className="text-decoration-none d-flex align-items-center"
                        >
                              {svg ? icon : <i className={icon}></i>}
                        </Link>
                  </HeaderLinkItem>
            </>
      );
};

export default SocialMediaLink;
