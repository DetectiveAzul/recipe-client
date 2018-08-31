import React, {Component} from 'react';
import fetch from 'cross-fetch';
import config from '../../_helpers/config.js';
import {trimAndCapitalise} from '../../_helpers/prettify'

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

  renderTimeFields(){
    return (
      <div>
        <input type='time' name="prep_time" defaultValue={`${this.state.info.prep_time}`} />
        <br />
        <label>Cook time: </label>
        <input type='time' name="cook_time" defaultValue={`${this.state.info.cook_time}`} />
      </div>
    )
  }

  renderIngredientInputField() {
    return this.state.ingredients.map((ingredient, index) => {
      return <div key={index} className='ingredient-field'>
        <label>{`Ingredient ${index+1}`}</label>
        <input required  type='text' name={`ingredient-${index}`} defaultValue={`${ingredient.name}`}/>
        <label>Quantity</label>
        <input required  type='number' name={`quantity-${index}`} defaultValue={`${this.state.quantities[index].ingredient_quantity}`} />
        <label>Unit of Measurement</label>
        <input required  type='text' name={`measurement-${index}`} defaultValue={`${this.state.measurements[index].name}`}  />
      </div>
    })
  }

  renderStepInputField() {
    return this.state.steps.map((step, index) => {
      return <div key={index} className='ingredient-field'>
        <label>{`Step ${index+1}`}</label>
        <input required  type='text' name={`step-${index}`} defaultValue={`${step.step_description}`}/>
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
      name: trimAndCapitalise(event.target.name.value),
      description: event.target.description.value,
      prep_time: event.target.prep_time.value,
      cook_time: event.target.cook_time.value
    }
  }

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
        recipe_id: this.state.id,
        ingredient_quantity: event.target[`quantity-${index}`].value,
        ingredient_id: this.state.ingredients[index].id,
        measurement_id: this.state.measurements[index].id
      };
    });
  };

  getSteps(event) {
    return this.state.steps.map((step, index) => {
      return {
        id: step.id,
        step_number: index,
        step_description: event.target[`step-${index}`].value
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
          <br />

          <label>Prep time: </label>
            { (this.state.info)? this.renderTimeFields():""}

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
