# Node.js Express.js Tutorial Server

A simple Node.js server built with Express.js framework that hosts HTTP endpoints. This tutorial project demonstrates basic Express.js routing with two endpoints that return greeting messages.

## Description

This project is a beginner-friendly tutorial showcasing how to:
- Set up a Node.js project with Express.js
- Create HTTP GET endpoints
- Handle HTTP requests and send text responses
- Configure server port using environment variables

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js**: Version 18.x or higher (LTS versions 20.x or 22.x recommended)
- **npm**: Version 8.x or higher (comes bundled with Node.js)

To verify your Node.js installation, run:

```bash
node --version
npm --version
```

## Installation

1. Clone or download this repository to your local machine

2. Navigate to the project directory:

```bash
cd 29sep_1
```

3. Install the project dependencies:

```bash
npm install
```

This will install Express.js and any other required dependencies defined in `package.json`.

## Usage

### Starting the Server

To start the server, run:

```bash
npm start
```

The server will start and listen on port **3000** by default.

You should see output indicating the server is running:

```
Server is running on port 3000
```

### Custom Port Configuration

You can configure a custom port by setting the `PORT` environment variable:

```bash
PORT=8080 npm start
```

### Stopping the Server

To stop the server, press `Ctrl + C` in the terminal where the server is running.

## API Reference

### Endpoints

#### GET `/`

Returns a "Hello world" greeting message.

| Property | Value |
|----------|-------|
| **URL** | `/` |
| **Method** | `GET` |
| **Response** | `Hello world` |
| **Status Code** | `200 OK` |
| **Content-Type** | `text/html; charset=utf-8` |

**Example Request:**

```bash
curl http://localhost:3000/
```

**Example Response:**

```
Hello world
```

---

#### GET `/evening`

Returns a "Good evening" greeting message.

| Property | Value |
|----------|-------|
| **URL** | `/evening` |
| **Method** | `GET` |
| **Response** | `Good evening` |
| **Status Code** | `200 OK` |
| **Content-Type** | `text/html; charset=utf-8` |

**Example Request:**

```bash
curl http://localhost:3000/evening
```

**Example Response:**

```
Good evening
```

## Testing

### Manual Testing with curl

After starting the server, you can test the endpoints using `curl`:

**Test the Hello World endpoint:**

```bash
curl -i http://localhost:3000/
```

Expected output:

```
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
...

Hello world
```

**Test the Good Evening endpoint:**

```bash
curl -i http://localhost:3000/evening
```

Expected output:

```
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
...

Good evening
```

### Testing with a Web Browser

Alternatively, you can test the endpoints by opening the following URLs in your web browser:

- Hello World: [http://localhost:3000/](http://localhost:3000/)
- Good Evening: [http://localhost:3000/evening](http://localhost:3000/evening)

## Project Structure

```
29sep_1/
├── server.js          # Main Express.js application entry point
├── package.json       # Project configuration and dependencies
├── .gitignore         # Git ignore rules
└── README.md          # Project documentation (this file)
```

## Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express.js 5.x** - Fast, unopinionated web framework for Node.js

## License

This project is provided for educational purposes as part of a Node.js tutorial.
