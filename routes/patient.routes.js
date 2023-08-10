const express = require('express');
const router = express.Router();

const { allPatients, aPatient, registerPatient, searchPatients } = require('../controllers/patient.controller');

//Registers a Patient
router.post('/new_patient', registerPatient)

//Retrieves all Patients
router.get('/', allPatients);

// Retrieves searched Patients
router.post('/searched_patients', searchPatients);
  
//Retrieves a patient
router.get('/patient/:id', aPatient);

module.exports = router;


