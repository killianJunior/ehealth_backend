const express = require('express');
const router = express.Router();

const { takeVitals, a_vital } = require('../controllers/vital.controller');

//Takes a patient vital
router.post('/new_patient_vital', takeVitals)

//Retrieves  Patient's vital
router.get('/patient_vital/:id', a_vital);
  

module.exports = router;


