import { combineReducers } from 'redux';
import  visibilityFilter from './visibilityFilterReducers.js';
import {
  REQUEST_RECIPES,
  RECEIVE_RECIPES,
  VisibilityFilters
} from '../actions/index'

const initialState = { isFetching: false, recipes: [], filter: VisibilityFilters.SHOW_ALL}

const recipesReducer = (state = initialState, action) => {
  switch(action.type){
    case REQUEST_RECIPES:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_RECIPES:
      return Object.assign({}, state, {
        isFetching: false,
        recipes: action.recipes,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  recipesReducer,
  visibilityFilter
})

export default rootReducer;
