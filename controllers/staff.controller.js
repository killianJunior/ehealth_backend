const db = require('../models/model.index')
const Staff = db.staff;
const Op = db.Sequelize.Op;

//Adds a staff
const addStaff = async (req, res) => {
  if(!req.body.id) {
    res.status(400).send({
        message: "Content cannot be empty!"
    })
    return;
  }
    try {
        const staff = {
        staff_name: req.body.staff_name,
        role: req.body.role,
        id: req.body.id
        }
      await Staff.create(staff)
        .then(data => {
          res.send(data)
        })
    } catch (error) {
      console.error(error);
      res.status(500).json({message:"Server Error"});
    }
  }
  
//Get Staff
const staff = async (req, res) => {
    try {
      const staff = await Staff.findAll({});
      res.json(staff);
    } catch (error) {
      console.error(error);
      res.status(500).json({message:"Server Error"});
    }
}
  
//Get a staff
const aStaff = async (req, res) => {
try {
    const id = req.params.id;
    const staff = await  Staff.findByPk(id);
    res.json(staff);
} catch (error) {
    console.error(error);
    res.status(500).json({message:"Server Error"});
}
}
  
module.exports = {
    addStaff,
    staff,
    aStaff
}