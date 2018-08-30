import React from 'react';
import { prettyTime } from '../../_helpers/prettify'

const RecipeInfo = ({info}) => {
  return(
    <div className='recipe-info'>
      <h4>Recipe Info</h4>
      <p>{info.name}</p>
      <p>{info.description}</p>
      <p>Prep time: {prettyTime(info.preptime)}</p>
      <p>Cook time: {prettyTime(info.cooktime)}</p>
    </div>
  );
}
export default RecipeInfo;
