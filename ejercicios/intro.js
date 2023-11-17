// PARA INTRODUCIR ENTRADAS EN TERMINAL

const alumnos = {
  Daniel: [2, 3, 4, 4],
  Juan: [1, 2, 3, 34],
  Yair: [2, 1, 3, 3],
};

let alumno = process.argv[2];

if (!alumnos.hasOwnProperty(alumno)) {
  console.log("Alumno no encontrado");
} else {
  let acum = 0;
  alumnos[alumno].forEach(element => {
    acum += element;
    //acum = acum + c
  });
  console.log(`la suma es ${acum} y el promedio es ${acum/alumnos[alumno].length}`);
}
