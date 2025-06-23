# To-Do List API Server and Frontend

### Endpoints

- **GET /items**  
  Retrieve all todo items.

- **GET /items/:id**  
  Retrieve a single todo item by its ID.

- **POST /items**  
  Create a new todo item.  

- **PUT /items/:id**
 Update an existing todo item (e.g., mark as completed).

- **DELETE /items/:id**
 Delete a todo item by its ID.

### Database Used
- MongoDB is used to store todo items.
- The server uses Mongoose for schema definition and database interactions.

## How to Run the Server

**Make sure MongoDB is running locally or you have access to a MongoDB connection URI.**

### 1. Install dependencies: npm install
### 2. Start the server: node server.js

The server will run on: http://localhost:5000

### 3. Running the Frontend 
Open the index.html file in your web browser.

The frontend will communicate with the API server to manage To-Do items.

### 4. How to Interact with the API
Here are some example curl commands you can use to test the API endpoints:

- Get all todo items: curl http://localhost:5000/items
- Create a new todo item: curl -X POST http://localhost:5000/items -H "Content-Type: application/json" -d "{\"name\":\"New Task\"}"
- Update a todo item (mark as completed): curl -X PUT http://localhost:5000/items/{id} -H "Content-Type: application/json" -d "{\"completed\":true}"
- Delete a todo item: curl -X DELETE http://localhost:5000/items/{id}
  
Note: Replace {id} with the actual ID of the todo item.
