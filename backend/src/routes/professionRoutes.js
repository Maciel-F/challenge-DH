const express = require('express');
const router = express.Router();

const professionController = require('../controllers/professionController')

router.get('/profesion', professionController.list)

router.get('/profesion/:id', professionController.id)

module.exports = router;