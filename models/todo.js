
// MODEL IS DEFINED BELOW
module.exports = (sequelize, DataTypes) => {
  // lowercase is our DB connection
  // uppercase is our instance...DataTypes is our alias for Sequelize

  return sequelize.define(
    // schema and model representation
    // schema represents the table structure
    'todo', 
    {
    // second object is for columns
      id: {
        type: DataTypes.INTEGER,
        allowNull: false, // there always needs to be an id for our todos
        autoIncrement: true, 
        primaryKey: true // id is most optimized
      },
      task: {
        type: DataTypes.STRING
      },
      completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        allowNull: false
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        allowNull: false
      },
      deleted_at: {
        type: DataTypes.DATE
      }
    },
    // third object is for general table characteristics
    {
      paranoid: true, // when you delete something from the table, 
      // it doesn't actually delete the row, it just stamps the deleted_at column
      underscored: true // sequelize expects all these columns to be camelcase,
      // but, we are underscoring it to let sequelize know
    }
  );
};