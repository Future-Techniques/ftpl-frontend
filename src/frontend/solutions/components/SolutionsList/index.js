import React from 'react';
import {
   SolutionsListContainer,
   SolutionsListContent,
   SolutionsListHeading
} from '../../styles';
import { Link } from 'react-router-dom';
import { solutions } from '../../../../data/solutionList';

const SolutionsList = () => {
   return (
      <>
         <SolutionsListContainer>
            <SolutionsListHeading>
               <h3>List of Solutions</h3>
            </SolutionsListHeading>
            <SolutionsListContent>
               <ul className="ps-0">
                  {solutions.map((solution, index) => (
                     <li key={index}>
                        <Link to="/" className="text-decoration-none">
                           {solution.title}
                        </Link>
                     </li>
                  ))}
               </ul>
            </SolutionsListContent>
         </SolutionsListContainer>
      </>
   );
};

export default SolutionsList;
