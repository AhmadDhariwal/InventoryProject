const express = require ('express');
const inventoryschema = require("../models/model");
const shortid = require('shortid');


async function createitem (req, res) {
		try {
    const body = req.body;
    if (!body.name || !body.quantity || !body.price || !body.category) {
      return res.status(400).json({ error: "Data is required" });
    }
    const generatedId =  shortid.generate();   // We can also use it for the generateid `ITEM_${Date.now()}`;

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

async function getbyid(req,res) {
    try{

        const searchid = req.params.id;

        if(!searchid){
          return res.status(400).json({error: "bad request"});

        }
      

        const entry = await inventoryschema.findOne({ id : searchid});

    
    if(!entry) return res.status(404).json({error : "Not found "});
    return res.json(entry);
  }
    catch(err){
      console.error("Redirect error:", err);
        res.status(500).json({ error: "Server error" });
    }
};


async function getall(req, res) {
     try {
      const inventory = await inventoryschema.find({});
      return res.json(inventory);
     }
     catch(err){
        console.error("Get Items : ",err);
         res.status(500).json({ Error : "Server Error" });

     }
};

async function updatebyid(req,res){
  try{

   const body = req.body;
    const updateid = req.params.id;

       if(!body.price || body.price < 0 || body.price == 0 || body.quantity ||body.quantity <0 || !body.quantity === 0){
        return res.status(400).json({error : "Not an Updated term"});
       }
    
        const data = await inventoryschema.findOneAndUpdate(
          {id : updateid},
          {
        $set : {
          price : Number(body.price),
          quantity : Number(body.quantity),
  }
  },
  {new : true}
);
   if (!data) return res.status(404).json({error : "Not found "});

         return res.status(201).json({
        data,
    });
 
  }

  catch(err){
       console.error("Redirect error:", err);
       res.status(500).json({ error: "Server error" });
  }
};

async function deletebyid(req,res){
  try{
   const searchid = req.params.id;

        if(!searchid){
          return res.status(400).json({error: "bad request"});

        }
        const entry = await inventoryschema.findOneAndDelete({ id : searchid});
    
    if(!entry) return res.status(404).json({error : "Not found "});
    return res.status(201).json({
      message : "Item deleted Successfully", 
      deletedIte : entry
    });
  }
    catch(err){
      console.error("Redirect error:", err);
        res.status(500).json({ error: "Server error" });
    }
};


module.exports = {
createitem ,
getitems,
 getbyid,
 getall,
 updatebyid,
 deletebyid,
}