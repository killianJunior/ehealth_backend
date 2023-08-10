const db = require('../models/model.index')
const Patient = db.patient;
const Op = db.Sequelize.Op;

// Register a Patient
const registerPatient = async (req, res) => {
  if(!req.body.id) {
    res.status(400).send({
        message: "Content cannot be empty!"
    })
    return;
}
  try {
    const patient = {
      patient_fullname: req.body.patient_fullname,
      contact_number: req.body.contact_number,
      id: req.body.id
    }
    await Patient.create(patient)
      .then(data => {
        res.send(data)
      })
  } catch (error) {
    console.error(error);
    res.status(500).json({message:"Server Error"});
  }
}

 //Search
const searchPatients = async (req, res) => {
  try {
    const patient_fullname = req.body.patient_fullname;
    console.log(patient_fullname);
    const patient = await Patient.findOne({ where: { patient_fullname: patient_fullname } })
    if (patient != null) {
      res.json(patient)
      console.log("Successful", patient)
    } else {
      res.json()
      console.log("No Matching Record")
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({message:"Search Server Error"});
  }
};

//Get All Patients
const allPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll({});
    res.json(patients);
  } catch (error) {
    console.error(error);
    res.status(500).json({message:"Server Error"});
  }
}

//Get a patient
const aPatient = async (req, res) => {
  try {
    const id = req.params.id;
    const patient = await  Patient.findByPk(id,{ include: ["vitals"] }  );
    res.json(patient);
  } catch (error) {
    console.error(error);
    res.status(500).json({message:"Server Error"});
  }
}

  module.exports = {
    allPatients,
    aPatient,
    registerPatient,
    searchPatients
  }

  