import React from "react";
import { AssociateImage } from "./styles";

const AssociateItem = ({ image, title, link }) => {
      return (
            <>
                  <AssociateImage to={link} target={link ? "_blank" : ""}>
                        <img src={image} alt={title} className="img-fluid" />
                  </AssociateImage>
            </>
      );
};

export default AssociateItem;
