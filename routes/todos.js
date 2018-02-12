var express = require("express"),
    router     = express.Router();
var db = require('../models/'); //automatically refer to index.js in models
var helpers = require('../helpers/todos');

router.route('/')
    .get(helpers.getTodos) //INDEX ROUTE
    .post(helpers.createTodo) //CREATE ROUTE

router.route('/:todoId')
    .get(helpers.showTodo) //SHOW ROUTE
    .put(helpers.updateTodo) //PUT ROUTER
    .delete(helpers.deleteTodo) //DELETE ROUTER

// router.put('/:todoId', function(req, res){
//     db.Todo.findByIdAndUpdate(req.params.todoId, req.body, {new: true}) //{new: true} means sending/responding updated version
//     .then(function(updatedTodo){
//         res.json(updatedTodo);
//     })
//     .catch(function(err){
//         res.send(err);
//     });
// });



module.exports = router;