module.exports = (sequelize, DataTypes) => {
    const Compra = sequelize.define('Compra', {
      cliente_id: DataTypes.INTEGER,
      produto_id: DataTypes.INTEGER
    });
  
    return Compra;
  };