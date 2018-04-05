# todos_api
### Description:
Clean, fast, easy to use is what you think of when mention single-page app. AJAX processing makes it even faster to get up-to-date to-do-list with full control, which is built on top mixed cocktail of Express&Mongo.<br /> 
The focus is a synchrony between sending request to AJAX as retrieving, creating, updating, deleting and rendering the newest update of the view.<br />
Code structure is nice, clean and modular.<br />

### Setting up:
1. Backend part:
* Mongo database
``` 
npm install --save 
```
* express
* mongoose
* body-parser

2. Frontend part: 
* HTML
* CSS
* jQuery 

### HTTP Request with API Endpoints:
1. Server-side: 
* GET: '/api/todos'
* POST: '/api/todos'
* SHOW-GET (specific ID): '/api/todos/:todoId'
* PUT: '/api/todos/:todoId'
* DELETE: '/api/todos/:todoId'

2. View:
* GET: '/api/todos' (RETRIEVE THEN ADD ALL li TO ul)
* POST: '/api/todos' (CREATE NEW TODO li -> INSERT)
* PUT: '/api/todos/' + todo.data('id') (UPDATE TODO li)
* DELETE: '/api/todos/' + todo.data('id') (REMOVE TODO li FROM ul)

### Focus on app view using jQuery:
1. To delete/update an item: 
- Retrieve the `_id` of object first by using method .data('id', `todo._id`) => delete/update 
- Toggle the status `completed` by using method .data('completed', `todo.completed`) => update
2. $.ajax (with method: 'GET', 'POST', 'PUT', 'DELETE')


##### Inspired by Advanced Web Developer Bootcamp - Steel Colt
