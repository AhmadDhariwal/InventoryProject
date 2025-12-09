const userschema = require('../models/user');
const express = require('express');
const router = express.Router();
const {handleusersignup , handleuserlogin} = require('../controllers/userauth');

router.post('/', handleusersignup);
router.post('/login', handleuserlogin);


module.exports =router;