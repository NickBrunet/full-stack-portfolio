// Import the Pool class from the 'pg' library; Pool manages a set of client connections
const { Pool } = require('pg');

// Load environment variables from a .env file into process.env
require('dotenv').config();

// Create a new connection pool. Each property reads from an environment variable.
// When these variables aren’t provided, node‑postgres falls back to defaults like
// PGHOST=localhost and PGPORT=5432:contentReference[oaicite:0]{index=0}.
const pool = new Pool({
    host: process.env.PG_HOST,     // Hostname where PostgreSQL is running (e.g., 'localhost')
    port: process.env.PG_PORT,     // Port number PostgreSQL listens on (usually 5432)
    user: process.env.PG_USER,     // Database username
    password: process.env.PG_PASSWORD, // Password for the database user
    database: process.env.PG_DATABASE, // Name of the database to connect to
});

// Export a helper method. This wraps pool.query() so other modules can run SQL
// without needing direct access to the pool object.
module.exports = {
    // 'text' is the SQL string, 'params' is an optional array of query parameters.
    query: (text, params) => pool.query(text, params),
};
