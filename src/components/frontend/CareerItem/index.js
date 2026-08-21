import React from 'react';
import {
      CareerItemContent,
      CareerItemHeader,
      CareerItemImage,
      CareerItemLink,
      CareerItemTitle
} from './styles';
import { Spinner } from 'react-bootstrap';

const CareerItem = ({ loading, careers }) => {
      return (
            <>
                  {!loading ? (
                        careers?.length > 0 &&
                        careers?.map((item, index) => (
                              <CareerItemLink
                                    to={`/careers/${item.slug}`}
                                    className="border p-2"
                                    key={index}
                              >
                                    <CareerItemHeader>
                                          <CareerItemImage>
                                                <img
                                                      src="/favicon.png"
                                                      alt="Future Techniques Pvt Ltd"
                                                />
                                          </CareerItemImage>
                                          <CareerItemTitle>
                                                <h2 className="fs-4">
                                                      {item.title}
                                                </h2>
                                                <span className="text-muted">
                                                      Date: {item.deadline}
                                                </span>
                                          </CareerItemTitle>
                                    </CareerItemHeader>
                                    <CareerItemContent>
                                          <ul>
                                                <li>
                                                      <span>Salary :</span>
                                                      <span>{item.salary}</span>
                                                </li>
                                                <li>
                                                      <span>Candidate :</span>
                                                      <span>
                                                            {item.candidate}
                                                      </span>
                                                </li>
                                                <li>
                                                      <span>Deadline :</span>
                                                      <span>
                                                            {item.deadline}
                                                      </span>
                                                </li>
                                          </ul>
                                    </CareerItemContent>
                              </CareerItemLink>
                        ))
                  ) : (
                        <Spinner />
                  )}
            </>
      );
};

export default CareerItem;
