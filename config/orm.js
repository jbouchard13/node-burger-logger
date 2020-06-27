const connection = require("./connection");

const selectAll = (tableName, cb) => {
  // pass table name into function
  const queryString = "SELECT * FROM ??";
  // use table name to set up sql query
  connection.query(queryString, tableName, (err, result) => {
    if (err) throw err;
    // callback the result
    cb(result);
  });
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
