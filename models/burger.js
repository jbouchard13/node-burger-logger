const orm = require("../config/orm");

const burger = {
  selectAll: (cb) => {
    // insert tableName into orm function
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },

  insertOne: (cb) => {},

  updateOne: (cb) => {},
};

module.exports = burger;
