'use strict';

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
