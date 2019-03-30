//Require de express
const express = require('express')
const app = express()

let crearArchivo = (curso, nombreestudiante, cedula) => {
  //Función flecha (=>) que crea el texto que se mostrara en el navegador.
  let {
    nombre,
    id,
    duracion,
    costo
  } = curso;
  texto = '           Comprobante de inscripción:' + '\n' + '\n' +
    '           Información del Curso:' + '\n' + '\n' +
    'Nombre: ' + nombre + ':\n' +
    'Duración: ' + duracion + '\n' +
    'Costo: ' + costo + '\n' +
    '\n' +
    '           Información del Estudiante:' + '\n' + '\n' +
    'Nombre: ' + nombreestudiante + '.\n' +
    'Cédula: ' + cedula + '.\n' +
    'N° de Pago: ~No aplicable~.';
    app.get('/', function (req, res) {
      res.send(texto);
    })
    setTimeout(() => console.log("Se ha creado su comprobante de inscripción exitosamente.\nGracias por preferirnos c; .".green), 1500);
    app.listen(3000)
}

let inscribir = (curso, nombre, cedula) => {
  crearArchivo(curso, nombre, cedula);
}

module.exports = {
  inscribir
}