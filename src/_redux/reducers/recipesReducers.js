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

export default recipes;
