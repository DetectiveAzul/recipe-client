import {
  REQUEST_RANDOM_RECIPE,
  RECEIVE_RANDOM_RECIPE
} from '../actions/index'

const initialState = {isFetching: false, randomRecipe: null}

const randomRecipeReducer = (state = initialState, action) => {
  switch(action.type){
    case REQUEST_RANDOM_RECIPE:
      return Object.assign({}, state, {
        isFetching: true
    })
    case RECEIVE_RANDOM_RECIPE:
      return Object.assign({}, state, {
        isFetching: false,
        randomRecipe: action.randomRecipe
    })
    default:
      return state
  }
}

export default randomRecipeReducer;
