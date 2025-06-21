# apiserver
# API Server and Frontend

## APIs Created and Their Functionality

### Endpoints

- **GET /items**  
  Retrieve all todo items.

- **GET /items/:id**  
  Retrieve a single todo item by its ID.

- **POST /items**  
  Create a new todo item.  
  Request body example:
  {
    "name": "Task name"
  }

- **PUT /items/:id**
 Update an existing todo item (e.g., mark as completed).
Request body example:
{
  "completed": true
}
DELETE /items/:id: Delete a todo item by its ID.

Database Used
MongoDB is used to store todo items.

The server uses Mongoose for schema definition and database interactions.

How to Run the Server
Make sure MongoDB is running locally or you have access to a MongoDB connection URI.

Install dependencies:

bash
Copy
Edit
npm install
Start the server:

bash
Copy
Edit
node server.js
The server will run on: http://localhost:5000

How to Run the Frontend Locally (Optional)
Open the index.html file in your web browser.

The frontend will communicate with the API server to manage todo items.

How to Interact with the API
Here are some example curl commands you can use to test the API endpoints:

Get all todo items:

bash
Copy
Edit
curl http://localhost:5000/items
Create a new todo item:

bash
Copy
Edit
curl -X POST http://localhost:5000/items -H "Content-Type: application/json" -d "{\"name\":\"New Task\"}"
Update a todo item (mark as completed):

bash
Copy
Edit
curl -X PUT http://localhost:5000/items/{id} -H "Content-Type: application/json" -d "{\"completed\":true}"
Delete a todo item:

bash
Copy
Edit
curl -X DELETE http://localhost:5000/items/{id}
Replace {id} with the actual ID of the todo item.