const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log(`Username: ${username}, Password: ${password}`);

  if (username === 'admin' && password === 'password') {
    res.send('Login successful!');
  } else {
    res.send('Login failed. Invalid username or password.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
