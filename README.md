# foodle
experiment on graphQL

Client side coming soon.

## Installation

```bash
# Get the latest snapshot
$ git clone --depth=1 https://github.com/slecorvaisier/foodle myapp
$ cd myapp
$ git remote rm origin
$ cd server

# Install NPM dependencies
$ npm install

# start app in dev mode
$ node index.js
````

GraphiQL:
<http://localhost:8080>

the input takes a graphQL request as following:

query
```
{
  recipes(search: "sushi") {
    title
    ingredients
    thumbnail
    comments {
      author
      text
    }
  }
}

query {
  comments {
    author
    text
    recipe {
      title
    }
  }
}
````

mutations
````
mutation {
  updateCommentText(id: 2, text: "i forgot") {
  	author
    text
  }
}
````

cf graphiql doc for more information
