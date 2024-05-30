// const upload = require("../middleware/multer.js");
const Details = require("../models/Details.js");
const asyncHandler = require("../utils/asyncHandler.js");
const { uploadOnCloudinary } = require("../utils/cloudinary.js");
const { ApiError } = require("../utils/ApiError.js");
const { ApiResponse } = require("../utils/ApiResponse.js");
const fs=require("fs");
const express = require("express");
const router = express.Router();
const multer=require("multer");
const storage=multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./files');
    },
    filename: function(req,file,cb){
        const uniqueSuffix=Date.now()
        cb(null,uniqueSuffix+file.originalname)
    }
})
const upload=multer({storage:storage})
router.post("/resume",upload.single("resume"), asyncHandler(async (req, res) => {
      const {
            name,
            email,
            contact,
        } = req.body
        const fileName=req.file.filename;
    try {

        // console.log(req.body);
        // const localFilePath = req.file?.path;
        // console.log(localFilePath);
        // let response;
        // if (localFilePath){
        //     response = await uploadOnCloudinary(localFilePath);
        // }
        // console.log("RESPONSE: ", response);
        // if (localFilePath && !response) {
        //     fs.unlinkSync(localFilePath)
        //     return new ApiError(500, "Error uploading file to cloudinary")
        // }

        // const resumeUrl= await response?.url;
        // console.log("RESUMEURL: ", resumeUrl);
        
          await Details.create({
            name:name,
            email:email,
            contact: contact,
            resume: fileName
        })
        res.send({status: "ok"});

        // if (!detail) {
        //     throw new ApiError(500, "Something went wrong while creating job")
        // }
        

        // return res.status(200).json(new ApiResponse(200, "Job added successfully"))
    } catch (error) {
        // console.log("Error in adding resume", error);
        // throw new ApiError(500, "Something went wrong while adding resume")
        res.json({status: "error"});
    }
})
)
router.get("/fetch",async(req,res)=>{
    // try{
    //     Details.find({}).then((data)=>{
    //         res.send({status: "ok",data: data});
    //     });
    // }
    // catch(error){
    //     res.json({status: "error"})
    // }
    try {
        // Fetch data from the collection
        const data = await Details.find({});
        res.json(data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
})
module.exports=router;