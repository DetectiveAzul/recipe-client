import React from 'react';

const RecipeInfo = ({info}) => {
  return(
    <div className='recipe-info'>
      <h4>Recipe Info</h4>
      <p>{info.name}</p>
      <p>{info.description}</p>
    </div>
  );
}
export default RecipeInfo;
