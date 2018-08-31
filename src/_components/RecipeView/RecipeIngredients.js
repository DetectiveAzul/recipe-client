import React from 'react';
//Style
import { SideWrapper } from './styles/RecipeViewStyle.js';

const RecipeIngredients = ({ingredients, quantities, measurements}) => {
  return(
    <SideWrapper>
      <strong><p>Ingredients</p></strong>
      <ul>
        {
          ingredients.map((ingredient, index) => {
            return(
              <li key={index}>
                {`${quantities[index].ingredientquantity}
                ${measurements[index].name}
                ${ingredient.name}`}</li>
            )
          })
        }
      </ul>
    </SideWrapper>
  );
}
export default RecipeIngredients;
