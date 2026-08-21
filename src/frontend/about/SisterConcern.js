import React, { useContext, useEffect, useState } from "react";
import BreadcrumbBox from "../../components/common/BreadcrumbBox";
import { SisterConcernContainer } from "./style";
import SisterConcernItem from "../../components/about/SisterConcernItem";
import MetaContext from "../../stores/MetaContext";
import { Spinner } from "react-bootstrap";
import axios from "axios";

const SisterConcern = () => {
      const metaCtx = useContext(MetaContext);
      metaCtx.handleSlug("sister-concerns");

      const [loading, setLoading] = useState(false);
      const [concerns, setConcerns] = useState([]);

      const loadData = async () => {
            setLoading(true);
            await axios
                  .get(
                        `${process.env.REACT_APP_SECRET_KEY}/api/sister-concern`,
                        {
                              headers: {
                                    apikey: process.env.REACT_APP_API_KEY,
                              },
                        }
                  )
                  .then((response) => {
                        if (response.data.result === "success") {
                              setConcerns(response.data.concerns);
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
                  <BreadcrumbBox title={"Sister Concern"} />
                  <SisterConcernContainer>
                        {!loading ? (
                              concerns?.map((item, index) => (
                                    <SisterConcernItem
                                          item={item}
                                          index={++index}
                                          key={index}
                                    />
                              ))
                        ) : (
                              <Spinner />
                        )}
                  </SisterConcernContainer>
            </>
      );
};

export default SisterConcern;
