import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//
const Control = ({
  campos,
  setPresupuesto,
  presupuesto,
  setCampos,
  setIsValidpresupuesto,
  setFiltros,
}) => {
  const [porcentaje, setPorcentaje] = useState(0);
  const [avanzar, setAvanzar] = useState(0);
  const [avance, setAvance] = useState(0);
  const inicio = 0;
  useEffect(() => {
    const totalGastado = campos.reduce(
      (total, campo) => campo.cantidad + total,
      inicio
    );
    const totalAvanzar = presupuesto - totalGastado;

    const nuevoPorcentaje = (
      ((presupuesto - totalAvanzar) / presupuesto) *
      100
    ).toFixed(2);

    setAvanzar(totalAvanzar);
    setAvance(totalGastado);
    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 1200);
  }, [campos]);

  const handleResetApp = () => {
    const resultado = confirm("¿Deseas Resetear la APP?");

    if (resultado) {
      setCampos([]);
      setPresupuesto(0);
      setIsValidpresupuesto(false);
      setFiltros("");
    }
  };

  //-----------------------------------------------------------------------------//
  //-----------------------------------------------------------------------------//

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          text={`${porcentaje}% Avance`}
          value={porcentaje}
          styles={buildStyles({
            pathColor: "#3B82F6",
            trailColor: "#F5F5F5",
            textColor: "black",
          })}
        />
      </div>
      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Resetear App
        </button>
        <p>
          <span>Alcance: </span>
          {presupuesto}%
        </p>
        <p>
          <span>Por Avanzar:</span>
          {avanzar}%
        </p>
        <p>
          <span>Avance:</span>
          {avance}%
        </p>
      </div>
    </div>
  );
};

export default Control;
