import React from 'react';
import { Link } from 'react-router-dom';
import {
   ProjectSiderButton,
   ProjectsSliderContainer,
   ProjectSliderContent,
   ProjectSliderImage,
   ProjectSliderLocation,
   ProjectSliderNumber,
   ProjectSliderTitle
} from './styles';

const ProjectItem = ({ title, image, index, location }) => {
   return (
      <>
         <ProjectsSliderContainer>
            <ProjectSliderImage>
               <img src={image} alt={title} />
            </ProjectSliderImage>
            <ProjectSliderContent>
               <ProjectSiderButton>
                  <Link to="/projectdetail">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48"
                        viewBox="0 96 960 960"
                        width="48"
                     >
                        <path d="m564.077 787.077-22.231-21.231 175.692-175.692H183.846v-30.769h533.692L541.615 383.461l22.231-21.23 212.539 212.538-212.308 212.308Z" />
                     </svg>
                  </Link>
               </ProjectSiderButton>
               <ProjectSliderTitle>
                  <h4 className="text-uppercase">{title}</h4>
                  <hr />
               </ProjectSliderTitle>
               <ProjectSliderLocation>{location}</ProjectSliderLocation>
               <ProjectSliderNumber>
                  <span>/{index}</span>
               </ProjectSliderNumber>
            </ProjectSliderContent>
         </ProjectsSliderContainer>
         {/* <div className="project__slider--container">
                        <div className="project__slider--image">
                              <img src="/images/img/projects/project1.jpg"></img>
                        </div>
                        <div className="project__slider--content w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                              <div className="project__slider--button mb-5">
                                    <Link to="/">
                                          <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="48"
                                                viewBox="0 96 960 960"
                                                width="48"
                                          >
                                                <path d="m564.077 787.077-22.231-21.231 175.692-175.692H183.846v-30.769h533.692L541.615 383.461l22.231-21.23 212.539 212.538-212.308 212.308Z" />
                                          </svg>
                                    </Link>
                              </div>
                              <div className="project__slider--title mb-3">
                                    <h4 className="text-uppercase">
                                          home decors
                                    </h4>
                                    <hr />
                              </div>
                              <div className="project__slider--location">
                                    Lazimpat, Kathmandu
                              </div>
                        </div>
                        <div className="project__slider--number">
                              <span>/1</span>
                        </div>
                  </div> */}
      </>
   );
};

export default ProjectItem;
