const express = require('express');
const router = express.Router();
const EquipoController = require('../controllers/equipoController');

// Rutas de CRUD para Equipos
router.get('/', EquipoController.obtenerEquipos);  // Obtener todos los equipos
router.post('/', EquipoController.agregarEquipo);  // Agregar un nuevo equipo
router.put('/:id', EquipoController.actualizarEquipo);  // Actualizar un equipo
router.delete('/:id', EquipoController.eliminarEquipo);  // Eliminar un equipo

// Ruta para buscar equipos por criterios específicos
router.get('/buscar', EquipoController.buscarEquipos);

// Ruta para registrar movimientos de equipos
router.post('/movimientos', EquipoController.registrarMovimiento);

module.exports = router;
