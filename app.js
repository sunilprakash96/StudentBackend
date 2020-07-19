const express = require("express");
const mongoose = require('mongoose');
const app = express();
const bodyParser = require("body-parser")
var cors = require('cors')
const student = require('./routes/student');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
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