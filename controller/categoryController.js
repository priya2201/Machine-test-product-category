const Category = require('../models/categoryModel');

exports.createCategory = async (req,res,next)=>{
    try{
        const category = await Category.create(req.body);
        res.status(200).json(category);
    }catch(err){
       return next(err);
    }

}

exports.getCategories = async (req,res)=>{
    try{
        const cate = await Category.find();
          res.status(200).json(cate)
    }catch(err){
        console.log(err);
    }
}

exports.getSingleCategory = async(req,res)=>{
    try{
        const cate = await Category.findById(req.params.id);
        if(!cate){
            res.status(404).json({
                message:"Category does not exist"
            })
        }
        res.status(200).json(cate)
    }catch(err){
            console.log(err)
    }
}

exports.deleteCategory = async(req,res)=>{
    try{
       const cate = await Category.findByIdAndRemove(req.params.id)
        if(!cate){
        res.status(404).json({
            message:"Category does not exist"
        })
    }
    res.status(200).json({
        success:true
    })
    }catch(err){
        console.log(err);
    }
}