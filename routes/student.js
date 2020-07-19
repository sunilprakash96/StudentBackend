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

const { createStudent, updateStudent, getStudent, getSearch,getStudentById, getStudentNear } = require('../controllers/studentControllers')

router.get('/getstudent', getStudent);
router.get('/getstudentbyid/:id',getStudentById)
router.get('/getstudentsearch', getSearch)
router.post('/createstudent', upload.single('studentImage'), createStudent);
router.put('/updatestudent/:id', updateStudent);
router.get('/getstudentnearme',getStudentNear)

module.exports = router;