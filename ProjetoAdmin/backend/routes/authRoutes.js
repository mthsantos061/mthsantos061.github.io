const express = require('express');
const { login } = require('../controllers/authController');
const router = express.Router();

router.post('/login', login);
// You could add a /register route here if needed

module.exports = router;