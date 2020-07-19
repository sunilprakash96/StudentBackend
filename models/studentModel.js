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
    loc: {
        type:{
            type: String,
            required: true
        },
        coordinates: []
    }
});

Schema.index({ 'loc': "2dsphere" });

const Student = mongoose.model('Student', Schema);

module.exports = { Student };