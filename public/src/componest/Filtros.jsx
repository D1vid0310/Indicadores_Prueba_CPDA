import { useState, useEffect } from "react";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//

const Filtros = ({ filtros, setFiltros }) => {
  return (
    <div className="filtros sombra contenedor2 ">
      <form>
        <div className="campo">
          <label>Filtrar Tarea</label>
          <select value={filtros} onChange={(e) => setFiltros(e.target.value)}>
            <option value="">-- Seleccione --</option>
            <option value="Telecom">Telecom</option>
            <option value="Operaciones">Operaciones</option>
            <option value="BD">Base de Datos</option>
            <option value="AS400">AS400</option>
            <option value="UNIX">Unix</option>
            <option value="POS">Pos</option>
            <option value="APP">App</option>
            <option value="WINDOWS">Windows</option>
            <option value="IST">IST</option>
            <option value="cuadre">Cuadre y Liquidacion</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filtros;
