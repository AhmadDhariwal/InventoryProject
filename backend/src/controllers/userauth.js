const express = require('express');
const userschema = require ('../models/user');
const {v4: uuidv4} = require('uuid')


async function handleusersignup(req,res){

    try {
        const body = req.body;
        if (!body.name || !body.email || !body.username || !body.password) {
          return res.status(400).json({ error: "Data is required" });
        }
        //const generatedId =  shortid.generate();   // We can also use it for the generateid `ITEM_${Date.now()}`;
    
        const createduser = await userschema.create({
            name: body.name,
            email : body.email,
            username : body.username,
            password: body.password,
        })
        res.status(201).json({
             message: "User created successfully",
            item: createduser,
        });
    
            }
        catch (err) {
        console.error("createitem error:", err);
        res.status(500).json({ error: "Server error" });
      }
    }

async function handleuserlogin(req,res){

    try {
        const body = req.body;
        if ( !body.username || !body.password) {
          return res.status(400).json({ error: " Valid Data is required" });
        }
        //const generatedId =  shortid.generate();   // We can also use it for the generateid `ITEM_${Date.now()}`;
    
        const logineduser = await userschema.findOne({
            username : body.username,
            password: body.password,
        })
        if(!logineduser){
            return res.status(400).json({ error: "Invalid username or password" });
        }
        res.status(201).json({
             message: "User found successfully",
            item: logineduser,
        });
    
            }
        catch (err) {
        console.error("finduser error:", err);
        res.status(500).json({ error: "Server error" });
      }
    }

module.exports = {
    handleusersignup,
    handleuserlogin,
};