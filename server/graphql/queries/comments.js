import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt,
} from 'graphql';

import commentType     from '../types/comment';
import commentsService from '../services/comments';

export default {
  comments: {
    type: new GraphQLList(commentType),
    resolve: () => {
      return commentsService.getComments();
    }
  },
  comment: {
    type: commentType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLInt),
      },
    },
    resolve: (_, {id}) => {
      return commentsService.getCommentById(id);
    }
  }
}
