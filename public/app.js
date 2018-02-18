/* global $ */

$(document).ready(function(){
    //get JSON and add to the ul .list
    $.getJSON('/api/todos')
    .then(addTodos)
    .catch(hasError);
    
    //get value from #todoInput and create new todo
    $('#todoInput').on('keypress', function(event){
        if(event.which === 13){
            //create new todo
            createTodo();
        }
    });
    
    //delete todo
    //// Happens often to single page app jQuery: to prevent event delegation, replace $('span') with $('.list')
    $('.list').on('click', 'span', function(event) {
        event.stopPropagation();
        removeTodo($(this).parent());
    });
    
    //completed: true 
    $('.list').on('click', 'li', function(){
       updateTodo($(this));
    });
});

//addTodos func to the .list ul taken from API DB
function addTodos(todosArr){
    //add todos to the page
    todosArr.forEach(insertTodo);
}

//hasError func inform errors
function hasError(err){
    $('.error').html(err);
}

//insertTodo func by create new li and append to ul .list
function insertTodo(todo){
    var newTodo = $('<li class="task">' + todo.name + '<span>X</span></li>');
    newTodo.data('id', todo._id);
    newTodo.data('completed', todo.completed);
    if(todo.completed){
        newTodo.addClass('done');
    }
    $('.list').append(newTodo); 
}

//createTodo func 
function createTodo(){
    //send request to create new todo
    //to '/api/todos'
    var userInput = $('#todoInput').val();
    console.log(userInput);
    $.post('/api/todos', {name: userInput})
    .then(function(newTodo){
        insertTodo(newTodo);
        $('#todoInput').val('');
        console.log(newTodo); 
    })
    .catch(function(err){
        console.log(err);
    });
}

//remove func
function removeTodo(todo){
    //send delete request to API
    var deletedURL = '/api/todos/' + todo.data('id');
    console.log(deletedURL);
    $.ajax({
        method: 'DELETE',
        url: deletedURL
    })
    .then(function(data){
        console.log(data);
        //remove li from .list ul
        todo.remove();
    })
    .catch(function(err){
        console.log(err);
    });
}

//updateTodo func
function updateTodo(todo){
    //Make AJAX request to API 
   // And update data completed: true 
   var updatedURL = '/api/todos/' + todo.data('id');
   var isDone = !todo.data('completed');
   var updatedData = {completed: isDone};
   $.ajax({
        method: 'PUT',
        url: updatedURL,
        data: updatedData
   })
   .then(function(updatedTodo){
        console.log(updatedTodo);
        todo.toggleClass('done');
        todo.data('completed', isDone);
   })
   .catch(function(err){
       console.log(err);
   });
}