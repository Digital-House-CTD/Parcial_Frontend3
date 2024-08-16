import React, { useState } from "react";
import Card from "./Card";
import InputText from "./InputText";
import Styles from "../styles/Form.module.css";

const Form = () => {

  const [fan, setFan] = useState({
    name: "",
    team: "",
  });
  console.log(fan);
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeName = (event) => {
  setFan({ ...fan, name: event.target.value });
  };
  const handleChangeTeam = (event) => {
    setFan({ ...fan, team: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (
      fan.team.trim().length > 2 &&
      !fan.team.startsWith(" ") &&
      fan.name.trim().length > 5 
    ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const reset = () => {
    setFan({
      team: "",
      name: "",
    });
    setShow(false);
    setError(false);
  };

  return (
    <>
      
        <>
          <form onSubmit={handleSubmit}>
          <h2>Elige tu Equipo Favorito</h2>
            <label>Equipo favorito:</label>        
            <InputText value={fan.team} change={handleChangeTeam}/>
            
            <label>Nombre y Apellido: </label>
            <InputText value={fan.name} change={handleChangeName}/>

            <button className={Styles.send}>Enviar</button>
          </form>

          <button onClick={reset} className={Styles.clean}>Limpiar</button>
        </>
      
      {show ? (
        <Card fan={fan} />
      ) : null}

      {error ? (
        <h4 className={Styles.error}>
          Por favor chequea que la información sea correcta.
        </h4>
      ) : null}
    </>
  );
};

export default Form;
