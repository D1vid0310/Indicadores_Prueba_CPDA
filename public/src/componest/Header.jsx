import React from "react";
import Cpda from "./Cpda";
import Control from "./Control";

//-----------------------------------------------------------------------------//
//-----------------------------------------------------------------------------//
const Header = ({
  campos,
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidpresupuesto,
  setCampos,
  setFiltros,
}) => {
  //-----------------------------------------------------------------------------//
  //-----------------------------------------------------------------------------//

  return (
    <header>
      {/* <h1>Simulacro CPDA - 2024</h1> */}
      <h1>Prueba N° 4 - 2024.</h1>
      <h2>David Chirinos</h2>
      {isValidPresupuesto ? (
        <Control
          campos={campos}
          presupuesto={presupuesto}
          setCampos={setCampos}
          setPresupuesto={setPresupuesto}
          setIsValidpresupuesto={setIsValidpresupuesto}
          setFiltros={setFiltros}
        />
      ) : (
        <Cpda
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidpresupuesto={setIsValidpresupuesto}
        />
      )}
    </header>
  );
};

export default Header;
