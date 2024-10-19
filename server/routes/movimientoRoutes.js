
const express = require('express');
const router = express.Router();
const MovimientoController = require('../controllers/movimientoController');

router.post('/', MovimientoController.crearMovimiento);  // Verifica esta línea
router.get('/', MovimientoController.obtenerMovimientos);

module.exports = router;

    