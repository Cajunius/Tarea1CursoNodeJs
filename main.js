//Require de express
const express = require('express')
const app = express()

//Require de los modulos creados por el usuario. Desustructuración de los datos.
const {
  cursos,
  recursivoarray,
  mostrar,
  buscar
} = require('./cursos');
const {
  inscribir
} = require('./inscribir');

const datos = {
  id: {
    demand: true,
    alias: 'i'
  },
  nombre: {
    demand: true,
    alias: 'n'
  },
  cedula: {
    demand: true,
    alias: 'c'
  }
}

//Require externo del modulo 'yargs'
const argv = require('yargs')
  .command('inscribir', 'Inscribirse en el curso indicado\nSi desea incribir algún curso porfavor ingrese el comando "inscribir" -i=<id del curso a inscribir> -n=<su nombre> -c=<su cédula>'.rainbow, datos)
  .argv

//Imprimir
let Imprimir = (texto) => {
  app.get('/', function (req, res) {
    res.send(texto);
  })
   
  app.listen(3000);
}

//main
texto=("Si desea incribir algún curso porfavor ingrese el comando 'inscribir' -i= 'id del curso a inscribir' -n='su nombre' -c='su cédula'\n");
console.log(texto.rainbow);
//Imprimir(texto);
if (argv._[0] == 'inscribir') {

  //función para crear archivo
  //let existe = false;
  let existe = buscar(argv.id);

  if (existe) {
    setTimeout(() => {
      console.log("La información del curso que inscribirá es:\n".rainbow)
      setTimeout(() => {
        console.log("Nombre: ".bgGreen.white + existe.nombre.bgGreen.white + '\n' +
          "Id: ".bgGreen.white + existe.id.bgGreen.white  + '\n' +
          "Duración: ".bgGreen.white  + existe.duracion.bgGreen.white + '\n' +
          "Costo: ".bgGreen.white  + existe.costo.bgGreen.white  + '\n');
        //console.log(existe);
        //console.log('Crear archivo');
        inscribir(existe, argv.nombre, argv.cedula);
      }, 800);
    }, 500);
  } else {
    texto = ("El curso con id: '" + argv.id + "' NO existe. Porfavor vea nuestros cursos disponibles y si gusta inscriba alguno(s):\n");
    console.log("El curso con id: '".red + argv.id + "' NO existe. Porfavor vea nuestros cursos disponibles y si gusta inscriba alguno(s):\n".red);
    Imprimir(texto);
    mostrar();
  }

} else {
  if (!argv._[0])
  //función para imprimir
  {
    //console.log('imprimir cursos');
    console.log("Cursos disponibles:\n".rainbow);
    mostrar();
  } else {
    if (!argv.id)
    //Comando erroneo
    {
      texto = ('ERROR: El comando: "'+ argv._[0] + '" NO existe\n' + 'Porfavor ingrese comandos validos:\n'+ '-inscribir');
      console.log('ERROR: El comando: "'.red + argv._[0].red + '" NO existe\n'.red + 'Porfavor ingrese comandos validos:\n'.blue + '-inscribir'.cyan);
      Imprimir(texto);
    }
  }

  //console.log('Lo esperamos devuelta pronto...');
}