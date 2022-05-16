const express = require('express');
const router = express.Router();


const ProductController= require('../controller/ProductController')

router.get('/', ProductController.showProducts);
router.get('/create', ProductController.createProduct);
router.get('/:id',ProductController.getProduct);
router.post('/products/create', ProductController.createProductPost);


module.exports = router;