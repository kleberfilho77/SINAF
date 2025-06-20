const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const clienteRoutes = require('./routes/clienteRoutes');
const produtoRoutes = require('./routes/produtoRoutes');
const compraRoutes = require('./routes/compraRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/clientes', clienteRoutes);
app.use('/produtos', produtoRoutes);
app.use('/compras', compraRoutes);

sequelize.sync().then(() => {
  console.log('Banco sincronizado');
});

module.exports = app;