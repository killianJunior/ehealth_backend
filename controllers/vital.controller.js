const db = require('../models/model.index')
const Vitals = db.vitals;

// Create a Patient Vitals
const takeVitals = async (req, res) => {
   
    if(!req.body.core_temperature) {
        res.status(400).send({
            message: "Content cannot be empty!"
        })
        return;
    }
    try {
    const vitals = {
        core_temperature: req.body.core_temperature,
        heart_rate: req.body.heart_rate,
        blood_pressure: req.body.blood_pressure,
        respiratory_rate: req.body.respiratory_rate,
        patientId: req.body.patientId,
        id: req.body.id
    }
    await Vitals.create(vitals)
        .then(data => {
            res.send(data);
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Server Error"});
    }

};

//Retrieves a vital by :id
 const a_vital = async (req, res) => {
   try {
    const id = req.params.id;
    const data = await Vitals.findByPk(id);
    res.json(data);
   } catch (error) {
    console.error(error);
    res.status(500).json({message:"Server Error"});
   }
};

module.exports = {
 takeVitals,
 a_vital

}

  

  