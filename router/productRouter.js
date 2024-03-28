const express = require('express');
const { getProductByIdController, getAllProductsController, postProductController, deleteProductController } = require('../controllers/productController');

const productRouter = express.Router();

productRouter.get('/', getAllProductsController);
productRouter.post('/', postProductController);
productRouter.get('/:pid', getProductByIdController);
productRouter.delete('/:pid', deleteProductController);

module.exports = productRouter;