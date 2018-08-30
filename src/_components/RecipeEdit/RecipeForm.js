import React, {Component} from 'react';
import fetch from 'cross-fetch';
import config from '../../_helpers/config.js';


class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id
    };
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
        <input required readOnly type='text' name={`ingredient-${index}`} defaultValue={`${ingredient.name}`}/>
        <label>Quantity</label>
        <input required readOnly type='number' name={`quantity-${index}`} defaultValue={`${this.state.quantities[index].ingredientquantity}`} />
        <label>Unit of Measurement</label>
        <input required readOnly type='text' name={`measurement-${index}`} defaultValue={`${this.state.measurements[index].name}`}  />
      </div>
    })
  }

  renderStepInputField() {
    return this.state.steps.map((step, index) => {
      return <div key={index} className='ingredient-field'>
        <label>{`Step ${index+1}`}</label>
        <input required readOnly type='text' name={`step-${index}`} defaultValue={`${step.stepdescription}`}/>
      </div>
    })
  }

  render() {
    return(
      <fieldset>
        <legend>Edit Recipe ID {`${this.state.id}`}</legend>
        <form className='form'>

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
