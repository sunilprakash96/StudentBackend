const {createNewStudent}=require('../services/studentServices');


createStudent=async(req, res)=>{
    console.log(req.file);
    const student=await createNewStudent(req.body);

    if(student){
        res.status(200).send("New Student data is created");
    }
    else{
        res.status(400).send("Bad Request")
    }
}

updateStudent=async(req, res)=>{
    const student=await updateOldStudent(req.params.id,req.body);

    if(student){
        res.status(200).send("Student data is Updated");
    }
    else{
        res.status(400).send("Bad Request")
    }
}



module.exports={createStudent};