import React from 'react';

const RecipeIngredients = ({ingredients, quantities, measurements}) => {
  return(
    <div className='recipe-ingredients'>
      <h4>Ingredients</h4>
      <ul>
        {
          ingredients.map((ingredient, index) => {
            return(
              <li key={index}>
                {`${ingredient.name},
                ${quantities[index].ingredientquantity}
                ${measurements[index].name}`}</li>
            )
          })
        }
      </ul>
    </div>
  );
}
export default RecipeIngredients;