const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, produtoController.criarProduto);
router.get('/', authMiddleware, produtoController.listarProdutos);

module.exports = router;