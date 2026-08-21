import React, { useContext, useEffect, useState } from 'react';
import { Accordion, Col, Container, Row, Spinner } from 'react-bootstrap';
import { FaqAccordion, FaqAccordionItem, WidgetTitle } from './styles';
import BreadcrumbBox from '../../components/common/BreadcrumbBox';
import FaqWidget from '../../components/frontend/FaqWidget';
import axios from 'axios';
import MetaContext from '../../stores/MetaContext';

const FaqPage = () => {
      const [loading, setLoading] = useState(false);
      const [types, setTypes] = useState([]);

      const metaCtx = useContext(MetaContext);
      metaCtx.handleSlug("faqs");

      const loadData = async () => {
            setLoading(true);

            await axios
                  .get(`${process.env.REACT_APP_SECRET_KEY}/api/faqs`, {
                        headers: {
                              apikey: process.env.REACT_APP_API_KEY
                        }
                  })
                  .then((response) => {
                        if (response.data.result === 'success') {
                              setTypes(response.data.types);
                        }
                  })
                  .catch((error) => {
                        console.log(error.message);
                  });

            setLoading(false);
      };

      useEffect(() => {
            loadData();
      }, []);

      return (
            <>
                  <BreadcrumbBox title="Frequently Asked Question" />
                  <Container className="my-5">
                        <Row>
                              <Col lg={4}>
                                    <FaqWidget catalogue={true} />
                              </Col>
                              <Col lg={8}>
                                    {!loading ? (
                                          types?.length > 0 ? (
                                                types?.map((type, index) => (
                                                      <FaqAccordionItem>
                                                            <WidgetTitle
                                                                  color={(
                                                                        props
                                                                  ) =>
                                                                        props
                                                                              .theme
                                                                              .primary
                                                                  }
                                                            >
                                                                  {type.title}
                                                            </WidgetTitle>
                                                            {type?.faqs
                                                                  ?.length >
                                                            0 ? (
                                                                  <FaqAccordion
                                                                        defaultActiveKey="0"
                                                                        flush
                                                                  >
                                                                        {type?.faqs?.map(
                                                                              (
                                                                                    item,
                                                                                    key
                                                                              ) => (
                                                                                    <Accordion.Item
                                                                                          eventKey={`${key}`}
                                                                                    >
                                                                                          <Accordion.Header>
                                                                                                {
                                                                                                      item.question
                                                                                                }
                                                                                          </Accordion.Header>
                                                                                          <Accordion.Body>
                                                                                                {
                                                                                                      item.answer
                                                                                                }
                                                                                          </Accordion.Body>
                                                                                    </Accordion.Item>
                                                                              )
                                                                        )}
                                                                  </FaqAccordion>
                                                            ) : null}
                                                      </FaqAccordionItem>
                                                ))
                                          ) : null
                                    ) : (
                                          <>
                                                <>
                                                      <div className="text-center">
                                                            <Spinner />
                                                      </div>
                                                </>
                                          </>
                                    )}
                              </Col>
                        </Row>
                  </Container>
            </>
      );
};

export default FaqPage;
