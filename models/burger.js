var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    updateOne: function (objectColVals, condition, cb) {
        orm.updateOne("burgers", objectColVals, condition, function(res){
            cb(res);
        })

    }
}

module.exports = burger;