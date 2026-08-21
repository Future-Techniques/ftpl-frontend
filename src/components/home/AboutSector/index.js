import React from 'react';
import { AboutSectorContent, AboutSectorIcon, AboutSectorItem } from './styles';

const AboutSectorBox = ({ image, title, description }) => {
      return (
            <>
                  <AboutSectorItem
                        data-aos="fade-left"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-sine"
                  >
                        <AboutSectorIcon>
                              <img src={image} alt="Future Techniques svg" />
                        </AboutSectorIcon>
                        <AboutSectorContent>
                              <h4>{title}</h4>
                              <p>{description}</p>
                        </AboutSectorContent>
                  </AboutSectorItem>
            </>
      );
};

export default AboutSectorBox;
