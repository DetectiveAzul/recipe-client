import fetch from 'cross-fetch';
import ApiHelper from '../../_helpers/ApiHelper'

const ROOT_URL = 'http://localhost:3001/api';

export const REQUEST_RECIPES = "REQUEST_RECIPES";
export const RECEIVE_RECIPES = "RECEIVE_RECIPES";
export const ADD_RECIPE = 'ADD_RECIPE';
export const DELETE_RECIPE_SUCCESS = 'DELETE_RECIPE_SUCCESS';
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_NONE: 'SHOW_NONE'
};

export function requestRecipes() {
  return{
    type: REQUEST_RECIPES
  }
}

export function receiveRecipes(json){
  return{
    type: RECEIVE_RECIPES,
    recipes: json.data,
    receivedAt: Date.now()
  }
}

export function fetchRecipes() {
  return dispatch => {
    dispatch(requestRecipes())
    return fetch(`${ROOT_URL}/recipes`)
      .then(response => response.json())
      .then(json => dispatch(receiveRecipes(json)))
  }
}

export function deleteRecipeSuccess(id) {
  return{
    type: DELETE_RECIPE_SUCCESS,
    id
  }
}

export function deleteRecipe(id){
  const api = new ApiHelper('recipes')
    return dispatch => {
      api.delete(id)
      .then(() => {
        dispatch(deleteRecipeSuccess(id))
    })
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};
