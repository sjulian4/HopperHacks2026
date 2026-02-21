// server.js
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware: Allows your frontend to communicate with this backend
app.use(cors());
// Middleware: Allows your server to understand JSON data sent from the frontend
app.use(express.json());

// Define the port (The specific "door" your server listens to)
const PORT = 3000;

let alerts = [];
app.post("/alerts", (req, res) => {
  const { food, location } = req.body;

  if (!food || !location) {
    return res.status(400).json({ error: "Food type and location required" });
  }

  const newAlert = {
    id: Date.now(),
    food,
    location,
    timePosted: new Date()
  };
  alerts.push(newAlert);
  res.status(201).json(newAlert);
});



// A simple route to test if our server is working
app.get('/alerts', (req, res) => {
    res.json(alerts);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Magic is happening on http://localhost:${PORT}`);
});