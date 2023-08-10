const express = require('express');
const router = express.Router();

const { addStaff, staff, aStaff} = require('../controllers/staff.controller');

//Adds a staff
router.post('/new_staff', addStaff)

//Retrieves all staff
router.get('/', staff);

//Retrieves a staff
router.get('/:id', aStaff);
  

module.exports = router;
