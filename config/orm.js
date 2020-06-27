const connection = require("./connection");

const selectAll = (tableName, cb) => {
  // pass table name into function
  // select all from tableName
  const queryString = "SELECT * FROM ??";
  // use table name to set up sql query
  connection.query(queryString, tableName, (err, result) => {
    if (err) throw err;
    // callback the result
    cb(result);
  });

  // return data from db to update page
};

const insertOne = (tableName, burgerName, cb) => {
  // pass burger name and table name into function
  // use those values to set up sql query
  const queryString = "INSERT INTO ?? SET ?";
  // insert burgerName into tableName
  connection.query(queryString, [tableName, burgerName], (err, result) => {
    if (err) throw err;
    cb(result);
  });
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
