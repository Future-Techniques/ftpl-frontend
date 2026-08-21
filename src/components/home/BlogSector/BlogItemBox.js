import React from 'react';

import { Link } from 'react-router-dom';
import {
      BlogItem,
      BlogItemAuthor,
      BlogItemButton,
      BlogItemContent,
      BlogItemDetail,
      BlogItemImage,
      BlogItemInfo,
      BlogItemTitle
} from './styles';

const BlogItemBox = ({ blog }) => {
      return (
            <>
                  <BlogItem>
                        <BlogItemImage>
                              <Link to={`/blogs/${blog.slug}`}>
                                    <img
                                          src={blog.image}
                                          alt={blog.title}
                                          className="img-fluid"
                                    />
                              </Link>
                        </BlogItemImage>
                        <BlogItemContent>
                              <BlogItemDetail>
                                    <BlogItemAuthor>
                                          <i className="bx bx-user"></i>
                                          <span>By {blog.user}</span>
                                    </BlogItemAuthor>
                                    <BlogItemAuthor>
                                          <i className="bx bxs-purchase-tag"></i>
                                          <Link
                                                to={`/blogs/categories/${blog.category_slug}`}
                                          >
                                                <span>{blog.category}</span>
                                          </Link>
                                    </BlogItemAuthor>
                              </BlogItemDetail>
                              <BlogItemTitle>
                                    <h3>
                                          <Link to={`/blogs/${blog.slug}`}>
                                                {blog.title}
                                          </Link>
                                    </h3>
                              </BlogItemTitle>
                              <BlogItemInfo>
                                    <BlogItemAuthor>
                                          <i className="bx bx-calendar"></i>
                                          <span>{blog.date}</span>
                                    </BlogItemAuthor>
                                    <BlogItemButton>
                                          <Link to={`/blogs/${blog.slug}`}>
                                                Read More
                                          </Link>
                                    </BlogItemButton>
                              </BlogItemInfo>
                        </BlogItemContent>
                  </BlogItem>
            </>
      );
};

export default BlogItemBox;
