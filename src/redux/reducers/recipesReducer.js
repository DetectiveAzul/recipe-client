import {
  REQUEST_RECIPES,
  RECEIVE_RECIPES,
  DELETE_RECIPE_SUCCESS,
  ADD_RECIPE_SUCCESS
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
    case ADD_RECIPE_SUCCESS:
      const newRecipes = [...state.recipes, action.recipe]
      return Object.assign({}, state, {
        recipes: newRecipes
      })
    case DELETE_RECIPE_SUCCESS:
      const newState = state.recipes.filter(recipe =>
       recipe.id !== action.id)
      return  Object.assign({}, state, {
        recipes: newState
      })
    default:
      return state
  }
}

export default recipesReducer;
