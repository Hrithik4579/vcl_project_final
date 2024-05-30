// const mongoose=require('mongoose');
// const mongoURI='';
const mongoURI = 'mongodb://localhost:27017/mydb';
const  connectToMongo=()=>{
    mongoose.connect(mongoURI)
    .then(() => {
      console.log('Connected to MongoDB');

    })
    .catch(err => {
      console.error('MongoDB connection error:', err);
    });
    
}
module.exports=connectToMongo;
// export default connectToMongo
// // import mongoose from "mongoose";

// const DB_NAME="mydb";
// const connectDB = async () => {
//     try {
//         const connectionInstance = await mongoose.connect(`${mongoURI}/${DB_NAME}`)
//         console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
//     } catch (error) {
//         console.log("MONGODB connection FAILED ", error);
//         process.exit(1)
//     }
// }
const mongoose = require('mongoose');