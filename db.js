// import sequelize
const Sequelize = require('sequelize');

// create an instance of sequelize that'll be our DB connection
// elephantsql endpoint
const sequelize = new Sequelize(
  "postgres://iiythpiu:4dsoq2SQ4Y7CuiL9dvHbc6z9EHa2Qp81@stampy.db.elephantsql.com:5432/iiythpiu"
);

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