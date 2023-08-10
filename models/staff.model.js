module.exports = (_sequelize, Sequelize) => {
    const Staff = _sequelize.define('Staff', {
        staff_name: {
            type: Sequelize.STRING
        },
        role: {
            type: Sequelize.STRING
        },
        id: {
            type: Sequelize.STRING,
            primaryKey: true
        }
    });

    return Staff;
}