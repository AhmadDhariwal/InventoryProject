const express = require('express');
const inventoryschema = require("../models/model");
const {createitem,getitems,getbyid,getall,updatebyid,deletebyid } = require('../controllers/itemsController');
const router = express.Router();


router.post('/', createitem);
router.get('/',getitems);
router.get('/all', getall);
router.get('/:id', getbyid);
router.put('/:id',updatebyid);
router.delete('/:id', deletebyid);


module.exports = router;

