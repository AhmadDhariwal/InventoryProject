const express = require('express');
const inventoryschema = require("../models/model");
const {createitem,getitems } = require('../controllers/itemsController');
const router = express.Router();


router.post('/', createitem);
router.get('/',getitems);


module.exports = router;

