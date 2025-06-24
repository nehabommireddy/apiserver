# To-Do List API Server and Frontend
This project is a full-stack To-Do List application with a custom-built REST API, a MongoDB backend, and a simple HTML frontend for interaction.

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

### Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Frontend:** HTML, JavaScript
- **Testing:** Jest, Supertest, mongodb-memory-server

## How to Run the Server

**Make sure MongoDB is running locally or you have access to a MongoDB connection URI.**
### 1. Clone the repository
### 2. Install dependencies: npm install
### 3. Start the server: node server.js

The server will run on: http://localhost:5000

### 4. Running the Frontend 
Open the index.html file in your web browser.

The frontend will communicate with the API server to manage To-Do items.

### 5. How to Interact with the API
Here are some example curl commands you can use to test the API endpoints:

- Get all todo items: curl http://localhost:5000/items
- Create a new todo item: curl -X POST http://localhost:5000/items -H "Content-Type: application/json" -d "{\"name\":\"New Task\"}"
- Update a todo item (mark as completed): curl -X PUT http://localhost:5000/items/{id} -H "Content-Type: application/json" -d "{\"completed\":true}"
- Delete a todo item: curl -X DELETE http://localhost:5000/items/{id}
  
Note: Replace {id} with the actual ID of the todo item.

### Running the Tests
- run the test suite using npm test
- to get a coverage report: npm run test:coverage

### Testing Overview
**Unit Tests**
- Tool: Jest
- Description: Tests individual logic (e.g., item model)

**API Tests**
- Tool: Supertest
- Description: Tests REST endpoints

**Integration Tests**
- mongodb-memory-server
- Tests server + database together

### Testing Coverage Screenshot
![image](https://github.com/user-attachments/assets/a001c6ba-f379-4994-9e5c-535073c7734e)

