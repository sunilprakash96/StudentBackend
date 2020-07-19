const mongoose= require('mongoose');


const geoSchema = new mongoose.Schema({
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: {
      type: [Number]
    }
  });  


module.exports={geoSchema};