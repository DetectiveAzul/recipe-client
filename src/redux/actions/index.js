import fetch from 'cross-fetch';

const ROOT_URL = 'http://localhost:3001/api';

export const REQUEST_RECIPES = "REQUEST_RECIPES";
export const RECEIVE_RECIPES = "RECEIVE_RECIPES";
export const ADD_RECIPE = 'ADD_RECIPE';
export const REMOVE_RECIPE = 'REMOVE_RECIPE';
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

export function setVisibilityFilter(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};
