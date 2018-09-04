import { combineReducers } from 'redux';
import  visibilityFilter from './visibilityFilterReducers.js';
import recipesReducer from './recipesReducer.js';
import randomRecipeReducer from './randomRecipeReducer.js';


const rootReducer = combineReducers({
  recipesReducer,
  randomRecipeReducer,
  visibilityFilter
})

export default rootReducer;
