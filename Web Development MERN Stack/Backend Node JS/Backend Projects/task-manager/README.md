# Task Manager API

This project provides a RESTful API for managing tasks. It allows users to create, read, update, and delete tasks.

## Description

This API powers an application that helps users manage daily tasks. It's built with Node.js, Express, and MongoDB, providing a robust backend for task management applications.

## Features

*   **CRUD Operations:** Full support for Create, Read, Update, and Delete operations on tasks.
*   **Data Validation:** Uses Mongoose schemas for data validation.
*   **API Documentation:** Integrated Swagger UI for easy API exploration and testing.
*   **Environment Configuration:** Uses `.env` for managing sensitive information and configurations.

## Technologies Used

*   **Backend:** Node.js, Express.js
*   **Database:** MongoDB with Mongoose ODM
*   **API Documentation:** Swagger UI, Swagger JSDoc
*   **Middleware:** CORS
*   **Environment Variables:** dotenv
*   **Development:** Nodemon

## Setup and Installation

Follow these steps to get the project running locally:

1.  **Clone the repository (if you haven't already):**
    ```bash
    git clone <your-repository-url>
    cd task-manager
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Create Environment File:**
    Create a `.env` file in the root directory of the project and add the following environment variables. Replace the placeholder values with your actual configuration.
    ```plaintext:.env
    PORT=3000
    MONGODB_URI=your_mongodb_connection_string_here
    DB_PASS=your_mongodb_atlas_password_if_applicable
    ```
    *   `PORT`: The port the server will run on (defaults to 3000 if not set).
    *   `MONGODB_URI`: Your MongoDB connection string.
    *   `DB_PASS`: Database password (used in the connection string example in `db/connect.js`). Ensure your `MONGODB_URI` is correctly formatted.

4.  **Start the server:**
    ```bash
    npm start
    ```
    The server will start, typically on `http://localhost:3000`. You should see console messages indicating successful database connection and the server running URL.

## API Documentation

API documentation is available via Swagger UI. Once the server is running, navigate to:

[`http://localhost:3000/api-docs`](http://localhost:3000/api-docs)

This interface allows you to view all available endpoints, their parameters, request bodies, and responses. You can also test the API directly from this UI.

## Available Scripts

*   `npm start`: Starts the application using `nodemon`, which automatically restarts the server upon file changes.

## API Endpoints

The base URL for all API endpoints is `/api/v1`.

| Method | Endpoint          | Description                     | Controller Function                                                                                                                            |
| :----- | :---------------- | :------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | `/tasks`          | Get all tasks                   | <mcsymbol name="getAllTasks" filename="tasks.js" path="f:\GitHub\Software Development\Web Development MERN Stack\Backend Node JS\Backend Projects\task-manager\controller\tasks.js" startline="4" type="function"></mcsymbol>  |
| POST   | `/tasks`          | Create a new task               | <mcsymbol name="createTask" filename="tasks.js" path="f:\GitHub\Software Development\Web Development MERN Stack\Backend Node JS\Backend Projects\task-manager\controller\tasks.js" startline="15" type="function"></mcsymbol> |
| GET    | `/tasks/{id}`     | Get a single task by ID         | <mcsymbol name="getTask" filename="tasks.js" path="f:\GitHub\Software Development\Web Development MERN Stack\Backend Node JS\Backend Projects\task-manager\controller\tasks.js" startline="26" type="function"></mcsymbol>    |
| PATCH  | `/tasks/{id}`     | Update a task (partial update)  | <mcsymbol name="updateTask" filename="tasks.js" path="f:\GitHub\Software Development\Web Development MERN Stack\Backend Node JS\Backend Projects\task-manager\controller\tasks.js" startline="43" type="function"></mcsymbol> |
| PUT    | `/tasks/{id}`     | Replace a task (full update)    | <mcsymbol name="editTask" filename="tasks.js" path="f:\GitHub\Software Development\Web Development MERN Stack\Backend Node JS\Backend Projects\task-manager\controller\tasks.js" startline="64" type="function"></mcsymbol>   |
| DELETE | `/tasks/{id}`     | Delete a task by ID             | <mcsymbol name="deleteTask" filename="tasks.js" path="f:\GitHub\Software Development\Web Development MERN Stack\Backend Node JS\Backend Projects\task-manager\controller\tasks.js" startline="85" type="function"></mcsymbol> |

## Task Model

The `Task` model has the following structure (defined in <mcfile name="models\Task.js" path="f:\GitHub\Software Development\Web Development MERN Stack\Backend Node JS\Backend Projects\task-manager\models\Task.js"></mcfile>):

*   `taskName` (String, Required, MinLength: 3, MaxLength: 100)
*   `taskContent` (String, MaxLength: 1000, Default: '')
*   `isCompleted` (Boolean, Default: false)
*   `createdBy` (ObjectId, Ref: 'User', Optional)
*   `dueDate` (Date, Default: null)

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the ISC License - see the <mcfile name="package.json" path="f:\GitHub\Software Development\Web Development MERN Stack\Backend Node JS\Backend Projects\task-manager\package.json"></mcfile> file for details.