const mongoose=require('mongoose');
const {Schema}= mongoose;
const DetailsSchema = new Schema({
    name: {
        type: String,
        //required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: Number,
        required: true        
    },
    resume:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
  },
{
    timestamps:true
}
);
  const Details=mongoose.model("details",DetailsSchema);
  module.exports=Details;