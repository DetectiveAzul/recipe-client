import React, {Component} from 'react';
import { trimAndCapitalise } from '../../_helpers/prettify'
import units from '../../data/units'

class RecipeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredient_number: 1,
      step_number: 1,
    }

    this.increaseIngredients = this.increaseIngredients.bind(this);
    this.increaseSteps = this.increaseSteps.bind(this);
    this.decreaseIngredients = this.decreaseIngredients.bind(this);
    this.decreaseSteps = this.decreaseSteps.bind(this);
    this.submitRecipe = this.submitRecipe.bind(this);
    this.createSelectItems = this.createSelectItems.bind(this);
  };

  createSelectItems(data){
    const newData = data.map((item, i) => <option key={i} value={item}>{item}</option>)
    return newData
  }

  increaseIngredients(event) {
    event.preventDefault();
    let oldNumber = this.state.ingredient_number;
    oldNumber ++;
    this.setState({
      ingredient_number: oldNumber
    });
  };

  decreaseIngredients(event) {
    event.preventDefault();
    let oldNumber = this.state.ingredient_number;
    if (oldNumber > 1) oldNumber --;
    this.setState({
      ingredient_number: oldNumber
    });
  };

  increaseSteps(event) {
    event.preventDefault();
    let oldNumber = this.state.step_number;
    oldNumber ++;
    this.setState({
      step_number: oldNumber
    });
  };

  decreaseSteps(event) {
    event.preventDefault();
    let oldNumber = this.state.step_number;
    if (oldNumber > 1) oldNumber --;
    this.setState({
      step_number: oldNumber
    });
  };

  renderIngredientInputField() {
    const ingredients = []
    for (var i = 0; i < this.state.ingredient_number; i++) {
      ingredients.push(
        <div key={i} className='ingredient-field'>
          <label>Amount</label>
          <input required type="number" name={`quantity-${i}`} step="any" />
          <label>Units</label>
          <select  name={`measurement-${i}`}>
            {this.createSelectItems(units)}
          </select>
          <label>{`Ingredient ${i+1}`}</label>
          <input required type='text' name={`ingredient-${i}`}/>
           { (i === this.state.ingredient_number -1) ?
            <div className="control-buttons">
              <button onClick={this.increaseIngredients}>+</button>
              <button onClick={this.decreaseIngredients}>-</button>
            </div>
            : "" }
        </div>
      )
    };
    return ingredients;
  };

  renderStepInputField() {
    const ingredients = []
    for (var i = 0; i < this.state.step_number; i++) {
      ingredients.push(
        <div key={i} className='step-field'>
          <label>{`Step number ${i+1}`}</label>
          <textarea required type='text' name={`step-${i}`}/>
           { (i === this.state.step_number -1) ?
            <div className="control-buttons">
              <button onClick={this.increaseSteps}>+</button>
              <button onClick={this.decreaseSteps}>-</button>
            </div>
             : "" }
        </div>
      )
    };
    return ingredients;
  };

  submitRecipe(event) {
    event.preventDefault();
    const recipe = {
      info: this.getInfo(event),
      ingredients: this.getIngredients(event),
      steps: this.getSteps(event)
    }
    this.props.addRecipe(recipe);
  }

  getInfo(event) {
    return {
      name: trimAndCapitalise(event.target.name.value),
      description: event.target.description.value,
      prep_time: event.target.prep_time.value,
      cook_time: event.target.cook_time.value
    }
  }

  getIngredients(event) {
    const ingredients = [];
    for (var i = 0; i < this.state.ingredient_number; i++) {
      const newIngredient = {
        ingredient: trimAndCapitalise(event.target[`ingredient-${i}`].value),
        quantity: event.target[`quantity-${i}`].value,
        measurement: event.target[`measurement-${i}`].value,
      }
      ingredients.push(newIngredient);
    }
    return ingredients;
  }

  getSteps(event) {
    const steps = [];
    for (var i = 0; i < this.state.step_number; i++) {
      const newStep = {
        step_number: i+1,
        step_description: event.target[`step-${i}`].value
      }
      steps.push(newStep);
    }
    return steps;
  }

  render() {
    return(
      <fieldset>
        <legend>Add new recipe</legend>
          <form className='form' onSubmit={this.submitRecipe}>
            <h4>Info</h4>
            <label>Recipe Name</label>
            <input required type='text' name='name'/>
            <br />
            <label>Description</label>
            <input type='text' name='description'/>
            <br />
            <label>Prep time: </label>
            <input type='time' name="prep_time" />
            <br />
            <label>Cook time: </label>
            <input type='time' name="cook_time" />
            <div className='ingredient-form-section'>
              <h4>Ingredients</h4>
              { this.renderIngredientInputField() }
            </div>
            <div className='steps-form-section'>
              <h4>Steps</h4>
              { this.renderStepInputField() }
            </div>
            <input type='submit' value='Add Recipe' />
          </form>
      </fieldset>
    )
  };
};
export default RecipeForm;
