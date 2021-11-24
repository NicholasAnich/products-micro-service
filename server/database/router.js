const controller = require('./controller');
const router = require('express').Router();

router.route('/products')
  .get(controller.products.getProducts);

router.route('/products/:id')
  .get(controller.products.getProductById);

router.route('/products/:product_id/styles')
  .get(controller.products.getProductStyles);

router.route('/products/:product_id/related')
  .get(controller.products.getRelatedProducts);

module.exports = router;