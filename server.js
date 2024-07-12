const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // Port to listen on (default: 3000)

// Route for the main page ('/')
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
