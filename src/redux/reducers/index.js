import { combineReducers } from 'redux';
import  visibilityFilter from './visibilityFilterReducers.js';
import recipesReducer from './recipesReducer'


const rootReducer = combineReducers({
  recipesReducer,
  visibilityFilter
})

export default rootReducer;
