import React from 'react';
import { BreadcrumbColor, BreadcrumbContainer, BreadcrumbItem } from './styles';
import { Breadcrumb, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BreadcrumbBox({ link, title, linkTitle, otherLink, otherTitle }) {
      return (
            <>
                  <BreadcrumbContainer>
                        <BreadcrumbColor />
                        <Container>
                              <Breadcrumb className="breadcrumb-container">
                                    <li className="breadcrumb-item">
                                          <Link to="/">Home</Link>
                                    </li>
                                    {otherTitle && (
                                          <li className="breadcrumb-item">
                                                <Link to={otherLink}>
                                                      {otherTitle}
                                                </Link>
                                          </li>
                                    )}
                                    {link && (
                                          <li className="breadcrumb-item">
                                                <Link to={link}>
                                                      {linkTitle}
                                                </Link>
                                          </li>
                                    )}
                                    <Breadcrumb.Item active>
                                          {title}
                                    </Breadcrumb.Item>
                              </Breadcrumb>
                        </Container>
                  </BreadcrumbContainer>
            </>
      );
}

export default BreadcrumbBox;
