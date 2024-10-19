// server/controllers/movimientoController.js
const Movimiento = require('../models/Movimiento');

module.exports = {
    crearMovimiento: (req, res) => {
        // Lógica para crear un movimiento
        res.send("Crear movimiento");
    },
    obtenerMovimientos: (req, res) => {
        // Lógica para obtener movimientos
        res.send("Obtener movimientos");
    }
};
