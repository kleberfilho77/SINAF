const { Compra, Cliente, Produto } = require('../models');

exports.criarCompra = async (req, res) => {
  const { cliente_id, produto_id } = req.body;
  const novaCompra = await Compra.create({ cliente_id, produto_id });
  res.status(201).json(novaCompra);
};

exports.listarCompras = async (req, res) => {
  const { cliente_id } = req.query;
  const where = cliente_id ? { cliente_id } : {};

  const compras = await Compra.findAll({
    where,
    include: [
      { model: Cliente, attributes: ['nome', 'email'] },
      { model: Produto, attributes: ['nome', 'preco'] }
    ]
  });

  res.json(compras);
};