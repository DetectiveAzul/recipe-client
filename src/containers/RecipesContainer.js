//TODO: Refactor to REDUX SINTAX
import ApiHelper from '../helpers/ApiHelper.js';
import React, {Component} from 'react';
import { Router } from '@reach/router';
import Show from './recipesViews/Show.js';
import Index from './recipesViews/Index.js';

class RecipesList extends Component {
  constructor() {
    super()
    this.state = {
      recipes: []
    };

    this.delete = this.delete.bind(this);
    this.submit = this.submit.bind(this);
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
          this.setState({
          recipes: res.data
          });
        } else {
          this.setState({
            recipes: []
          });
        };
      });
  };

  createShowPages() {
    return this.state.recipes.map((recipe) => {
      return (
        <Show
        path={`${recipe.id}`}
      />
    )
    });
  };

  delete(index) {
    const api = new ApiHelper('recipes');
    api.delete(index)
      .then(() => {
        this.getRecipes();
      });
  };

  submit(newRecipe) {
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
      <Router>
        <Index
          path="/"
          data={this.state.recipes}
          delete={this.delete}
          submit={this.submit}
        />
        {this.createShowPages()}
      </Router>
    </div>
  )};
};

export default RecipesList;
