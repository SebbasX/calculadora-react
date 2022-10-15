import './App.css';
//import { Boton } from './componentes/Boton';
import { Pantalla } from './componentes/Pantalla';
//import { BotonClear } from './componentes/BotonClear';
import { LogoFreeCodeCamp } from './componentes/LogoFreeCodeCamp';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import { MyRow } from './componentes/MyRow';

const row_one = [
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: '+' },
]

const row_two = [
  { value: 4 },
  { value: 5 },
  { value: 6 },
  { value: '-' },
]

const row_three = [
  { value: 7 },
  { value: 8 },
  { value: 9 },
  { value: '*' },
]

const row_four = [
  { value: '=' },
  { value: 0 },
  { value: '.' },
  { value: '/' },
]

const row_five = [
  { value: 'Clear' }
]

const App = () => {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Por favor ingrese valores');
    }
  };

  const limpiar = () => {
    setInput('');
  };

  return (
    <div className='App'>
      <LogoFreeCodeCamp />
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <MyRow list_items={row_one} agregarInput={agregarInput} calcularResultado={calcularResultado} />
        <MyRow list_items={row_two} agregarInput={agregarInput} calcularResultado={calcularResultado} />
        <MyRow list_items={row_three} agregarInput={agregarInput} calcularResultado={calcularResultado} />
        <MyRow list_items={row_four} agregarInput={agregarInput} calcularResultado={calcularResultado} />
        <MyRow list_items={row_five} agregarInput={agregarInput}  limpiar={limpiar}/>
        {/* <div className='fila'>
          {row_one.map(elemento =>
            <Boton manejarClic={agregarInput}>{elemento.value}</Boton>
          )}
        </div>
        <div className='fila'>
          {row_two.map(elemento =>
            <Boton manejarClic={agregarInput}>{elemento.value}</Boton>
          )}
        </div>
        <div className='fila'>
          {row_three.map(elemento =>
            <Boton manejarClic={agregarInput}>{elemento.value}</Boton>
          )}
        </div> */}

        {/* <div className='fila'>

          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div> */}
        {/*<div className='fila'>
          <BotonClear manejarClic={() => setInput('')}>Clear</BotonClear>
      </div>*/}
      </div>
    </div>
  );
}

export default App;
