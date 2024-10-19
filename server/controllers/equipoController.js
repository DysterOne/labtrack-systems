const Equipo = require('../models/Equipo');  // Modelo de Equipo
const Movimiento = require('../models/Movimiento');  // Modelo de Movimiento (para registrar cambios)

// 1. Obtener todos los equipos
const obtenerEquipos = async (req, res) => {
    try {
        const equipos = await Equipo.find();
        res.json(equipos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los equipos" });
    }
};

// 2. Agregar un nuevo equipo
const agregarEquipo = async (req, res) => {
    try {
        const nuevoEquipo = new Equipo(req.body);
        await nuevoEquipo.save();
        res.status(201).json(nuevoEquipo);
    } catch (error) {
        res.status(400).json({ message: "Error al agregar equipo" });
    }
};

// 3. Actualizar un equipo existente
const actualizarEquipo = async (req, res) => {
    try {
        const equipoActualizado = await Equipo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(equipoActualizado);
    } catch (error) {
        res.status(400).json({ message: "Error al actualizar equipo" });
    }
};

// 4. Eliminar un equipo
const eliminarEquipo = async (req, res) => {
    try {
        await Equipo.findByIdAndDelete(req.params.id);
        res.json({ message: "Equipo eliminado" });
    } catch (error) {
        res.status(400).json({ message: "Error al eliminar equipo" });
    }
};

// 5. Buscar equipos por criterios específicos
const buscarEquipos = async (req, res) => {
    try {
        const criterios = req.query;
        const equipos = await Equipo.find(criterios);
        res.json(equipos);
    } catch (error) {
        res.status(400).json({ message: "Error al buscar equipos" });
    }
};

// 6. Registrar un movimiento de equipo (trazabilidad)
const registrarMovimiento = async (req, res) => {
    try {
        const nuevoMovimiento = new Movimiento(req.body);
        await nuevoMovimiento.save();
        res.status(201).json(nuevoMovimiento);
    } catch (error) {
        res.status(400).json({ message: "Error al registrar movimiento" });
    }
};

module.exports = { obtenerEquipos, agregarEquipo, actualizarEquipo, eliminarEquipo, buscarEquipos, registrarMovimiento };
