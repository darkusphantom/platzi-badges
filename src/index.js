// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badge';

// const container = document.getElementById('app');

// container.appendChild(element);
// ReactDOM.render(__qué_realiza__, __dondé_lo_realizará)
 
import React from 'react'; //Obligatorio para agregar el JSX.

import ReactDOM from 'react-dom';

const element = <h1> Hello, Platzi Badge </h1>; //JSX permite que el h1 funcione en javascript

const container = document.getElementById('app');

ReactDOM.render(element, container);

