import React, { useEffect, useState } from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { formaFecha } from "../help/index";
import { modificacion } from "../help/index";
import { calcularDiferenciaFechasYHoras } from "../help/index";

import TELECOM from "../img/TELECOM.svg";
import MONITOREO from "../img/MONITOREO.svg";
import AS400 from "../img/AS400.svg";
import UNIX from "../img/UNIX.svg";
import IST from "../img/IST.svg";
import POS from "../img/POS-.svg";
import WINDOWS from "../img/WINDOWS.svg";
import APP from "../img/APPR.svg";
import BD from "../img/BD.svg";
import CYL from "../img/CYL.svg";

const imgNueva = {
  Telecom: TELECOM,
  Operaciones: MONITOREO,
  AS400: AS400,
  UNIX: UNIX,
  IST: IST,
  WINDOWS: WINDOWS,
  POS: POS,
  cuadre: CYL,
  BD: BD,
  APP: APP,
};

const Campo = ({ campo, setCampoEditar, eliminarCampo }) => {
  const { categoria, tarea, cantidad, id, fecha } = campo;
  const { fecha1 } = campo;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setCampoEditar(campo)}>Editar</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => eliminarCampo(id)} destructive={true}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={imgNueva[categoria]} alt="Icono Gasto" />
            <div className="descripcion-gasto">
              <p className="categoria">{categoria}</p>
              <p className="categoria">{tarea}</p>
              <p className="fecha-gasto">
                Inicio:
                <span>{formaFecha(fecha)}</span>
              </p>
              <p className="fecha-gasto">
                Fin:{""}
                <span>
                  {cantidad === 10 ? modificacion(fecha1) : "00:00:00"}
                </span>
              </p>
              <p className="fecha-gasto">
                RTO:
                <span>{calcularDiferenciaFechasYHoras(fecha, fecha1)}</span>
              </p>
              <p>
                <div>
                  <input className="text" type="text" />
                </div>
              </p>
            </div>
          </div>
          <p className="cantidad-gasto">{cantidad}%</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};
export default Campo;
