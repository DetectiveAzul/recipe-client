import React from 'react';

const RecipeSteps = ({steps}) => {
  return(
    <div className='recipe-ingredients'>
      <h4>Steps</h4>
      <ol>
        {
          steps.map((step, index) => {
            return(
              <li key={index}>{step.step_description}</li>
            )
          })
        }
      </ol>
    </div>
  );
}
export default RecipeSteps;
