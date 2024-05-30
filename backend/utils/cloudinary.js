// import {v2 as cloudinary} from "cloudinary"
const cloudinary = require('cloudinary').v2;
// import fs from "fs"
const fs=require("fs")
const CLOUDINARY_CLOUD_NAME="djgbn2jwo";
const CLOUDINARY_API_KEY="289422691265962";
const CLOUDINARY_API_SECRET="Fb5se6QiLgnTju2RmMrqQVdzpy4";

cloudinary.config({ 
  cloud_name:CLOUDINARY_CLOUD_NAME, 
  api_key:CLOUDINARY_API_KEY, 
  api_secret:CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            cloud_name:CLOUDINARY_CLOUD_NAME, 
            api_key:CLOUDINARY_API_KEY, 
            api_secret:CLOUDINARY_API_SECRET,
            resource_type: "auto"
        })
        // file has been uploaded successfull
        console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        console.error('Error uploading file to Cloudinary:', error);
        return null;
    }
}



// export { uploadOnCloudinary}
module.exports={uploadOnCloudinary};