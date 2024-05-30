const express=require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const User= require('../models/User');
const Staff=require('../models/Staff');
const fetchuser=require('../middleware/fetchuser');
const fetchstaff=require('../middleware/fetchstaff');
const router=express.Router();
const JWT_SECRET="hbhagat123";
//ROUTE: 1-creating user
router.post('/createuser',async (req,res)=>{
    let success=false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); 
}
try{
    let user=await User.findOne({email:req.body.email});
    if(user){
        return res.status(400).json({success,error:"already existing email"});
    }
    const salt=await bcrypt.genSalt(10);
    const secPass=await bcrypt.hash(req.body.password,salt);
    user= await User.create({
    name: req.body.name,
    email: req.body.email,  
    password: secPass,
  })
  data={
    user:{
        id:user.id
    }
  }
  authToken = jwt.sign(data,JWT_SECRET);
  success=true;
  res.json({success,authToken});
}catch{
    res.status(500).send("some error occured");
}
})
//Route 2: login user
router.post('/login',async (req,res)=>{
    let success=false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {email,password}=req.body;
    try{
        let user=await User.findOne({email});
        if(!user){
            return res.status(400).json({error:"enter a valid email"});
        }
        const passwordCompare=await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            success=false;
            return res.status(400).json({success,error:"enter a valid password"});
        }
        data={
            user:{
                id:user.id
            }
        }
        const authToken=jwt.sign(data,JWT_SECRET);
        success=true;
        res.send({success,authToken});
    }catch(error){
        res.status(500).json({error:"some error occured"});
    } 

})
//Route 3: create staff
router.post('/createstaff',async (req,res)=>{
    let success=false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() }); 
}
try{
    let staff=await Staff.findOne({email:req.body.email});
    if(staff){
        return res.status(400).json({success,error:"already existing email"});
    }
    const salt=await bcrypt.genSalt(10);
    const secPass=await bcrypt.hash(req.body.password,salt);
    staff= await Staff.create({
    name: req.body.name,
    email: req.body.email,  
    password: secPass,
  })
  data={
    staff:{
        id:staff.id
    }
  }
  authToken = jwt.sign(data,JWT_SECRET);
  success=true;
  res.json({success,authToken});
}catch{
    res.status(500).send("some error occured");
}
})
//Route 4: staff login
router.post('/stafflogin',async (req,res)=>{
    let success=false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {email,password}=req.body;
    try{
        let staff=await Staff.findOne({email});
        if(!staff){
            return res.status(400).json({error:"enter a valid email"});
        }
        const passwordCompare=await bcrypt.compare(password,staff.password);
        if(!passwordCompare){
            success=false;
            return res.status(400).json({success,error:"enter a valid password"});
        }
        data={
            staff:{
                id:staff.id
            }
        }
        const authToken=jwt.sign(data,JWT_SECRET);
        success=true;
        res.send({success,authToken});
    }catch(error){
        res.status(500).json({error:"some error occured"});
    } 

})
module.exports=router;