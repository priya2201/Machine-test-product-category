require('dotenv').config();
const express = require('express')
const app = express();
const {db} = require('./database/db');
const productRoutes = require('./routes/productRoutes')
const categoryRoutes = require('./routes/categoryRoutes')


db();



app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/api/v1',productRoutes);
app.use('/api/v1',categoryRoutes);



app.listen(3000,()=>console.log(`Listening on port 3000`));