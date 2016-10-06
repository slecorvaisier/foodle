import express      from 'express';
import graphqlHTTP  from 'express-graphql';

import schema       from './graphql';

var app = express();

app.use('/', graphqlHTTP({
  schema,
  graphiql: true,
  pretty: true
}));

var server = app.listen(8080, () => {
  console.log('GraphQL server listening at port', server.address().port);
});
