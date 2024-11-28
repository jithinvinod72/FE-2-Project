const express = require('express');
const router = express.Router();
const {
    getProducts,
    getProductsByCategory,
    createProduct,
    updateProduct,
    deleteProduct,
} = require('../controllers/productController');

router.get('/', getProducts);
router.get('/:category', getProductsByCategory);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
