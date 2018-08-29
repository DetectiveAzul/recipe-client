import {
  REQUEST_RECIPES,
  RECEIVE_RECIPES,
  DELETE_RECIPE_SUCCESS
} from '../actions/index'

const initialState = { isFetching: false, recipes: [],}

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
    case DELETE_RECIPE_SUCCESS:
      const newState = Object.assign({}, state);
      const indexOfRecipeToDelete = state.findIndex(recipe => {
        return recipe.id === action.recipe.id
      })
      newState.splice(indexOfRecipeToDelete, 1);
      return newState
    default:
      return state
  }
}

export default recipesReducer;
