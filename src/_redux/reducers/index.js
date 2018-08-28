import { combineReducers } from 'redux'
import recipes from './recipesReducers.js';

const recipeApp = combineReducers({
  recipes
});

export default recipeApp;
