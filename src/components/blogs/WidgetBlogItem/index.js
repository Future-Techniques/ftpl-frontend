import React from 'react';
import { WidgetBlogItemContent, WidgetBlogItemImage, WidgetBlogItemInfo } from './styles';
import { Link } from 'react-router-dom';

const WidgetBlogItem = ({ title, image, date, slug }) => {
      return (
            <>
                  <WidgetBlogItemContent>
                        <WidgetBlogItemImage>
                              <img src={image} alt={title} />
                        </WidgetBlogItemImage>
                        <WidgetBlogItemInfo>
                              <Link to={`/blogs/${slug}`}>
                                    {title}
                              </Link>
                              <p>{date}</p>
                        </WidgetBlogItemInfo>
                  </WidgetBlogItemContent>
            </>
      );
};

export default WidgetBlogItem;
