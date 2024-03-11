const express = require('express');
const PORT = 3000
const app = express();
const cors = require('cors')

app.use(cors());

const applicantRoutes = require('./src/routes/applicantRoutes');
const professionRoutes = require('./src/routes/professionRoutes');

//Ruteos
app.use('/', applicantRoutes)
app.use('/', professionRoutes)

app.listen(PORT, () =>
console.log('servidor andando'))

