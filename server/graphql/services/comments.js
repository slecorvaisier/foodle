import request from 'request';

let fakeComments = [
  { id: 1, recipeId: 42350,  author: 'Ned',    text: 'Winter is coming...' },
  { id: 2, recipeId: 7954,   author: 'Ygrid',  text: 'You know nothing Jon Snow.' },
  { id: 3, recipeId: 121812, author: 'Tyrion', text: 'A Lanister always pays his debts.' },
  { id: 4, recipeId: 42350,  author: 'Hodor',  text: 'Hodor... Hooodooooor.' },
];

const getComments = () => {
  return new Promise((resolve, reject) => resolve(fakeComments));
}

const getCommentById = (id) => {
  return new Promise((resolve, reject) => {
    return resolve(fakeComments.find(c => c.id === id));
  });
}

const getCommentsByRecipeId = (recipeId) => {
  return new Promise((resolve, reject) => {
    return resolve(fakeComments.filter(c => c.recipeId === recipeId));
  });
}

const updateText = (id, text) => {
  return new Promise((resolve, reject) => {
    fakeComments.forEach(comment => {
      if (comment.id === id) {
        comment.text = text;
        return resolve(comment);
      }
    });
    return reject('no comment found');
  })
}

export default {
  getComments,
  getCommentById,
  getCommentsByRecipeId,
  updateText
};
