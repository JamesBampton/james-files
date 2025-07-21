// install mysql2 using npm install mysql2, then creating my mysql variable 
const mysql = require('mysql2');

// Create my connection to my DB
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'elk',
  password: 'd0ughnut*',
  database: 'elk_sizing'

})
connection.connect((err) => {
  if (err) {
    console.error('❌ Error connecting to MySQL:', err);
    return;
  }
  console.log('✅ Connected to MySQL on port 3306');
});

connection.query('SELECT * FROM `info_currentp1` WHERE platform="cat4507rpluse"', (error, results) => {
  if (error) throw error;
  console.log(results);
});

// END OF DB CONFIGURATION


// Import the Express module
const express = require("express");

// Create an instance of an Express application
const app = express();

// Define the port the server will listen on
const PORT = 3009;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Handle GET request at the root route
app.get("/", (req, res) => {
  res.send("Welcome James to the simple Express app!");
});

// Handle GET request at the root route
app.get("/echo", (req, res) => {
  res.send("Get outta here");
});

// Handle POST request at the /echo route BODY
app.post("/echo", (req, res) => {
  // Respond with the same data that was received in the request body
  res.json({ received: req.body });
});

// Handle POST request at the /echo route HEADERS
app.post("/echo1", (req, res) => {
  // Respond with the same data that was received in the request body
  res.json({ received: req.headers });
});

// Handle POST request at the /echo route HEADERS
app.post("/echo2", (req, res) => {
  // Respond with the same data that was received in the request body
  res.json({ received: req.headers['content-length'] });
});

// Wildcard route to handle undefined routes
app.all("*", (req, res) => {
  res.status(404).send("Route not found");
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// Adding my get route to extract data from the DB
app.get('/elk', async (req, res) => {
  const platform = req.query.platform;

  try {
    const [rows] = await connection.execute(
      'SELECT * FROM `info_currentp1` WHERE platform = ?',
      [platform]
    );

    res.json({
      message: `Results for category: ${platform}`,
      products: rows
    });
  } catch (error) {
    console.error('❌ DB error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
