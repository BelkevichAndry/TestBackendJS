"use strict";
exports.__esModule = true;
exports.sequelize = void 0;
var sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize('testmyclass', 'postgres', '89126530', {
    dialect: "postgres",
    host: "localhost"
});
exports.sequelize.sync().then(function (result) { return console.log(result); })["catch"](function (err) { return console.log(err); });
try {
    exports.sequelize.authenticate();
    console.log('Connection has been established successfully.');
}
catch (error) {
    console.error('Unable to connect to the database:', error);
}
