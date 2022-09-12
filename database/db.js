const mongoose = require('mongoose');

exports.db = ()=>{
    mongoose.connect('mongodb://localhost:27017/product',{
        useNewURLParser:true,
        useUnifiedTopology:true,
    })
    const connection = mongoose.connection;
    connection.once('open',()=>{
        console.log("Database connected")
    });

    connection.on('error',()=>{
        console.log("Something went wrong!")
    })
}