import React from "react";
import freeCodeCampLogo from '../imagenes/logo-freecodecamp.jpg';

export const LogoFreeCodeCamp = () => {
  return (
    <div className='contenedor-logo'>
      <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='logo de FreeCodeCamp' />
    </div>
  );
}