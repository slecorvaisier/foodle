import request from 'request';

// TODO: lazy treatment, to be improved with regex
const getRecipeId = (recipe) => parseInt(recipe.thumbnail.split('/').pop().split('.').shift())

const getRecipes = (search) => {
  return new Promise((resolve, reject) => {
    request('http://www.recipepuppy.com/api/?q=' + search, (err, response, body) => {
      if (err) {
        return reject(err);
      }

      // filter out results without thumbnail
      const results = JSON.parse(response.body).results.filter(r => r.thumbnail !== '');
      const updatedResults = results.map(r => {
        r.id = getRecipeId(r);
        return r;
      })

      return resolve(results);
    });
  })
}

const getRecipeById = (id) => {
  // FAKE: as the API doesn't accept requests by ID, we set a specific search text
  return getRecipes('sushi')
    .then((results) => results.find(r => r.id === id ));
}

export default { getRecipes, getRecipeById };
