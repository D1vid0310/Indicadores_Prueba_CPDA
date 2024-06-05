import { useEffect, useState } from "react";
import Mensaje from "./Mensaje";
import Cerra from "../img/cerrar.svg";

const Modal = ({
  setModal,
  animarModal,
  setanimarModal,
  guardarDatos,
  campoEditar,
  setCampoEditar,
}) => {
  const [mensaje, setMensaje] = useState("");
  const [tarea, setTarea] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fecha, Setfecha] = useState("");
  const [fecha1, Setfecha1] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (Object.keys(campoEditar).length > 0) {
      setTarea(campoEditar.tarea);
      setCantidad(campoEditar.cantidad);
      setCategoria(campoEditar.categoria);
      setId(campoEditar.id);
      Setfecha(campoEditar.fecha);
      Setfecha1(campoEditar.fecha1);
    }
  }, []);

  const ocultarModal = () => {
    setanimarModal(false);
    setCampoEditar({});
    setTimeout(() => {
      setModal(false);
    }, 1000);
  };

  const envioSubmit = (e) => {
    e.preventDefault();
    if ([tarea, cantidad, categoria].includes("")) {
      setMensaje("Todos los campos son obligatorios");
      setTimeout(() => {
        setMensaje("");
      }, 3000);
      return;
    }
    guardarDatos({ tarea, cantidad, categoria, id, fecha, fecha1 });
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={Cerra} alt="cerrarmoldal" onClick={ocultarModal} />
      </div>
      <form
        onSubmit={envioSubmit}
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
      >
        <legend>{campoEditar.tarea ? "Editar Tarea" : "Añadir Tarea"}</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        <div className="campo">
          <label htmlFor="tarea">Nueva Tarea</label>
          <input
            id="tarea"
            type="text"
            placeholder="Añade la nueva tarea"
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="avance">Avance</label>

          <input
            id="avance"
            type="number"
            placeholder="Añade el avance de la tarea"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Area Involucrada</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
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
        <input
          type="submit"
          value={campoEditar.tarea ? "Editar Tarea" : "Añadir Tarea"}
        />
      </form>
    </div>
  );
};

export default Modal;
