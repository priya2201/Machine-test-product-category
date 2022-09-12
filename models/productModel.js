const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        
    },
    category:{
         type:mongoose.Types.ObjectId,
         ref:'Category',
                     
            }

    
    
},{
    timestamps:true
})

module.exports = mongoose.model('Product',productSchema)