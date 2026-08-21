import React from "react";
import { AssociateHead } from "./styles";

const AssociateHeading = ({ title }) => {
      return (
            <>
                  <AssociateHead>
                        <h2>{title || "Our Associates"}</h2>
                  </AssociateHead>
            </>
      );
};

export default AssociateHeading;
