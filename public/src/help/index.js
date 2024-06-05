import { object } from "prop-types";
import { useState } from "react";
// Funcion para generar ID Unico a cada servicio.
export const generarID = () => {
  const random = Math.random().toString(36).substring(2);
  const fecha = Date.now().toString(36);
  return random + fecha;
};

// Funcion para generar fecha al incio de cada servicio.
export const formaFecha = (fecha) => {
  const fechaNueva = new Date(fecha);

  const opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return fechaNueva.toLocaleString("es-ES");
};
// Funcion para generar fecha al final de cada servicio.
export const modificacion = (fecha1) => {
  const fechaOk = new Date(fecha1);

  return fechaOk.toLocaleString("es-ES");
};

export const calcularDiferenciaFechasYHoras = (fechaNueva, fechaOk) => {
  // Parsear las fechas y horas a objetos Date
  var date1 = new Date(fechaNueva);
  var date2 = new Date(fechaOk);

  // Calcular la diferencia en milisegundos
  var diferenciaEnMilisegundos = Math.abs(date2 - date1);

  // Calcular la diferencia en horas, minutos y segundos
  var horas = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60));
  var minutos = Math.floor(
    (diferenciaEnMilisegundos % (1000 * 60 * 60)) / (1000 * 60)
  );
  var segundos = Math.floor((diferenciaEnMilisegundos % (1000 * 60)) / 1000);

  let resultado =
    "    " +
    horas +
    " " +
    "Hora" +
    " " +
    minutos +
    " " +
    "Minuto" +
    " " +
    segundos +
    " " +
    "Segundo";

  return resultado;
};
