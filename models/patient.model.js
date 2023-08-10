module.exports = (_sequelize, Sequelize) => {
    const Patient = _sequelize.define('patient', {
        patient_fullname: {
            type: Sequelize.STRING
        },
        contact_number: {
            type: Sequelize.STRING
        },
        id: {
            type: Sequelize.STRING,
            primaryKey: true
        }
       
    });

    return Patient;
}