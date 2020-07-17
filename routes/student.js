//Registration module...
const express = require('express');
const router = express.Router();
const multer=require('multer');
const storage=multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,'./uploads/');
    },
    filename: function(req, file, cb){
        cb(null,  file.originalname);
    }
})
const upload=multer({storage: storage});


const {createStudent}=require('../controllers/studentControllers')

// router.get('/students', getStudent);

router.post('/createstudent',upload.single('studentImage'),createStudent);
router.put('/updatestudent/:id',updateStudent);




module.exports = router;