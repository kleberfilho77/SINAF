module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
      nome: DataTypes.STRING,
      descricao: DataTypes.STRING,
      preco: DataTypes.FLOAT
    });
  
    return Produto;
  };