// import sequelize
const Sequelize = require('sequelize');

// create an instance of sequelize that'll be our DB connection
// elephantsql endpoint
const sequelize = new Sequelize(
  'postgres://nnrznszh:nv-HXgeHu8WW9O3q7amNVk4QbyfPllVU@elmer.db.elephantsql.com:5432/nnrznszh'
);

/// AWS RDS endpoint
// const sequelize = new Sequelize(
//   'postgres://sacha:sacha123@todo-db.ctdqpenrkrnh.us-west-2.rds.amazonaws.com:5432/todo_db'
// );

// export sequelize in our model
const todo = require('./models/todo')(sequelize, Sequelize);

const db = {
  Sequelize,
  sequelize,
  todo
};

// sync our model to our db
// this will take our model definition, sync it with our db,
// and a table will be created based on our model
db.sequelize.sync( /*{ force: true }*/ );

module.exports = db;

// below code searches our db table called todo, look for the todo with id: 1
// db.todo.findOne({ where: { id: 1 }})