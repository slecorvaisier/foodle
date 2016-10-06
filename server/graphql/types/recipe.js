import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

import commentType from './comment';
import commentsService from '../services/comments';

export default new GraphQLObjectType({
  name: 'Recipe',
  description: 'Recipe',
  fields: () => ({
    id: {
      type: GraphQLInt,
      description: 'identifier',
    },
    title: {
      type: GraphQLString,
      description: 'Title of the recipe',
    },
    ingredients: {
      type: GraphQLString,
      description: 'Ingredients of the recipe',
    },
    thumbnail: {
      type: GraphQLString,
      description: 'thumbnail of the recipe',
    },
    comments: {
      type: new GraphQLList(commentType),
      description: 'Comments list',
      resolve: (parent, args) => {
        return commentsService.getCommentsByRecipeId(parent.id);
      }
    }
  })
});
