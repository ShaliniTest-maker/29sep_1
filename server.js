/**
 * Express.js Server Application
 * 
 * Main entry point for the Node.js Express server that hosts two HTTP endpoints:
 * - GET '/' - Returns "Hello world" greeting
 * - GET '/evening' - Returns "Good evening" greeting
 * 
 * The server listens on a configurable port via the PORT environment variable,
 * defaulting to port 3000 for local development.
 * 
 * @module server
 * @requires express
 */

'use strict';

// Import Express.js web application framework
const express = require('express');

// Create Express application instance
const app = express();

// Configure server port with environment variable support
// Uses PORT environment variable if set, otherwise defaults to 3000
const PORT = process.env.PORT || 3000;

/**
 * Root endpoint handler
 * 
 * Responds to GET requests at the root path '/' with a "Hello world" greeting.
 * 
 * @route GET /
 * @returns {string} Plain text response "Hello world"
 * @example
 * // Request: GET http://localhost:3000/
 * // Response: "Hello world"
 */
app.get('/', (req, res) => {
    res.send('Hello world');
});

/**
 * Evening endpoint handler
 * 
 * Responds to GET requests at '/evening' path with a "Good evening" greeting.
 * 
 * @route GET /evening
 * @returns {string} Plain text response "Good evening"
 * @example
 * // Request: GET http://localhost:3000/evening
 * // Response: "Good evening"
 */
app.get('/evening', (req, res) => {
    res.send('Good evening');
});

/**
 * Start the HTTP server
 * 
 * Binds the Express application to the configured port and begins
 * accepting incoming HTTP connections. Logs server status to console
 * once successfully listening.
 */
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
