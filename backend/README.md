# Todo App Backend

This is the backend of the Todo App, built with Node.js, Express, and MongoDB.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start MongoDB:

    Make sure MongoDB is running on your local machine. By default, it runs on `mongodb://localhost:27017`.

4. Run the application:

    ```bash
    npm start
  ```

    The server will be listening at `http://localhost:8000`.

## Usage

### Running the Server

To run the server, execute:

```bash
npm start

## API Endpoints

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

## Contributing

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact [hariprasathnt@yahoo.com].

