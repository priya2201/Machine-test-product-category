const Product  = require('../models/productModel');
const {handleMultiParts} = require('../utils/imageStorage');
exports.createProduct = async (req,res)=>{

       handleMultiParts(req,res,async(err)=>{
        const filePath = req.file.path;
        console.log(filePath);
           if(err){
             console.log(err);
           }

           const {name , price, category} = req.body;
           let product;
           try{
        
          product = await Product.create({
                 name,
                 price,
                 image:filePath,
                 category
             })
         }catch(err){
           console.log(err)
         }
 
         res.status(200).json(product)
       })

       
}

exports.getAllProducts = async(req,res)=>{
    let limit = 5,currentPage = req.query.page || 1,
    skip = (currentPage - 1) * limit;
    try{
     const products = await Product.find()
     .limit(limit)
     .skip(skip)
     .populate('category','name _id')
     .select('-__v -createdAt -updatedAt');
     res.status(200).json(products)
    }catch(err){
       console.log(err);
    }
}

exports.getSingleProduct = async (req,res,next)=>{

    try{
    const product = await Product.findById({_id:req.params.id}).select('-__v -createdAt -updatedAt');
    if(!product){
      console.log("Product not found")
    }
    res.status(200).json(product)
    }catch(err){
        console.log(err)
    }
}

exports.updateProduct = async (req,res,next)=>{
    try{
        const product = await Product.findByIdAndUpdate({_id:req.params.id},
            req.body
        ,{new:true});
        if(!product){
            console.log("Product not found")
        }
        return res.status(201).json({
            success:true,
            product
        })
        
    }catch(err){
        console.log(err)
    }
}
exports.deleteProduct = async (req,res,next)=>{
        console.log(req.params.id);

        try{
            const product = await Product.findByIdAndRemove({_id:req.params.id})
            if(!product){
                console.log("Product not found")
            }
           return res.status(200).json({
                success:true
            })
        }catch(err){
            console.log(err)
        }
}
