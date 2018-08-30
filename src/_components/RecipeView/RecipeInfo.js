import React from 'react';

const RecipeInfo = ({info}) => {
  return(
    <div className='recipe-info'>
      <h4>Recipe Info</h4>
      <p>{info.name}</p>
      <p>{info.description}</p>
      <p>Prep time: {info.preptime}</p>
      <p>Cook time: {info.cooktime}</p>
    </div>
  );
}
export default RecipeInfo;
