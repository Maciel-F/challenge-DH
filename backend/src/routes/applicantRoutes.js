const express = require('express');
const router = express.Router();

const applicantController = require('../controllers/applicantController')

router.get('/aspirantes', applicantController.list)

router.get('/aspirantes/:id', applicantController.id)

module.exports = router;
