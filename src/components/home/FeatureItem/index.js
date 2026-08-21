import React from "react";
import {
      FeatureIcon,
      FeatureItemButton,
      FeatureItemCard,
      FeatureItemContent,
      FeatureItemIcon,
} from "./styles";
import { Link } from "react-router-dom";

const FeatureItem = ({ item }) => {
      return (
            <div>
                  <FeatureItemCard>
                        <FeatureItemIcon>
                              <FeatureIcon>
                                    <img
                                          src={item?.image}
                                          alt={item?.title}
                                          className="img-fluid"
                                    />
                              </FeatureIcon>
                        </FeatureItemIcon>
                        <FeatureItemContent>
                              <h3 className="text-center">{item?.title}</h3>
                              <p>{item?.description}</p>
                        </FeatureItemContent>
                        <FeatureItemButton>
                              <Link
                                    to={item?.link}
                                    className="text-decoration-none"
                              >
                                    <span className="material-symbols-outlined">
                                          chevron_right
                                    </span>
                              </Link>
                        </FeatureItemButton>
                  </FeatureItemCard>
            </div>
      );
};

export default FeatureItem;
