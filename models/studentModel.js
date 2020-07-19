const mongoose = require('mongoose');

//Creation of Model for Student
const Schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
});


const Student = mongoose.model('Student', Schema);

module.exports = { Student };