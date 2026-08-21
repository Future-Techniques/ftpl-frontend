import React from "react";
import { Link } from "react-router-dom";

const MenuLink = ({ slug, title, cat, subCategory }) => {
      let linkUrl;

      if (cat?.link) {
            linkUrl = cat?.link;
      } else if (cat?.subCategory) {
            linkUrl = `/category/${slug}/product`;
      } else {
            linkUrl = `/category/${slug}`;
      }

      const handleExternalLinkClick = (e, url) => {
            e.preventDefault(); // Prevent default behavior of the <a> tag
            window.open(url, "_blank", "noopener,noreferrer"); // Open in a new tab
      };

      return (
            <>
                  {cat?.link ? (
                        <Link
                              href={linkUrl}
                              onClick={(e) =>
                                    handleExternalLinkClick(e, linkUrl)
                              }
                        >
                              {title}
                        </Link>
                  ) : (
                        <Link to={linkUrl}>
                              {subCategory && (
                                    <i className="bx bx-chevron-right"></i>
                              )}
                              {title}
                        </Link>
                  )}
            </>
      );
};

export default MenuLink;
