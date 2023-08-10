const localdbConfig = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "kizzy_32",
    DB: "testdb",
    dialect: "postgres",
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

const onlinedbConfig = {
    HOST: "dpg-cj9sa4hduelc739t8fd0-a.singapore-postgres.render.com",
    USER: "ehealthtestdb_user",
    PGPASSWORD: "D6qcfZ9fldaYCJTP8dcZOnUSVrKp562o",
    DB: "ehealthtestdb",
    dialect: "postgres",
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

const { Pool } = require('pg');
const itemsPool = new Pool({
    connectionString: process.env.DBConfigLink,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = {
    localdbConfig,
    itemsPool,
    onlinedbConfig
}