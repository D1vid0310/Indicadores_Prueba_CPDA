import React from "react";
import Campo from "./Campo";

const Listado = ({
  campos,
  setCampoEditar,
  eliminarCampo,
  filtros,
  camposFiltros,
}) => {
  return (
    <div className="listado-gastos contenedorr">
      {filtros ? (
        <>
          <h2>{camposFiltros.length ? "Tareas." : "No hay Tareas."} </h2>
          {camposFiltros.map((campo) => (
            <Campo
              key={campo.id}
              campo={campo}
              setCampoEditar={setCampoEditar}
              eliminarCampo={eliminarCampo}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{camposFiltros.length ? "No hay Tareas." : "Tareas."} </h2>
          {campos.map((campo) => (
            <Campo
              key={campo.id}
              campo={campo}
              setCampoEditar={setCampoEditar}
              eliminarCampo={eliminarCampo}
            />
          ))}
        </>
      )}
    </div>
  );
};
export default Listado;
