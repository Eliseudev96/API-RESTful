# Task List API

A simple API for managing a task list. This API allows you to create, list, update, and delete tasks. Tasks are stored in a JSON file.

## Table of Contents

- [Installation](#installation)
- [Execution](#execution)
- [Routes](#routes)
- [Usage Examples](#usage-examples)
- [Configuration](#configuration)
- [Contribution](#contribution)
- [License](#license)
- [Author](#author)
- [Project Status](#project-status)

## Installation

Make sure you have Node.js installed. Then, run the following command to install the dependencies:

```bash
npm install
```

## Execution

To start the server, run:

```bash
node index.js
```

The API will be available at [http://localhost:3000](http://localhost:3000).

## Routes

The API provides the following routes:

- List Tasks: `GET /api/tasks`
- Create Task: `POST /api/tasks`
- Update Task: `PUT /api/tasks/:id`
- Delete Task: `DELETE /api/tasks/:id`

## Usage Examples

Here are some usage examples using cURL from the terminal:

### List Tasks:

```bash
curl http://localhost:3000/api/tasks
```

### Create Task:

```bash
curl -X POST -H "Content-Type: application/json" -d "{\"title\":\"New Task\",\"completed\":false}" http://localhost:3000/api/tasks
```

### Update Task:

```bash
curl -X PUT -H "Content-Type: application/json" -d "{\"title\":\"Updated Task\",\"completed\":true}" http://localhost:3000/api/tasks/1
```

### Delete Task:

```bash
curl -X DELETE http://localhost:3000/api/tasks/1
```

## Configuration

You can configure the server port and the JSON storage file name in the `index.js` file.

## Contribution

Feel free to contribute to this project. You can submit pull requests and report issues. Please refer to the contribution guidelines for more information.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

- Name: Eliseu Espada
- Contact: eliseuespada@gmail.com

## Project Status

The project is currently under development.