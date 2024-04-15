'use strict';
const $nombre = document.getElementById('nombre');
const $apellido = document.getElementById('apellido');
const $telefono = document.getElementById('telefono');
const $email = document.getElementById('email');
const $comentario = document.getElementById('comentario');
const $botonEnviar = document.getElementById('botonEnviar');

let nombre = null;
let apellido = null;
let telefono = null;
let email = null;
let comentario = null;


$nombre.addEventListener('input', (evento) => {
  nombre = evento.target.value;
});
$apellido.addEventListener('input', (evento) => {
    apellido = evento.target.value;
  });

  $telefono.addEventListener('input', (evento) => {
    telefono = evento.target.value;
  });

  $email.addEventListener('input', (evento) => {
    email = evento.target.value;
  });
  

  $comentario.addEventListener('input', (evento) => {
    comentario = evento.target.value;
  });
  

$botonEnviar.addEventListener('click', (evento) => {
    evento.preventDefault();
    if(nombre && apellido && telefono && email && comentario){
        alert("Sus datos han sido obtenidos correctamente");
    }else{
        alert("Rellene todos la campos del formulario, por favor");
    }
    console.log(nombre);
    console.log(apellido);
    console.log(telefono);
    console.log(email);
    console.log(comentario);
});