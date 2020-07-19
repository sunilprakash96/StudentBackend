const { createNewStudent, getAllStudent, updateOldStudent, getSearchBy,getStudentInfoById } = require('../services/studentServices');

getStudent = async (req, res) => {
    try {
        const student = await getAllStudent();
        if (student) {
            res.status(201).send(student);
        }
        else {
            res.status(400).send("There are no Student data available");
        }
    }
    catch (err) {
        console.log("StudentControllers - getStudent Error:" + err);
    }

}

getStudentById = async (req, res) => {
    try {
        const student = await getStudentInfoById(req.params.id);
        if (student) {
            res.status(201).send(student);
        }
        else {
            res.status(400).send("There are no Student data available");
        }
    }
    catch (err) {
        console.log("StudentControllers - getStudentById Error:" + err);
    }

}

getSearch = async (req, res) => {
    console.log(req.body.name);
    const student = await getSearchBy(req.query.name);
    if(student)
    res.status(200).send(student);
    else
    res.status(400).send("No Student found");
}


createStudent = async (req, res) => {
    try {
        console.log(req.file);
        const student = await createNewStudent(req.body);

        if (student) {
            res.status(200).send("New Student data is created");
        }
        else {
            res.status(400).send("Bad Request")
        }
    }
    catch (err) {
        console.log("StudentControllers - createStudent Error" + err);
    }

}

updateStudent = async (req, res) => {
    try {
        const student = await updateOldStudent(req.params.id, req.body);

        if (student) {
            res.status(200).send("Student data is Updated");
        }
        else {
            res.status(400).send("Bad Request")
        }
    }
    catch (err) {
        console.log("StudentControllers - updateStudent Error:" + err);
    }

}



module.exports = { createStudent, getStudent, updateStudent, getSearch, getStudentById };