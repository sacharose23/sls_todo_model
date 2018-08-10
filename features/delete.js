const db = require("../db.js");

// how to grab the path parameter : id
// path parameter is found in event object

module.exports.deleteTodo = (event, context, callback) => {
  const todo_id = event.pathParameters.id;
  // promise
  db.todo
    .destroy({ where: { id: todo_id } }) 
    // timestamp is created of when we delete this
    .then(num_deleted => {
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          num_deleted: todo 
          // integer that tells the number of rows that are deleted
        })
      });
    });
};


