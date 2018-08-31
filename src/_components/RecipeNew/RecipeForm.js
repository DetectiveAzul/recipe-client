import React, {Component} from 'react';
import { trimAndCapitalise } from '../../_helpers/prettify'
import units from '../../data/units'
//Styles
import {
  FormWrapper, LeftPart, RightPart, StepsPart, TimesField, Box,
  DescriptionArea, NameField, StepArea, TitleSection, Button, SectionHeading,
  ButtonDiv, StepFieldList, IngredientInput, IngredientFieldList,
  SubmitButton
} from './styles/FormStyle.js';

class RecipeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredientNumber: 1,
      stepNumber: 1,
    }

    this.increaseIngredients = this.increaseIngredients.bind(this);
    this.increaseSteps = this.increaseSteps.bind(this);
    this.decreaseIngredients = this.decreaseIngredients.bind(this);
    this.decreaseSteps = this.decreaseSteps.bind(this);
    this.submitRecipe = this.submitRecipe.bind(this);
    this.createSelectItems = this.createSelectItems.bind(this);
  };

  increaseIngredients(event) {
    event.preventDefault();
    let oldNumber = this.state.ingredientNumber;
    oldNumber ++;
    this.setState({
      ingredientNumber: oldNumber
    });
  };

  createSelectItems(data){
    const newData = data.map((item, i) => <option key={i} value={item}>{item}</option>)
    return newData
  }

  decreaseIngredients(event) {
    event.preventDefault();
    let oldNumber = this.state.ingredientNumber;
    if (oldNumber > 1) oldNumber --;
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

  decreaseSteps(event) {
    event.preventDefault();
    let oldNumber = this.state.stepNumber;
    if (oldNumber > 1) oldNumber --;
    this.setState({
      stepNumber: oldNumber
    });
  };

  renderIngredientInputField() {
    const ingredients = []
    for (var i = 0; i < this.state.ingredientNumber; i++) {
      ingredients.push(
        <div key={i} className='ingredient-field'>
          <label>{i+1}.</label>
          <IngredientInput required type="number" name={`quantity-${i}`} step="any" placeholder="Amount" />
          <select  name={`measurement-${i}`}>
            {this.createSelectItems(units)}
          </select>
          <IngredientInput required type='text' name={`ingredient-${i}`} placeholder="Ingredient"/>
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
          <label>{`${i+1}.`}</label>
          <StepArea required type='text' name={`step-${i}`} rows="1"/>
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
      preptime: event.target.preptime.value,
      cooktime: event.target.cooktime.value
    }
  }

  getIngredients(event) {
    const ingredients = [];
    for (var i = 0; i < this.state.ingredientNumber; i++) {
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
    for (var i = 0; i < this.state.stepNumber; i++) {
      const newStep = {
        stepNumber: i+1,
        stepDescription: event.target[`step-${i}`].value
      }
      steps.push(newStep);
    }
    return steps;
  }

  render() {
    return(
          <FormWrapper className='form' onSubmit={this.submitRecipe}>
            <LeftPart>
              <Box>
                <NameField required type='text' name='name' placeholder='Recipe Name'/>
              </Box>
              <Box>
                <DescriptionArea type='text' name='description' placeholder='Brief description of the recipe'/>
              </Box>
              <TimesField>
                <Box>
                  <label><span role="img" aria-label="clock image">⏰</span>Prep:</label>
                  <input type='time' name="preptime" />
                </Box>
                <Box>
                  <label><span role="img" aria-label="clock image">⏰</span>Cook:</label>
                  <input type='time' name="cooktime" />
                </Box>
              </TimesField>
              <Box>
                <TitleSection>
                  <SectionHeading>Ingredients</SectionHeading>
                  <ButtonDiv>
                    <Button onClick={this.increaseIngredients}>+</Button>
                    <Button onClick={this.decreaseIngredients}>-</Button>
                  </ButtonDiv>
                </TitleSection>
                <IngredientFieldList>
                  { this.renderIngredientInputField() }
                </IngredientFieldList>
              </Box>
            </LeftPart>
            <StepsPart>
              <TitleSection>
                <SectionHeading>Steps</SectionHeading>
                <ButtonDiv>
                  <Button onClick={this.increaseSteps}>+</Button>
                  <Button onClick={this.decreaseSteps}>-</Button>
                </ButtonDiv>
              </TitleSection>
              <StepFieldList>
                { this.renderStepInputField() }
              </StepFieldList>
              <SubmitButton type='submit' value='Add Recipe' />
            </StepsPart>
          </FormWrapper>
    )
  };
};
export default RecipeForm;
