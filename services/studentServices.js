const { Student } = require('../models/studentModel');

getAllStudent = async (id) => {
    const student = await Student.find();
    return student;
}

getStudentInfoById=async (id)=>{
    const student=await Student.findOne({_id:id});
    return student;
}

getSearchBy = async (names) => {
    const l=names;
    const student = await Student
        .find({ name: {$regex: `${names}`, $options: "$i"}})
        .limit(10)
        .sort({ name: 1 })
        .select({ name: 1, class: 1 });
        return student;
}

createNewStudent = async (detail) => {
    const student = await Student(detail);
    const result = await student.save();
    return student;

}

updateOldStudent = async (id, detail) => {
    const student = await Student.findByIdAndUpdate({ _id: id }, {
        $set: {
            name: detail.name,
            class: detail.class,
            area: detail.area
        }
    });
    const result = await student.save();
    return student;
}

module.exports = { createNewStudent, updateOldStudent, getAllStudent, getSearchBy,getStudentInfoById }