import React, {Component} from 'react';

class RecipeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredientNumber: 1,
      stepNumber: 1,
    }

    this.increaseIngredients = this.increaseIngredients.bind(this);
    this.increaseSteps = this.increaseSteps.bind(this);
  };

  increaseIngredients(event) {
    event.preventDefault();
    let oldNumber = this.state.ingredientNumber;
    oldNumber ++;
    this.setState({
      ingredientNumber: oldNumber
    });
  };

  increaseSteps(event) {
    event.preventDefault();
    let oldNumber = this.state.stepNumber;
    oldNumber ++;
    this.setState({
      stepNumber: oldNumber
    });
  };

  renderIngredientInputField() {
    const ingredients = []
    for (var i = 0; i < this.state.ingredientNumber; i++) {
      ingredients.push(
        <div key={i} className='ingredient-field'>
          <label>{`Ingredient ${i+1}`}</label>
          <input type='text' name='ingredient'/>
          <label>Quantity</label>
          <input type='number' name='quantity' />
          <label>Unit of Measurement</label>
          <input type='text' name='measurement' />
           { (i === this.state.ingredientNumber -1) ?
            <button onClick={this.increaseIngredients}>+</button> : "" }
        </div>
      )
    };
    return ingredients;
  };

  renderStepInputField() {
    const ingredients = []
    for (var i = 0; i < this.state.stepNumber; i++) {
      ingredients.push(
        <div key={i} className='step-field'>
          <label>{`Step number ${i+1}`}</label>
          <input type='text' name='step'/>
           { (i === this.state.stepNumber -1) ?
            <button onClick={this.increaseSteps}>+</button> : "" }
        </div>
      )
    };
    return ingredients;
  };

  submitRecipe(event) {
    event.preventDefault();
    console.log('Submitting Recipe');
    console.log(event.target.form);
  }

  render() {
    return(
      <fieldset>
        <legend>Add new recipe</legend>
          <form className='form' onSubmit={this.submitRecipe}>
            <h4>Info</h4>
            <label>Recipe Name</label>
            <input type='text' name='name'/>
            <br />
            <label>Description</label>
            <input type='text' name='description'/>
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
