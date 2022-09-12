const router = require('express').Router();
const {createCategory, getCategories, getSingleCategory, deleteCategory} = require('../controller/categoryController');

router.post('/category',createCategory);

router.get('/category',getCategories)

router.get('/category/:id',getSingleCategory)

router.delete('/category/:id',deleteCategory)

module.exports = router;