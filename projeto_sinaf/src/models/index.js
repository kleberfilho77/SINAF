const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Cliente = require('./Cliente')(sequelize, Sequelize.DataTypes);
const Produto = require('./Produto')(sequelize, Sequelize.DataTypes);
const Compra = require('./Compra')(sequelize, Sequelize.DataTypes);

Compra.belongsTo(Cliente, { foreignKey: 'cliente_id' });
Compra.belongsTo(Produto, { foreignKey: 'produto_id' });

module.exports = { sequelize, Cliente, Produto, Compra };