import React, {Component} from 'react';
import fetch from 'cross-fetch';
import config from '../../_helpers/config.js';


class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id
    };
    this.handleUpdate = this.handleUpdate.bind(this);
  };

  componentWillMount() {
    return fetch(`${config.apiUrl}/recipes/${this.props.id}`)
      .then(response => response.json())
      .then((json) => {
        this.setState({
          info: json.data.info,
          ingredients: json.data.ingredients,
          quantities: json.data.quantities,
          measurements: json.data.measurements,
          steps: json.data.steps
          })
      });
  };

  renderNameField() {
    return <input required type='text' name='name' defaultValue={`${this.state.info.name}`} />
  }

  renderDescriptionField() {
    return <input type='text' name='description' defaultValue={`${this.state.info.description}`} />
  }

  renderIngredientInputField() {
    return this.state.ingredients.map((ingredient, index) => {
      return <div key={index} className='ingredient-field'>
        <label>{`Ingredient ${index+1}`}</label>
        <input required  type='text' name={`ingredient-${index}`} defaultValue={`${ingredient.name}`}/>
        <label>Quantity</label>
        <input required  type='number' name={`quantity-${index}`} defaultValue={`${this.state.quantities[index].ingredientquantity}`} />
        <label>Unit of Measurement</label>
        <input required  type='text' name={`measurement-${index}`} defaultValue={`${this.state.measurements[index].name}`}  />
      </div>
    })
  }

  renderStepInputField() {
    return this.state.steps.map((step, index) => {
      return <div key={index} className='ingredient-field'>
        <label>{`Step ${index+1}`}</label>
        <input required  type='text' name={`step-${index}`} defaultValue={`${step.stepdescription}`}/>
      </div>
    })
  }

  handleUpdate(event) {
    event.preventDefault();
    const newRecipe = ({
      info: this.getInfo(event),
      ingredients: this.getIngredients(event),
      quantities: this.getQuantities(event),
      measurements: this.getMeasurements(event),
      steps: this.getSteps(event)
    });
    this.props.editRecipe(newRecipe, this.state.id);
  };

  getInfo(event) {
    return {
      id: this.state.id,
      name: event.target.name.value,
      description: event.target.description.value
    };
  };

  getIngredients(event) {
    return this.state.ingredients.map((ingredient, index) => {
      return {
        id: ingredient.id,
        name: event.target[`ingredient-${index}`].value
      };
    });
  };

  getMeasurements(event) {
    return this.state.measurements.map((measurement, index) => {
      return {
        id: measurement.id,
        name: event.target[`measurement-${index}`].value
      };
    });
  };

  getQuantities(event) {
    return this.state.quantities.map((quantity, index) => {
      return {
        id: quantity.id,
        recipeId: this.state.id,
        ingredientQuantity: event.target[`quantity-${index}`].value,
        ingredientId: this.state.ingredients[index].id,
        measurementId: this.state.measurements[index].id
      };
    });
  };

  getSteps(event) {
    return this.state.steps.map((step, index) => {
      return {
        id: step.id,
        stepNumber: index,
        stepDescription: event.target[`step-${index}`].value
      };
    });
  };

  render() {
    return(
      <fieldset>
        <legend>Edit Recipe ID {`${this.state.id}`}</legend>
        <form className='form' onSubmit={this.handleUpdate}>

          <h4>Info</h4>
          <label>Recipe Name</label>
            { (this.state.info)? this.renderNameField():""}
          <br />

          <label>Description</label>
            { (this.state.info)? this.renderDescriptionField():""}
          <div className='ingredient-form-section'>
            <h4>Ingredients</h4>
            { (this.state.info)? this.renderIngredientInputField():"" }
          </div>

          <div className='steps-form-section'>
            <h4>Steps</h4>
            { (this.state.info)? this.renderStepInputField():"" }
          </div>

          <input type='submit' value='Update Recipe' />

        </form>
      </fieldset>
  )};
};
export default RecipeForm;
