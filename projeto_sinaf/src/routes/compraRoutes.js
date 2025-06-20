const express = require('express');
const router = express.Router();
const compraController = require('../controllers/compraController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, compraController.criarCompra);
router.get('/', authMiddleware, compraController.listarCompras);

module.exports = router;