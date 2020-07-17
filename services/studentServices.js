const { Student } = require('../models/studentModel');


createNewStudent = async (detail) => {
    const student = await Student(detail);
    console.log(student)

    const result = await student.save();
    return student;

}

updateOldStudent = async (id,detail) => {
    const student = await Student.findByIdAndUpdate({_id: id}, {
        $set:{
            name: detail.name,
            class: detail.class,
            area:detail.area
        }
    });
    const result =await student.save();
    return student;
}

module.exports = { createNewStudent, updateOldStudent }