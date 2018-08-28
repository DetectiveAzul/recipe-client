import { combineReducers } from 'redux'
import {
  ADD_RECIPE,
  REMOVE_RECIPE
} from '../actions/index.js';

function recipes(state = [], action) {
  switch(action.type) {
    case ADD_RECIPE:
      return [
        ...state, action.recipe
      ];
    default:
      return state;
  };
};

const recipeApp = combineReducers({
  recipes
});
​
export default recipeApp;
