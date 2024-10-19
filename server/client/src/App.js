import React, { useEffect, useState } from 'react';
import AgregarEquipo from './components/AgregarEquipo';
import api from './services/api';

function App() {
    const [equipos, setEquipos] = useState([]);  // Asegúrate de inicializar equipos como un array

    useEffect(() => {
      const fetchEquipos = async () => {
          try {
              const response = await api.get('/equipos');
              console.log("Datos recibidos:", response.data);
  
              // Verificar la estructura completa del primer equipo
              if (response.data.length > 0) {
                  console.log("Primer equipo completo:", response.data[0]);
              }
  
              setEquipos(response.data);
          } catch (error) {
              console.error("Error fetching data: ", error);
              setEquipos([]);  // En caso de error, asegura que equipos sea un array vacío
          }
      };
  
      fetchEquipos();
  }, []);
  

  return (
    <div className="App">
        <h1>Inventario de Equipos</h1>

        {/* Formulario para agregar un nuevo equipo */}
        <h2>Agregar un Nuevo Equipo</h2>
        <AgregarEquipo />

        {/* Lista de equipos */}
        <h2>Lista de Equipos</h2>
        <ul>
            {Array.isArray(equipos) ? (
                equipos.map((equipo, index) => (
                    <li key={index}>
                        <p><strong>Descripción:</strong> {equipo.Descripcion || "Sin descripción"}</p>
                        <p><strong>Marca:</strong> {equipo.MARCA || "Sin marca"}</p>
                        <p><strong>Modelo:</strong> {equipo.MODELO || "Sin modelo"}</p>
                        <p><strong>Número de Serie:</strong> {equipo["NÚMERO DE SERIE"] || "Sin número de serie"}</p>
                        <p><strong>Ubicación:</strong> {equipo.UBICACIÓN || "Sin ubicación"}</p>
                        <p><strong>Número de Activo:</strong> {equipo["NÚMERO DE ACTIVO"] || "Sin número de activo"}</p>
                        <p><strong>COG:</strong> {equipo.COG || "Sin COG"}</p>
                        <p><strong>Resguardante:</strong> {equipo.RESGUARDANTE || "Sin resguardante"}</p>
                        <p><strong>Observaciones:</strong> {equipo.OBSERVACIONES || "Sin observaciones"}</p>
                    </li>
                ))
            ) : (
                <p>No hay datos disponibles</p>
            )}
        </ul>
    </div>
);  

}

export default App;
