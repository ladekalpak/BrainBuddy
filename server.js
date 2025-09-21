const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

app.post('/register', upload.array('certificates'), (req, res) => {
  const { role, name, email, password, about } = req.body;
  // Save user data (for demo, append to a file)
  const userData = {
    role,
    name,
    email,
    password,
    about,
    certificates: req.files.map(file => file.filename)
  };
  fs.appendFileSync('users.txt', JSON.stringify(userData) + '\n');
  res.send('Registration successful!');
});

app.get('/users', (req, res) => {
  fs.readFile('users.txt', 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading users');
    const users = data
      .split('\n')
      .filter(line => line.trim() !== '')
      .map(line => JSON.parse(line));
    res.json(users);
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});