import React, { useState } from 'react';
import api from '../services/api';  // Ajuste de ruta relativo a la ubicación de este archivo

function AgregarEquipo() {
    const [nuevoEquipo, setNuevoEquipo] = useState({
        Descripcion: '',
        MARCA: '',
        MODELO: '',
        "NÚMERO DE SERIE": '',
        UBICACIÓN: '',
        "NÚMERO DE ACTIVO": '',
        COG: '',
        RESGUARDANTE: '',
        OBSERVACIONES: ''
    });

    const handleChange = (e) => {
        setNuevoEquipo({ ...nuevoEquipo, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/equipos', nuevoEquipo);
            alert("Equipo agregado exitosamente");
        } catch (error) {
            alert("Error al agregar el equipo");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="Descripcion" placeholder="Descripción" onChange={handleChange} />
            <input type="text" name="MARCA" placeholder="Marca" onChange={handleChange} />
            <input type="text" name="MODELO" placeholder="Modelo" onChange={handleChange} />
            <input type="text" name="NÚMERO DE SERIE" placeholder="Número de Serie" onChange={handleChange} />
            <input type="text" name="UBICACIÓN" placeholder="Ubicación" onChange={handleChange} />
            <input type="text" name="NÚMERO DE ACTIVO" placeholder="Número de Activo" onChange={handleChange} />
            <input type="text" name="COG" placeholder="COG" onChange={handleChange} />
            <input type="text" name="RESGUARDANTE" placeholder="Resguardante" onChange={handleChange} />
            <input type="text" name="OBSERVACIONES" placeholder="Observaciones" onChange={handleChange} />
            <button type="submit">Agregar Equipo</button>
        </form>
    );
}

export default AgregarEquipo;
