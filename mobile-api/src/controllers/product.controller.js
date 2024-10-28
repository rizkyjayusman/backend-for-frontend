const productService = require('../services/product.service');

async function get(req, res, next) {
  try {
      res.json(await productService.get(req.query.page));
  } catch (err) {
      console.error(`Error while getting products`, err.message);
      next(err);
  }
}

async function detail(req, res, next) {
  try {
    res.json(await productService.detail(req.params.id));
  } catch (err) {
    console.error(`Error while get detail product`, err.message);
    next(err);
  }
}


module.exports = {
  get,
  detail,
};