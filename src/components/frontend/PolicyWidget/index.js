import React from 'react';
import { WidgetBox } from '../../../frontend/faq/styles';
import {
      BlogWidget,
      BlogWidgetList,
      BlogWidgetTitle
} from '../../../frontend/blogDetail/styles';
import BlogWidgetItem from '../../blogs/BlogWidgetItem';

const PolicyWidget = () => {
      return (
            <>
                  <WidgetBox>
                        <BlogWidget className="mb-4">
                              <BlogWidgetTitle>
                                    <h3>Company Policy</h3>
                              </BlogWidgetTitle>
                              <BlogWidgetList>
                                    <ul>
                                          <BlogWidgetItem
                                                slug="/privacy-policy"
                                                title="Privacy Policy"
                                                policy={true}
                                          />
                                          <BlogWidgetItem
                                                slug="/terms-and-conditions"
                                                title="Terms & Conditions"
                                                policy={true}
                                          />
                                    </ul>
                              </BlogWidgetList>
                        </BlogWidget>
                  </WidgetBox>
            </>
      );
};

export default PolicyWidget;
