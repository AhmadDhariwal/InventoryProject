const express = require ('express');
const inventoryschema = require("../models/model");
const shortid = require('shortid');


async function createitem (req, res) {
		try {
    const body = req.body;
    if (!body.name || !body.quantity || !body.price || !body.category) {
      return res.status(400).json({ error: "Data is required" });
    }
    const generatedId =  shortid.generate();   // `ITEM_${Date.now()}`;

    const createditem = await inventoryschema.create({
        id : generatedId,
        name: body.name,
        quantity : body.quantity,
        price : body.price,
        category: body.category,
    })
    res.status(201).json({
         message: "Item created successfully",
        item: createditem,
    });

        }
    catch (err) {
    console.error("createitem error:", err);
    res.status(500).json({ error: "Server error" });
  }
}

async function getitems(req,res) {
    try{
      const {category,page =1 ,limit =10} = req.query;

      const filter ={};

       if(category){
        filter.category = category;
       }
       const skip = (page - 1) * limit;
       
       const items =  await inventoryschema 
       .find(filter)
       .skip(skip)
       .limit(Number(limit));
    
    
    const total = await inventoryschema.countDocuments(filter);

    return res.json({
      total,
      page : Number(page),
      limit : Number(limit),
      items
    });

    }
    catch(err){
        console.error("Get Items:", err);
        return res.status(500).json({ error: "Server Error" });
    }
}




// async function getitems (req, res) {
//      try {
//       const inventory = await inventoryschema.find({});
//       return res.json(inventory);


//      }
//      catch(err){
//         console.error("Get Items : ",err);
//          res.status(500).json({
//             Error : "Server Error",
//         })

//      }
// }




module.exports = {
createitem ,
getitems,
}