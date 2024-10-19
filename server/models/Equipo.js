const mongoose = require('mongoose');

const EquipoSchema = new mongoose.Schema({
    Descripcion: String,
    MARCA: String,
    MODELO: String,
    "NÚMERO DE SERIE": String,
    UBICACIÓN: String,
    "NÚMERO DE ACTIVO": String,
    COG: String,
    RESGUARDANTE: String,
    OBSERVACIONES: String,
});

module.exports = mongoose.model('Equipo', EquipoSchema);
