require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const patientRoutes = require('./routes/patient.routes');
const vitalRoutes = require('./routes/vital.routes');
const staffRoutes = require('./routes/staff.routes');

const app = express();

app.options('*', cors())

var corsOptions = {
    // origin: ["https://ehealth-vue-test.vercel.app", "https://ehealth-backend.vercel.app/api"]
    origin: "*"

};

//allow cross origin request
app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));

//parse request of content-type - application/json
// app.use(bodyParser.json());
app.use(express.json());

//parse request of content-type - application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true}));

//Routes
app.get("/home", (req, res) => {
    res.json({
        title:"E-Health Test Case",
        message: "Killian's Express test application"
    });
});
app.use("/api/patients", patientRoutes);
app.use("/api/vitals", vitalRoutes);
app.use("/api/staff", staffRoutes)


const db = require('./models/model.index')
db._sequelize.sync().then(() => {
    console.log("sync db.");
  });

