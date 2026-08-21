import axios from "axios";
import React, { useEffect, useState } from "react";
import { FooterContent, FooterHeading, FooterItem } from "./styles";
import FooterMenuItem from "./FooterMenuItem";

const FooterServices = () => {
      const [loading, setLoading] = useState(false);
      const [services, setServices] = useState([]);

      const loadData = async () => {
            setLoading(true);

            await axios
                  .get(`${process.env.REACT_APP_SECRET_KEY}/api/services`, {
                        headers: {
                              apikey: `${process.env.REACT_APP_API_KEY}`,
                        },
                  })
                  .then((response) => {
                        if (response.data.result === "success") {
                              setServices(response.data.services);
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
                  <FooterItem>
                        <FooterHeading>
                              <h4>Our Services</h4>
                        </FooterHeading>
                        <FooterContent>
                              <ul>
                                    {!loading
                                          ? services
                                                  ?.slice(0, 5)
                                                  ?.map((item, index) => (
                                                        <FooterMenuItem
                                                              title={
                                                                    item?.title
                                                              }
                                                              key={index}
                                                              link={`/services/${item?.slug}`}
                                                        />
                                                  ))
                                          : null}
                              </ul>
                        </FooterContent>
                  </FooterItem>
            </>
      );
};

export default FooterServices;
