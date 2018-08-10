'use strict';

// gives us access to our db
const db = require("../db.js");

module.exports.getTodo = (event, context, callback) => {
  const todo_id = event.pathParameters.id;

  db.todo.findOne({
    where: { id: todo_id },
    attributes: ["id", "task", "completed"]
  }).then(todo => {
    const response = {
      statusCode: 200, // 200 is status is 'ok'
      body: JSON.stringify({
        // JSON stringify makes it easier for the computer to read
        // todo (message) property
        todo: todo
      })
    };

    callback(null, response);
  })
  .catch(error => {
    callback(null, {
      statusCode: 500, // 500 is status 'error'
      body: JSON.stringify({
        error: `There was an error fetching your todo with id: ${todo_id}.`
      })
    });
  });
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
  })
    .catch(error => {
      callback(null, {
        statusCode: 500, // 500 is status 'error'
        body: JSON.stringify({
          error: `There was an error fetching your todos.`
        })
      });
    });
};