const mongoose = require('mongoose');

const MovimientoSchema = new mongoose.Schema({
    equipoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Equipo' },
    fecha: { type: Date, default: Date.now },
    ubicacionAnterior: String,
    ubicacionNueva: String,
    resguardanteAnterior: String,
    resguardanteNuevo: String,
    descripcionMovimiento: String,
});

module.exports = mongoose.model('Movimiento', MovimientoSchema);
