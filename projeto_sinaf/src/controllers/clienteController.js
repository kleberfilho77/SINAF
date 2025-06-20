const { Cliente } = require('../models');
const bcrypt = require('bcrypt');
const { gerarToken } = require('../services/authService');

exports.criarCliente = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const senhaHash = await bcrypt.hash(senha, 10);
    const novoCliente = await Cliente.create({ nome, email, senha: senhaHash });
    res.status(201).json(novoCliente);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao cadastrar cliente' });
  }
};

exports.login = async (req, res) => {
  const { email, senha } = req.body;
  const cliente = await Cliente.findOne({ where: { email } });

  if (!cliente || !(await bcrypt.compare(senha, cliente.senha))) {
    return res.status(401).json({ erro: 'Credenciais inválidas' });
  }

  const token = gerarToken(cliente);
  res.json({ token });
};

exports.listarClientes = async (_req, res) => {
  const clientes = await Cliente.findAll({ attributes: { exclude: ['senha'] } });
  res.json(clientes);
};