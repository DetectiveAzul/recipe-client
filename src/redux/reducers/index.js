import { combineReducers } from 'redux';
import {
  REQUEST_RECIPES,
  RECEIVE_RECIPES
} from '../actions/index'

const initialState = { isFetching: false, recipes: []}

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
  recipesReducer
})

export default rootReducer;
