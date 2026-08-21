import React from 'react';
import {
   MobileHeaderContainer,
   MobileHeaderIcon,
   MobileHeaderItem,
   MobileHeaderTitle,
   MobileMenuWrapper
} from './styles';
import { Link } from 'react-router-dom';

const mobileCategory = [
   {
      id: 1,
      title: 'Home',
      icon: 'house',
      link: '/'
   },
   {
      id: 2,
      title: 'Products',
      icon: 'inventory_2',
      link: '/'
   },
   {
      id: 3,
      title: 'Enquiry',
      icon: 'mail',
      link: '/'
   },
   {
      id: 4,
      title: 'Top',
      icon: 'straight',
      link: '#'
   }
];

const MobileHeader = () => {
   return (
      <>
         <MobileHeaderContainer>
            <MobileMenuWrapper className="d-flex align-items-center justify-content-between">
               {mobileCategory.map((item, index) => (
                  <MobileHeaderItem key={index}>
                     <Link to={item.link} className="text-decoration-none">
                        <MobileHeaderIcon>
                           <span class="material-symbols-outlined">
                              {item.icon}
                           </span>
                        </MobileHeaderIcon>
                        <MobileHeaderTitle>{item.title}</MobileHeaderTitle>
                     </Link>
                  </MobileHeaderItem>
               ))}
            </MobileMenuWrapper>
         </MobileHeaderContainer>
      </>
   );
};

export default MobileHeader;
