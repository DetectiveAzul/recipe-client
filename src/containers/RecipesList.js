//TODO: Refactor to REDUX SINTAX
import ApiHelper from '../helpers/ApiHelper.js';
import React, {Component} from 'react';
import Recipe from '../components/Recipe.js';

class RecipesList extends Component {
  constructor() {
    super()
    this.state = {
      recipes: []
    };

    this.deleteButton = this.deleteButton.bind(this);
  };

  componentDidMount() {
    this.getRecipes();
  };

  getRecipes() {
    const api = new ApiHelper('recipes');
    api.get()
      .then((res) => {
        const newRecipes = this.mapRecipes(res.data);
        this.setState({
          recipes: newRecipes
        });
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

  render() {
    return(
    <div className="recipes-list">
      <h1>RecipesList</h1>
      {this.state.recipes}
    </div>
  )};
};

export default RecipesList;
