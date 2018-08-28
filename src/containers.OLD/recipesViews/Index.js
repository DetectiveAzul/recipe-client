import React from 'react';
import Recipe from '../../components.OLD/Recipe.js';
import RecipeForm from '../../components.OLD/RecipeForm.js';


const Index = (props) => {

  const mapRecipes = (recipesData) => {
    return recipesData.map((recipeData, index) => {
      return(
        <Recipe
          key={index}
          recipeData={recipeData}
          delete={props.delete}
        />
      );
    });
  };

  return(
    <div className='index'>
      <RecipeForm submit={props.submit} />
      {mapRecipes(props.data)}
    </div>
  );
};

export default Index;
