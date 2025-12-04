const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.type('text').send('Hello from A');
});

app.get('/about', (req, res) => {
  res.type('text').send('About Page — updated for PR simulation');
});

app.use((req, res) => {
  res.status(404).type('text').send('Not Found');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
