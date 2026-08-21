import React, { useContext, useState } from "react";
import {
      ApplicationBox,
      AssociateBox,
      BannerBox,
      ContactBox,
      ProjectBox,
      SocialMediaBox,
      TestimonialBox,
} from "./component";
import MetaContext from "../../stores/MetaContext";

const Home = () => {
      const [status, setStatus] = useState("Facebook");
      const metaCtx = useContext(MetaContext);
      metaCtx?.handleSlug("home");

      return (
            <>
                  <BannerBox />
                  <ApplicationBox />
                  {/* <ServiceBox /> */}
                  <ProjectBox />
                  <TestimonialBox />
                  <ContactBox setStatus={setStatus} status={status} />
                  <SocialMediaBox setStatus={setStatus} status={status} />
                  <AssociateBox />
            </>
      );
};

export default Home;
