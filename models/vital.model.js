module.exports = (_sequelize, Sequelize) => {
    const Vitals = _sequelize.define('vitals', {
        core_temperature: {
            type: Sequelize.STRING
        },
        heart_rate: {
            type: Sequelize.STRING
        },
        blood_pressure: {
            type: Sequelize.STRING
        },
        respiratory_rate: {
            type: Sequelize.STRING
        },
        id: {
            type: Sequelize.STRING,
            primaryKey: true
        }
    });

    return Vitals
}