import { useState } from "react";
import Mensaje from "./Mensaje";

const Cpda = ({ presupuesto, setPresupuesto, setIsValidpresupuesto }) => {
  const [mensaje, setMensaje] = useState("");

  const handlePresupuesto = (e) => {
    e.preventDefault();

    if (!presupuesto || presupuesto < 0) {
      setMensaje("No es un alcance valido");
      return;
    }
    setMensaje("");
    setIsValidpresupuesto(true);
  };

  return (
    <header className="contedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label>Definir Alcance</label>
          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Añade tu alcance"
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
        </div>
        <input type="submit" value="Añadir" />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </header>
  );
};
export default Cpda;
