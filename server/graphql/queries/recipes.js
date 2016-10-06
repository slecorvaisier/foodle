import {
  GraphQLString,
  GraphQLList,
} from 'graphql';

import recipeType       from '../types/recipe';
import recipesService from '../services/recipes';

export default {
  recipes: {
    type: new GraphQLList(recipeType),
    args: {
      search: {
        type: GraphQLString
      },
    },
    resolve: (_, {search}) => {
      return recipesService.getRecipes(search);
    }
  }
}
