const db = require("../db.js");

module.exports.createTodo = (event, context, callback) => {
  const body = JSON.parse(event.body);

  // look for a task property
  const { task } = body;
  if(!task) {
    return callback(null, {
      statusCode: 500,
      body: JSON.stringify({
        error: 'The property "task" is required.'
      })
    });
  }

  // promise
  db.todo
    .create({
      task: body.task
    })
    .then(todo => {
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          todo: todo
        })
      });
    }).catch(error => {
      callback(null, {
        statusCode: 500, // 500 is status 'error'
        body: JSON.stringify({
          error: `There was an error creating your todo.`
        })
      });
    });
};


