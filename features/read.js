'use strict';

// gives us access to our db
const db = require("../db.js");

module.exports.getTodo = (event, context, callback) => {
  const todo = 'Make dinner.'
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      // todo (message) property
      todo: todo
    })
  };

  callback(null, response);
};

module.exports.listTodos = (event, context, callback) => {
  db.todo
  .findAll({
    attributes: ['id', 'task', 'completed']
  })
  .then(todos => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        // todo (message) property
        todos: todos
      })
    };

    callback(null, response);
  });
  
};