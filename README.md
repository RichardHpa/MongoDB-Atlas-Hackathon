# MongoDB-Atlas-Hackathon

> Project for MongoDB Atlas Hackathon on DEV!

## Installation

### Config

This project uses MongoDB to manage the backend database. So you will either need a [MongoDB Atlas](https://www.mongodb.com/) account, or MongoDB installed locally on your machine.

Create a .env file in the root directory with the the following variables.

```env
PORT=

MONGO_USER=
MONGO_PASSWORD=
MONGO_CLUSTER_NAME=
MONGO_TABLE_NAME=
```

There is an example provided in the project

### Install Dependencies & Run the Client & Server

There are a few command you can run for this project. Depending on what you would like to do is which one you should use.

```bash
# Install dependencies for server
npm run install:server

# Install dependencies for client
npm run install:client

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run start:server

# Run the React client only
npm run start:client


```
