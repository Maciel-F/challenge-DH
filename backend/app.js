const express = require('express');
const app = express();

const applicantRoutes = require('./src/routes/applicantRoutes');
const professionRoutes = require('./src/routes/professionRoutes');

//Ruteos
app.use('/', applicantRoutes)
app.use('/', professionRoutes)

app.listen(3000, () =>
console.log('servidor andando'))

