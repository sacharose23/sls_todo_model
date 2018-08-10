const db = require("../db.js");

// how to grab the path parameter : id
// path parameter is found in event object

module.exports.updateTodo = (event, context, callback) => {
  const todo_id = event.pathParameters.id;
  
  const body = JSON.parse(event.body);
  
  // promise
  db.todo.update(body,
    { 
      where: { id: todo_id },
      returning: true 
      // returns the updated todo ... returned is an array (resArr)
      // only available for PostGres
    })
    // timestamp is created of when we delete this
    .then(resArr => {
      console.log(resArr);
      const [rowsAffected, todoArr] = resArr; 
      // first item in resArr assigned rowsAffected
      // second item in resArr assigned todoArr
      console.log(`${rowsAffected} row(s) were updated with this obj: ${JSON.stringify(body)}`);
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          todo: todoArr[0] 
          // returns the todo id 
        })
      });
    });
};


