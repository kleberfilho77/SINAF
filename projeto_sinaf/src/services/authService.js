const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.gerarToken = (cliente) => {
  return jwt.sign(
    { id: cliente.id, email: cliente.email },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
};