import React from 'react';
import { prettyTime } from '../../_helpers/prettify'
//Style
import {
  TitleWrapper, DescriptionWrapper, TimeWrapper,
} from './styles/RecipeViewStyle.js';

const RecipeInfo = ({info}) => {
  return(
    <div className='recipe-info'>
      <TitleWrapper>{info.name}</TitleWrapper>
      <DescriptionWrapper>{info.description}</DescriptionWrapper>
      <TimeWrapper> <span role="img" aria-label="clock image">⏰</span> <strong>Prep:</strong> {prettyTime(info.prep_time)}
      <span style={{"margin-left":"20px"}}role="img" aria-label="clock image">⏰</span> <strong>Cook:</strong> {prettyTime(info.cook_time)}</TimeWrapper>

    </div>
  );
}
export default RecipeInfo;
