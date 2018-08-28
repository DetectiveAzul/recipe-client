import { connect } from 'react-redux';
import RecipeSmallList from '../_components/RecipeSmallList.js';
import { VisibilityFilters } from '../_redux/actions/index.js';

const getVisibleRecipes = (recipes, filter) => {
  switch(filter) {
    case VisibilityFilters.SHOW_ALL:
      return recipes;
    case VisibilityFilters.SHOW_NONE:
      return [];
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = (state) => ({
  recipes: getVisibleRecipes(state.recipes, state.visibilityFilter)
});

export default connect(
  mapStateToProps
)(RecipeSmallList);
