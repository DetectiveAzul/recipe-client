import React from 'react';
import Recipe from '../../components/Recipe.js';
import RecipeForm from '../../components/RecipeForm.js';


const Index = (props) => {

  const mapRecipes = (recipesData) => {
    return recipesData.map((recipeData, index) => {
      return(
        <Recipe
          key={index}
          recipeData={recipeData}
          delete={props.delete}
          submit={props.submit}
        />
      );
    });
  };

  return(
    <div className='index'>
      <RecipeForm submit={this.submit} />
      {mapRecipes(props.data)}
    </div>
  );
};

export default Index;
