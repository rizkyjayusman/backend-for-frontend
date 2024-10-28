const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const Product = sequelize.define('products', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

module.exports = Product;