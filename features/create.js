const db = require("../db.js");

module.exports.createTodo = (event, context, callback) => {
  const body = JSON.parse(event.body);

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
    });
};


