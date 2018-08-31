import React, {Component} from 'react';
import { trimAndCapitalise } from '../../_helpers/prettify'
import units from '../../data/units'
//Styles
import {
  FormWrapper, LeftPart, StepsPart, TimesField, Box,
  DescriptionArea, NameField, StepArea, TitleSection, Button, SectionHeading,
  ButtonDiv, StepFieldList, IngredientInput, IngredientFieldList,
  SubmitButton
} from './styles/FormStyle.js';

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
    for (var i = 0; i < this.state.step_number; i++) {
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
      prep_time: event.target["prep_time"].value,
      cook_time: event.target["cook_time"].value
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
                  <input type='time' name="prep_time" />
                </Box>
                <Box>
                  <label><span role="img" aria-label="clock image">⏰</span>Cook:</label>
                  <input type='time' name="cook_time" />
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
