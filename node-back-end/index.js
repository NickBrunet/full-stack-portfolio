// Import the Express framework
const express = require('express');
// Import CORS middleware so your API can be called from a different origin (like your React app)
const cors = require('cors');
// Import the database helper we created in db.js
const db = require('./db');

// Initialize an Express application
const app = express();

// Enable CORS for all routes; this allows your frontend to make requests to this API
app.use(cors());
// Parse incoming JSON request bodies; makes req.body available on POST/PUT requests
app.use(express.json());

// Define a GET route. When a client requests /api/users, this function runs.
app.get('/api/users', async (req, res) => {
    try {
        // Query all users from the database, ordering them by id in ascending order
        const result = await db.query('SELECT * FROM users ORDER BY id ASC;');
        // Send the rows back as JSON
        res.json(result.rows);
    } catch (err) {
        // If anything goes wrong, return a 500 status and the error message
        res.status(500).json({ error: err.message });
    }
});

// TODO: define other routes (POST, PUT, DELETE) for your CRUD API as needed

// Start the server listening on port 5000. The callback logs a message to confirm it’s running.
app.listen(5000, () => console.log('Server listening on http://localhost:5000'));
