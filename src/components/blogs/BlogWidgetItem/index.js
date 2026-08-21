import React from 'react';
import { Link } from 'react-router-dom';

const BlogWidgetItem = ({ slug, title, blogs, policy }) => {
      return (
            <>
                  <li>
                        <Link
                              to={`${!policy ? '/blogs/categories/' : ''}${
                                    slug ? slug : '#'
                              }`}
                        >
                              <div>{title}</div>
                              <div>{blogs}</div>
                        </Link>
                  </li>
            </>
      );
};

export default BlogWidgetItem;
