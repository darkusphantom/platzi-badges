//----------------- Aprendiendo sobre ReactDOM.render()
// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badge';

// const container = document.getElementById('app');

// container.appendChild(element);

 
//----------------	---------------	------------------	---------------
// import React from 'react' //Obligatorio para agregar el JSX.

// import ReactDOM from 'react-dom'

// //const element = <h1> Hello, Platzi Badge </h1>; //JSX permite que el h1 funcione en javascript
// //React.createElement(tipo, atributos, innerText)
// const element = React.createElement('h1', {}, 'Hola, soy los children') //Aca estoy indicando el tipo de elemento a crear es h1, sin clase y el texto que va adentro
// const container = document.getElementById('app')

// // ReactDOM.render(__qué_realiza__, __dondé_lo_realizará)
// ReactDOM.render(element, container)


//------------------Aprendiendo sobre JSX, su diferencia entre .createElement y JSX
// import React from 'react' //Obligatorio para agregar el JSX.

// import ReactDOM from 'react-dom'

// const jsx = <h1> Hello, Platzi Badge</h1> //
// const element = React.createElement(
// 	'a', 
// 	{href: '#'}, 
// 	'Soy un enlace') //Indicando el tipo de elemento a crear es a, atributo href="#" y el texto


//-------------		-----------------------		-------------------------		--------------------
//import React from 'react' //Obligatorio para agregar el JSX.
// import ReactDOM from 'react-dom'
// 
// const name = "richard"
// // function sum(a,b) {
// // 	return a+b
// // }

// const sum = () => true

// // const element = React.createElement('h1',{},`Hola, soy ${name}`);
// // const jsx = <h1> Hola, soy {name}</h1> // Lo que esta dentro del {}, van expresiones. Sean variables, operaciones y funciones, con excepcion de los bool, undefined, null
// // const jsx = <h1> Hola, soy {0 + 3}</h1>
// const jsx = <h1> Hola, soy {sum()}</h1>

// const container = document.getElementById('app')

// // ReactDOM.render(element, container)
// ReactDOM.render(jsx, container)


//-------------		-------------		----------------		-----------------		------------------------
import React from 'react' //Obligatorio para agregar el JSX.

import ReactDOM from 'react-dom'

const jsx = (
	<div>
		<h1>Hello, i'm ricard</h1>
		<p>Soy un programador, diseñador web y financiero</p>
	</div>
)

const element = React.createElement(
	'div',
	{},
	React.createElement('h1', {id: 'title'}, 'Soy Raymundo'),
	React.createElement('p', {class: 'parrafo'}, 'El mas veloz del mundo')
);

const container = document.getElementById('app')
ReactDOM.render(element, container)