const express = require('express');

const app = express();

app.listen(3000, () =>
console.log('servidor andando'))

//app.get('/', (req,res) => {res.send('<h1>hola mundo</h1>')});