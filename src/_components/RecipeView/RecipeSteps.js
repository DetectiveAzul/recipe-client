import React from 'react';
//Styles
import { SideWrapper } from './styles/RecipeViewStyle.js';

const RecipeSteps = ({steps}) => {
  return(
    <SideWrapper>
      <strong><p>Steps</p></strong>
      <ol>
        {
          steps.map((step, index) => {
            return(
              <li key={index}>{step.step_description}</li>
            )
          })
        }
      </ol>
    </SideWrapper>
  );
}
export default RecipeSteps;
