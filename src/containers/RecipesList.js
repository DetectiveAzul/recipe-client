//TODO: Refactor to REDUX SINTAX
import ApiHelper from '../helpers/ApiHelper.js';
import React, {Component} from 'react';
import Recipe from '../components/Recipe.js';
import RecipeForm from '../components/RecipeForm.js';

class RecipesList extends Component {
  constructor() {
    super()
    this.state = {
      recipes: []
    };

    this.deleteButton = this.deleteButton.bind(this);
    this.submitButton = this.submitButton.bind(this);
  };

  componentDidMount() {
    this.getRecipes();
  };

  getRecipes() {
    const api = new ApiHelper('recipes');
    api.get()
      .then((res) => {
        if (res.status !== 'error')
        {
          const newRecipes = this.mapRecipes(res.data);
          this.setState({
          recipes: newRecipes
          });
        } else {
          this.setState({
            recipes: []
          });
        };
      });
    };

  mapRecipes(recipesData) {
    return recipesData.map((recipeData, index) => {
      return(
        <Recipe
          key={index}
          id={recipeData.id}
          name={recipeData.name}
          description={recipeData.description}
          onClick={this.deleteButton}
        />
      );
    });
  };

  deleteButton(index) {
    const api = new ApiHelper('recipes');
    api.delete(index)
      .then(() => {
        this.getRecipes();
      });
  };

  submitButton(newRecipe) {
    const api = new ApiHelper('recipes');
    api.post(newRecipe)
      .then(() => {
        this.getRecipes();
      });
  };

  render() {
    return(
    <div className="recipes-list">
      <h1>RecipesList</h1>
      <RecipeForm submit={this.submitButton} />
      {this.state.recipes}
    </div>
  )};
};

export default RecipesList;
