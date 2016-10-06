import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} from 'graphql';

import commentType     from '../types/comment';
import commentsService from '../services/comments';

export default {
  updateCommentText: {
    type: commentType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLInt),
      },
      text: {
        type: new GraphQLNonNull(GraphQLString),
      }
    },
    resolve: (_, {id, text}) => {
      return commentsService.updateText(id, text);
    }
  },
}
