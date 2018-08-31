import React from 'react';
import { prettyTime } from '../../_helpers/prettify'

const RecipeInfo = ({info}) => {
  return(
    <div className='recipe-info'>
      <h4>Recipe Info</h4>
      <p>{info.name}</p>
      <p>{info.description}</p>
      <p>Prep time: {prettyTime(info.prep_time)}</p>
      <p>Cook time: {prettyTime(info.cook_time)}</p>
    </div>
  );
}
export default RecipeInfo;
