import React from "react";
import '../hojas-de-estilo/BotonClear.css';

export const BotonClear = ({children, manejarClic}) => { //eso se llama desestructurar
  return (
    <div className="boton-clear" onClick={manejarClic}>
      {children}
    </div>
  );
}