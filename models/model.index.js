const { localdbConfig, onlinedbConfig, itemsPool } = require('../config/dbConfig'); //for local testing


const { Sequelize } = require('sequelize');

// local testing
// const _sequelize = new Sequelize(localdbConfig.DB, localdbConfig.USER, localdbConfig.PASSWORD, {
//     host: localdbConfig.HOST,
//     dialect: localdbConfig.dialect
// });

const _sequelize = new Sequelize(onlinedbConfig.DB, onlinedbConfig.USER, onlinedbConfig.PGPASSWORD, {
  host: onlinedbConfig.HOST,
  dialect:localdbConfig.dialect,
  dialectOptions: {
    ssl: true,
    native: true
  },
});


  const testDbConnection = async () => {
    try {
      await _sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };

  const db = {};
  db.Sequelize = Sequelize;
  db._sequelize = _sequelize;
  
  db.testDbConnection = testDbConnection(); 

  db.patient = require('./patient.model')(_sequelize, Sequelize);
  db.vitals = require('./vital.model')(_sequelize, Sequelize);
  db.staff = require('./staff.model')(_sequelize, Sequelize);

  db.patient.hasMany(db.vitals, { as: "vitals" });
  db.vitals.belongsTo(db.patient, {
    foreignKey: "patientId",
    as: "patient",
  });


  module.exports = db;