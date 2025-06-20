const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ erro: 'Token não enviado' });

  const [, token] = authHeader.split(' ');

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.cliente = payload;
    next();
  } catch (err) {
    return res.status(401).json({ erro: 'Token inválido ou expirado' });
  }
};