var db = require("../models"); //automatically refer to index.js in models

//EXPORT INDEX ROUTE
exports.getTodos = function(req, res){
   db.Todo.find() //refer to Todo schema 
   .then(function(todos){ //Asyn promise
       res.json(todos); 
   })
   .catch(function(err){
       res.send(err);
   });
};

//EXPORT INDEX ROUTE
exports.createTodo = function(req, res){
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo); //status 201 means successfully created
    })
    .catch(function(err){
        res.send(err);
    });
};

//EXPORT SHOW ROUTE
exports.showTodo = function(req, res){
   db.Todo.findById(req.params.todoId)
   .then(function(foundTodo){
       res.json(foundTodo);
   })
   .catch(function(err){
        res.send(err); 
   });
};

//EXPORT UPDATE ROUTE
exports.updateTodo = function(req, res){
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true}) //{new: true} means sending/responding updated version
    .then(function(updatedTodo){
        res.json(updatedTodo);
    })
    .catch(function(err){
        res.send(err);
    });
};

//EXPORTS DELETE ROUTE
exports.deleteTodo = function(req, res){
   db.Todo.remove({_id: req.params.todoId})
   .then(function(){
       res.json({message: 'We deleted it'});
   })
   .catch(function(err){
       res.send(err);
   });
};

module.exports = exports;