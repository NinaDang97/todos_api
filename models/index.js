var mongoose = require("mongoose");
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api');

mongoose.Promist = Promise;

module.exports.Todo = require("./todo"); //require models/index.js file