# Todo App Documentation

 
Working Video : (https://github.com/zogratis17/hitshoppers-task-1/blob/main/Screenshots/2024-07-14%2013-37-13.mkv)


## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Backend Installation and Setup](#backend-installation-and-setup)
- [Backend API Endpoints](#backend-api-endpoints)
- [Frontend Installation and Setup](#frontend-installation-and-setup)
- [Frontend Components](#frontend-components)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

This Todo App is a full-stack application built with React.js for the frontend and Node.js, Express, and MongoDB for the backend. It allows users to manage todo items including creation, editing, updating, and deletion.

## Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

## Backend Installation and Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/zogratis17/hitshoppers-task-1
    cd backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the backend server:

    ```bash
    npm start
    ```

    The backend server will be running at `http://localhost:8000`.

## Backend API Endpoints

### Create a new todo item

- **URL:** `/todos`
- **Method:** `POST`
- **Description:** Creates a new todo item.
- **Request Body:**

    ```json
    {
        "title": "string",
        "description": "string"
    }
    ```

- **Response:**

    ```json
    {
        "_id": "string",
        "title": "string",
        "description": "string",
        "__v": 0
    }
    ```

### Get all todo items

- **URL:** `/todos`
- **Method:** `GET`
- **Description:** Retrieves all todo items.
- **Response:**

    ```json
    [
        {
            "_id": "string",
            "title": "string",
            "description": "string",
            "__v": 0
        },
        ...
    ]
    ```

### Update a todo item

- **URL:** `/todos/:id`
- **Method:** `PUT`
- **Description:** Updates an existing todo item.
- **Request Body:**

    ```json
    {
        "title": "string",
        "description": "string"
    }
    ```

- **Response:**

    ```json
    {
        "_id": "string",
        "title": "string",
        "description": "string",
        "__v": 0
    }
    ```

### Delete a todo item

- **URL:** `/todos/:id`
- **Method:** `DELETE`
- **Description:** Deletes a todo item.
- **Response:** `204 No Content`

## Frontend Installation and Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/zogratis17/hitshoppers-task-1
    cd frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the frontend development server:

    ```bash
    npm start
    ```

    The frontend will be running at `http://localhost:3000`.

## Frontend Components

The frontend includes the following main components:

- **Todo:** Component managing the todo list, creation, editing, and deletion of todo items.

## Contributing

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact hariprasathnt@yahoo.com.

