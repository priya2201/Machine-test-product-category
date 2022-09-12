const router = require('express').Router();
const {createProduct, getAllProducts, getSingleProduct, deleteProduct, updateProduct} = require('../controller/productController')


router.get('/product/:id',getSingleProduct)

router.post('/product',createProduct)

router.get('/products',getAllProducts)

router.delete('/product/:id',deleteProduct)

router.put("/product/:id",updateProduct)

module.exports = router;