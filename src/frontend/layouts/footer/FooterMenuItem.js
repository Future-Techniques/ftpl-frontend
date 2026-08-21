import React from 'react';
import { Link } from 'react-router-dom';

const FooterMenuItem = ({ title, link }) => {
      return (
            <>
                  <li>
                        <Link
                              to={link ? link : '#'}
                              className="text-decoration-none"
                        >
                              {title}
                        </Link>
                  </li>
            </>
      );
};

export default FooterMenuItem;
