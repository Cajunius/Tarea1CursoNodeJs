var colors = require('colors');

const cursos = [
  cpp1 = {
    nombre: 'C++ Nivel 1',
    id: '0001',
    duracion: '24 horas',
    costo: 'gratuito'
  },
  cpp2 = {
    nombre: 'C++ Nivel 2',
    id: '0002',
    duracion: '48 horas',
    costo: 'gratuito'
  },
  java1 = {
    nombre: 'Java Nivel 1',
    id: '1001',
    duracion: '20 horas',
    costo: 'gratuito'
  },
  java2 = {
    nombre: 'Java Nivel 2',
    id: '1002',
    duracion: '32 horas',
    costo: 'gratuito'
  },
  Ruby = {
    nombre: 'Ruby',
    id: '2001',
    duracion: '36 horas',
    costo: 'gratuito'
  },
  Go = {
    nombre: 'Go',
    id: '3001',
    duracion: '42 horas',
    costo: 'gratuito'
  },
  PHP = {
    nombre: 'PHP',
    id: '4001',
    duracion: '30 horas',
    costo: 'gratuito'
  },
  Python = {
    nombre: 'Python',
    id: '5001',
    duracion: '64 horas',
    costo: 'gratuito'
  }
]

let recursivoarray = (arreglo, tamaño) => {
  //console.log(tamaño);
  if (tamaño == arreglo.length) //Caso base
  {
    return;
  }
  /*
  else {
    if (tamaño == 0) { //El primero, que se imprima directamente
      //console.log("Recursivo para array[" + (tamaño+1) + "]: " + arreglo[tamaño][tamaño]);
      console.log("Nombre: " + arreglo[tamaño].nombre + '\n' +
    "Id: " + arreglo[tamaño].id + '\n' +
    "Duración: " + arreglo[tamaño].duracion + '\n' +
    "Costo: " + arreglo[tamaño].costo + '\n');
      recursivoarray(arreglo, tamaño + 1);
    } 
    */
  else { //Cualquier otro, que espere
    setTimeout(function () {
      //console.log("Recursivo para array[" + (tamaño+1) + "]: " + arreglo[tamaño][tamaño]);
      console.log("Nombre: ".bgMagenta.cyan + arreglo[tamaño].nombre.bgMagenta.cyan + '\n' +
        "Id: ".bgCyan.white + arreglo[tamaño].id.bgCyan.white + '\n' +
        "Duración: ".bgCyan.white + arreglo[tamaño].duracion.bgCyan.white + '\n' +
        "Costo: ".bgCyan.white + arreglo[tamaño].costo.bgCyan.white + '\n');
      recursivoarray(arreglo, tamaño + 1);
    }, 2000);
  }
  //}
}

//let mostrar = () => {cursos.forEach((curso) => console.log(curso));} 
let mostrar = () => {
  recursivoarray(cursos, 0);
}

let buscar = (id) => {
  return cursos.find(curso => curso.id == id)
}

module.exports = {
  cursos,
  recursivoarray,
  mostrar,
  buscar
};
//mostrar();