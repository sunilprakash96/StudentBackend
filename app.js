const express = require("express");
const mongoose = require('mongoose');
const app = express();
const student = require('./routes/student');

app.use(express.json());
app.use('/api/StudentService', student);

const port = process.env.port || 3000;

//Connection for Port...
app.listen(port, () => {
    console.log("Connected to Port" + 3000)
})

//Connection for MongoDb...
mongoose.connect('mongodb://localhost:27017/student', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDb");
    })
    .catch((err) => {
        console.log("Not Connected to MongoDb");
    })