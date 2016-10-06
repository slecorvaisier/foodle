import {
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

import commentType     from '../types/comment';
import commentsService from '../services/comments';

export default {
  comments: {
    type: new GraphQLList(commentType),
    resolve: () => {
      return commentsService.getComments();
    }
  }
}
