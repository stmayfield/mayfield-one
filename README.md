# Mayfield One

Mayfield One is a Next.js application with a custom Express.js server, integrated with a PostgreSQL database. This project aims to showcase best practices for full-stack web development, including containerization using Docker.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Getting Started](#getting-started)
   - [Local Development](#local-development)
   - [Docker Development](#docker-development)
3. [API Endpoints](#api-endpoints)
4. [Contributing](#contributing)
5. [License](#license)

## Prerequisites
- Node.js 18 or above
- Docker (if you choose to run the application in a Docker container)
- PostgreSQL 13 or above

## Getting Started

### Local Development
1. Clone the repository.
    ```sh
    git clone https://github.com/yourusername/mayfield-one.git
    ```
2. Navigate into the directory.
    ```sh
    cd mayfield-one
    ```
3. Install the dependencies.
    ```sh
    npm install
    ```
4. Copy `.env.example` to `.env.local` and set the environment variables.
    ```sh
    cp .env.example .env.local
    ```
5. Start the development server.
    ```sh
    npm run dev
    ```
6. The app should be running at `http://localhost:3001`.

### Docker Development
1. Clone the repository.
    ```sh
    git clone https://github.com/yourusername/mayfield-one.git
    ```
2. Navigate into the directory.
    ```sh
    cd mayfield-one
    ```
3. Copy `.env.example` to `.env.local` and set the environment variables.
    ```sh
    cp .env.example .env.local
    ```
4. Build and start the Docker containers.
    ```sh
    docker-compose up --build
    ```
5. The app should be running at `http://localhost:3001`.

## API Endpoints

- GET `/api/v1/users`: Retrieves a list of all users.
- POST `/api/v1/users`: Creates a new user.
- GET `/api/v1/users/:id`: Retrieves a user by ID.
- PUT `/api/v1/users/:id`: Updates a user by ID.
- DELETE `/api/v1/users/:id`: Deletes a user by ID.

## Contributing
Please read the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on how to contribute to this project.

## License
This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.
