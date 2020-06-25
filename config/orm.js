const connection = require("./connection");

const selectAll = (tableName) => {
  // pass table name into function
  // use table name to set up sql query
  // select all from tableName
  // return data from db to update page
};

const insertOne = (burgerName, tableName) => {
  // pass burger name and table name into function
  // use those values to set up sql query
  // insert burgerName into tableName
  // return data from db to update page
};

const updateOne = (burgerName, tableName, trueFalse) => {
  // pass burger name, table name, and whether if devoured is true or false
  // use those values to set up sql query
  // update where devoured = false
  // set that value to true
  // return data from db to update page
};

module.exports = {
  selectAll: selectAll,
  insertOne: insertOne,
  updateOne: updateOne,
};
