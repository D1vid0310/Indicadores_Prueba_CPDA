import { useState, useEffect } from "react";
import Header from "./componest/Header.jsx";
import Filtros from "./componest/Filtros.jsx";
import Reloj from "./componest/Reloj.jsx";
import Listado from "./componest/Listado.jsx";
import Modal from "./componest/Modal.jsx";
import { generarID } from "./help/index.js";
import IconoNuevaTarea from "./img/nuevo-gasto.svg";
import { number, object } from "prop-types";

function App() {
  //-----------------------------------------------------------------------------//

  const [campos, setCampos] = useState(
    localStorage.getItem("campos")
      ? JSON.parse(localStorage.getItem("campos"))
      : []
  );
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem("presupuesto")) ?? 0
  );
  const [isValidPresupuesto, setIsValidpresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setanimarModal] = useState(false);
  const [campoEditar, setCampoEditar] = useState({});
  const [filtros, setFiltros] = useState("");
  const [camposFiltros, setCamposFiltros] = useState([]);
  const [reloj, setReloj] = useState("");

  //-----------------------------------------------------------------------------//

  //-----------------------------------------------------------------------------//
  useEffect(() => {
    if (Object.keys(campoEditar).length > 0) {
      setModal(true);

      setTimeout(() => {
        setanimarModal(true);
      }, 1000);
    }
  }, [campoEditar]);

  useEffect(() => {
    localStorage.setItem("presupuesto", presupuesto ?? 0);
  }, [presupuesto]);

  useEffect(() => {
    localStorage.setItem("campos", JSON.stringify(campos) ?? []);
  }, [campos]);

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem("presupuesto") ?? 0);

    if (presupuestoLS > 0) {
      setIsValidpresupuesto(true);
    }
  }, []);

  useEffect(() => {
    if (filtros) {
      //actualizar filtrando;
      const camposFiltrados = campos.filter(
        (campo) => campo.categoria === filtros
      );

      setCamposFiltros(camposFiltrados);
    }
  }, [filtros]);

  const handleNuevaTarea = () => {
    setModal(true);
    setCampoEditar({});
    setTimeout(() => {
      setanimarModal(true);
    }, 1000);
  };

  const guardarDatos = (campo) => {
    if (campo.id) {
      const camposActualizados = campos.map((campoState) =>
        campoState.id === campo.id ? campo : campoState
      );
      setCampos(camposActualizados);
      setCampoEditar({});
    } else {
      campo.id = generarID();
      campo.fecha = Date.now();
      setCampos([...campos, campo]);
    }
    campo.fecha1 = Date.now();
    setanimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const eliminarCampo = (id) => {
    const camposActualizados = campos.filter((campo) => campo.id !== id);
    setCampos(camposActualizados);
  };

  //-----------------------------------------------------------------------------//
  //-----------------------------------------------------------------------------//

  return (
    <div className={modal ? "fijar" : " "}>
      <Header
        setCampos={setCampos}
        campos={campos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidpresupuesto={setIsValidpresupuesto}
        setFiltros={setFiltros}
      />

      {isValidPresupuesto && (
        <>
          <main>
            <Reloj />
            <Filtros filtros={filtros} setFiltros={setFiltros} />
            <Listado
              campos={campos}
              setCampoEditar={setCampoEditar}
              eliminarCampo={eliminarCampo}
              filtros={filtros}
              camposFiltros={camposFiltros}
            />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconoNuevaTarea}
              alt="Icono de Nueva Tarea"
              onClick={handleNuevaTarea}
            />
          </div>
        </>
      )}
      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setanimarModal={setanimarModal}
          guardarDatos={guardarDatos}
          campoEditar={campoEditar}
          setCampoEditar={setCampoEditar}
        />
      )}
    </div>
  );
}

export default App;
