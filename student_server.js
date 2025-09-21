const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

app.post('/student_register', (req, res) => {
  const studentData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dob: req.body.dob,
    gender: req.body.gender,
    address1: req.body.address1,
    address2: req.body.address2,
    city: req.body.city,
    region: req.body.region,
    postal: req.body.postal,
    country: req.body.country,
    email: req.body.email,
    phone: req.body.phone
  };
  fs.appendFileSync('students.txt', JSON.stringify(studentData) + '\n');
  res.send('Student registration successful!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});