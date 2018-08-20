import React, {Component} from 'react';
import ApiHelper from '../helpers/ApiHelper'
import Ingredient from '../components/Ingredient'

class IngredientsList extends Component {
  constructor() {
    super()
    this.state = {
      ingredients: []
    };

    this.deleteButton = this.deleteButton.bind(this)
  };

  getIngredients() {
    const api = new ApiHelper('ingredients');
      api.get()
    .then(res =>{
      if(res.status !== 'error') {
        const ingredients = this.mapIngredients(res.data);
        this.setState({
          ingredients: ingredients
        });
      } else {
        this.setState({
          ingredients: []
        })
      };
    });
  };

  componentDidMount() {
    this.getIngredients();
  }

  mapIngredients(ingredientData) {
    return ingredientData.map((ingredient, index) => {
      return(
        <Ingredient
          key={index}
          id={ingredient.id}
          name={ingredient.name}
          onClick={this.deleteButton}
          />
      );
    })
  };

  deleteButton(index) {
    const api = new ApiHelper('ingredients');
    api.delete(index)
      .then(() => {
        this.getIngredients();
      });
  };

  render() {
    return(
      <div className="ingredients-list">
      IngredientsList
        <ul>
          {this.state.ingredients}
        </ul>
      </div>
    )};
  }

  export default IngredientsList;
