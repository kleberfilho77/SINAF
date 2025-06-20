module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('Cliente', {
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING
    });
  
    return Cliente;
  };