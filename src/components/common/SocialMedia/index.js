import React from "react";
import { HeaderLinks } from "./styles";
import SocialMediaLink from "./SocialMediaLink";
import TwitterIcon from "../../../icons/TwitterIcons";

const SocialMedia = () => {
      return (
            <>
                  <HeaderLinks>
                        <SocialMediaLink
                              link="https://www.facebook.com/futuretechniques.com.np"
                              icon="bx bxl-facebook"
                              target={true}
                        />
                        <SocialMediaLink
                              link="https://www.instagram.com"
                              icon="bx bxl-instagram"
                              target={true}
                        />
                        <SocialMediaLink
                              link="https://www.twitter.com"
                              icon={<TwitterIcon />}
                              svg={true}
                              target={true}
                        />
                        <SocialMediaLink
                              link="https://www.linkedin.com/company/futuretechniques/"
                              icon="bx bxl-linkedin"
                              target={true}
                        />
                  </HeaderLinks>
            </>
      );
};

export default SocialMedia;
