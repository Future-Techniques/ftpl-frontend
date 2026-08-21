import React from 'react';
import {
      CatalogueWidget,
      QueryWidget,
      WidgetBox,
      WidgetButton,
      WidgetTitle
} from '../../../frontend/faq/styles';

const FaqWidget = ({ catalogue }) => {
      return (
            <>
                  <WidgetBox>
                        {catalogue && (
                              <CatalogueWidget>
                                    <WidgetTitle>Brochures</WidgetTitle>
                                    <p>
                                          View our 2020 financial prospectus
                                          brochure for an easy to read guide on
                                          all of the services offer.
                                    </p>
                                    <WidgetButton to="/catalogues">
                                          <i className="bx bx-file-blank"></i>{' '}
                                          Digital Catalogue
                                    </WidgetButton>
                              </CatalogueWidget>
                        )}

                        <QueryWidget className={`${!catalogue && 'mt-0'}` }>
                              <WidgetTitle>Need any help!</WidgetTitle>
                              <p>
                                    Find answers to frequently asked questions
                                    about Bizipress, contacts and general
                                    customer account information
                              </p>
                              <WidgetButton
                                    to="/contact-us"
                                    color={(props) => props.theme.primary}
                              >
                                    Contact Us
                              </WidgetButton>
                        </QueryWidget>
                  </WidgetBox>
            </>
      );
};

export default FaqWidget;
