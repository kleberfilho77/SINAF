const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', clienteController.criarCliente);
router.post('/login', clienteController.login);
router.get('/', authMiddleware, clienteController.listarClientes);

module.exports = router;