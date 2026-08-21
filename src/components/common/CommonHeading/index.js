import React from 'react';
import { CustomHeadingContainer } from './styles';

const CustomHeading = ({ title, fontSize }) => {
      return (
            <>
                  <CustomHeadingContainer fontSize={fontSize}>
                        <h3 className="title" style={{ fontSize: fontSize }}>
                              {title}
                        </h3>
                  </CustomHeadingContainer>
            </>
      );
};

export default CustomHeading;
