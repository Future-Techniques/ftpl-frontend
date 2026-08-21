import React, { useEffect, useState } from 'react';
import { ApplicationHead } from './styles';

const ApplicationHeading = () => {
   const [isShow, setShow] = useState(true);

   useEffect(() => {
      const handleResize = () => {
         setShow(window.innerWidth > 600);
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   return (
      <>
         <ApplicationHead className="d-flex  justify-content-center flex-column">
            <h6>[ Solutions ]</h6>
            <h2>Thinking {isShow && <br />} Out of Box.</h2>
         </ApplicationHead>
      </>
   );
};

export default ApplicationHeading;
