// server.js

const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
  console.log(`Server is listening on https://localhost:${PORT}`);
});
