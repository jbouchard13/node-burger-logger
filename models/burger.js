const orm = require("../config/orm");

const burger = {
  selectAll: (cb) => {
    // insert tableName into orm function
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },

  insertOne: (burgerName, cb) => {
    // insert tableName into orm function
    orm.insertOne("burgers", burgerName, (res) => {
      cb(res);
    });
  },

  updateOne: (cb) => {},
};

module.exports = burger;
