// PARA INTRODUCIR ENTRADAS EN TERMINAL

const alumnos = {
  Daniel: [2, 3, 4, 4],
  Juan: [1, 2, 3, 34],
  Yair: [2, 1, 3, 3],
};

let alumno = process.argv[2]

let array = alumnos[alumno]

console.log(array)

