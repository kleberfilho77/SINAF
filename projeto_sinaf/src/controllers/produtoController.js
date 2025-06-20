const { Produto } = require('../models');
const { Op } = require('sequelize');

exports.criarProduto = async (req, res) => {
  const { nome, descricao, preco } = req.body;
  const novoProduto = await Produto.create({ nome, descricao, preco });
  res.status(201).json(novoProduto);
};

exports.listarProdutos = async (req, res) => {
    const { preco_min, preco_max } = req.query;
    let where = {};
  
    if (preco_min && preco_max) {
      where.preco = {
        [Op.gte]: parseFloat(preco_min),
        [Op.lte]: parseFloat(preco_max)
      };
    }
  
  const produtos = await Produto.findAll({ where });
  res.json(produtos);
};