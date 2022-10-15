import React from 'react'
import '../App.css';
import { Boton } from '../componentes/Boton';
import { BotonClear } from '../componentes/BotonClear';

export const MyRow = ({ list_items = [], calcularResultado, agregarInput, limpiar }) => {
  return (
    <div className='fila'>
      {list_items.map((elemento, key) => {
        if (elemento.value === '=') {
          return <Boton manejarClic={calcularResultado} key={key}>{elemento.value}</Boton>
        } else if (elemento.value === 'Clear') {
          return <BotonClear manejarClic={limpiar} key={key}>Clear</BotonClear>
        }
        return <Boton manejarClic={agregarInput} key={key}>{elemento.value}</Boton>
      })}
    </div>
  )
}

