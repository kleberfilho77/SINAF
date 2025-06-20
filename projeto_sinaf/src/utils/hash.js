const bcrypt = require('bcrypt');

exports.hashSenha = async (senha) => await bcrypt.hash(senha, 10);

exports.verificarSenha = async (senha, hash) => await bcrypt.compare(senha, hash);