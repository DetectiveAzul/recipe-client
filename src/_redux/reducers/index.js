import { combineReducers } from 'redux';
import recipes from './recipesReducers.js';
import visibilityFilter from './visibilityFilterReducers.js';

const recipeApp = combineReducers({
  recipes,
  visibilityFilter
});

export default recipeApp;
