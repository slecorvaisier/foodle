import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} from 'graphql';

import recipeType from './recipe';
import recipesService from '../services/recipes';

export default new GraphQLObjectType({
  name: 'Comment',
  description: 'Comment of a specific recipe',
  fields: () => ({
    id: {
      type: GraphQLInt,
      description: 'identifier',
    },
    author: {
      type: GraphQLString,
      description: 'comment author',
    },
    text: {
      type: GraphQLString,
      description: 'comment text',
    },
    recipe: {
      type: recipeType,
      description: 'commented recipe',
      resolve: (parent, args) => {
        return recipesService.getRecipeById(parent.recipeId);
      }
    }
  })
});
