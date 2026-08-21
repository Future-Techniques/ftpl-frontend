import React, { useContext } from "react";
import BreadcrumbBox from "../../components/common/BreadcrumbBox";
import { AssociateBox } from "../home/component";
import MetaContext from "../../stores/MetaContext";

const OurAssociates = () => {
      const metaCtx = useContext(MetaContext);
      metaCtx.handleSlug("our-associates");

      return (
            <>
                  <BreadcrumbBox title={"Our Associates"} />
                  <AssociateBox limit={2} />
            </>
      );
};

export default OurAssociates;
