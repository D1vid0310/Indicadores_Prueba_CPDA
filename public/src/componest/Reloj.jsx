import react, { useRef } from "react";
import { useState, useEffect } from "react";

const Reloj = () => {
  const [time, setTime] = useState(0);
  const [star, setStar] = useState(0);

  const timer = useRef();

  const format = (time) => {
    if (!time) return "00:00:00";

    let hours = Math.floor((time / 60 / 60) % 24);
    let minute = Math.floor((time / 60) % 60);
    let seconds = Math.floor(time % 60);

    hours = hours < 10 ? "0" + hours : hours;
    minute = minute < 10 ? "0" + minute : minute;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minute + ":" + seconds;
  };

  useEffect(() => {
    if (star) {
      timer.current = setInterval(() => {
        setTime((pre) => pre + 1);
      }, 1000);
    }
  }, [star]);

  return (
    <div className="filtros sombra contenedor ">
      <div className="campo">
        <label>Replicas detenidas</label>
        <label>{format(time)}</label>
        <button className="tiempo" type="button" onClick={() => setTime(0)}>
          Reset
        </button>
        <button
          className="tiempo"
          type="button"
          onClick={() => {
            if (star) clearInterval(timer.current);
            setStar(!star);
          }}
        >
          {star ? "Stop" : " Go"}
        </button>
      </div>
    </div>
  );
};
export default Reloj;
