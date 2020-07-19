//Registration module...
const express = require('express');
const router = express.Router();
const multer = require('multer');
const GridFSStorage=require('multer-gridfs-storage');
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// })
const storage=new GridFSStorage({url: "mongodb://localhost:27017/student"})
const upload = multer({ storage });

const { createStudent, updateStudent, getStudent, getSearch,getStudentById } = require('../controllers/studentControllers')

router.get('/getstudent', getStudent);
router.get('/getstudentbyid/:id',getStudentById)
router.get('/getstudentsearch', getSearch)
router.post('/createstudent', upload.single('studentImage'), createStudent);
router.put('/updatestudent/:id', updateStudent);

router.post("/byArea", async (req, res) => {
    let lat = req.body.lat;
    let lang = req.body.lng;
  
    try {
      let vehicles = await Student.find({
        location: {
          $near: {
            $maxDistance: 3000,
            $geometry: {
              type: "Point",
              coordinates: [lat, lang]
            }
          }
        }
      });
  
      res.status(200).send(vehicles);
    } catch (e) {
      res.status(500).send(e.message);
    }
  });




module.exports = router;