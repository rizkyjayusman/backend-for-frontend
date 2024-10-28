const Product = require('../models/product.model');

async function get(page = 1){
  const pageSize = 10
  const data = await Product.findAll({
    limit: pageSize,
    offset: (page - 1) * pageSize,
  });
  const meta = {page};

  return {
    data,
    meta
  }
}

async function detail(id){
    const data = await Product.findOne({ where: { id } });
    return {
      data,
    }
}

module.exports = {
    get,
    detail,
}