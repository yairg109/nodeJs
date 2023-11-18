/* 
1. Obtener el dato por consola que en este caso sera "init"
2. Una vez que el comando es init necesitamos crear un nuevo directorio
    con el nombre del proyecto (el nombre del proyecto se lo vamos a pasar
        por consola)
3. Dentro de esa carpeta se creara un archivo html
4. Crearemos una carpeta js 
5. Creacmos un css
6. Dentro de esa carpeta creamos un archvio css 
*/

const { err } = require("console");
const fs = require("fs");

let nombreProyecto = process.argv[2];
let comando = process.argv[3];
let comandoCss = process.argv[4];
let comandoJs = process.argv[5];
let ruta = "./" + nombreProyecto;
console.log("El nombre del proyecto es", nombreProyecto);

function crearProyecto() {
  if (comando == "init") {
    fs.mkdir(ruta, (err) => {
      if (err) throw err;
      console.log("Carpeta del proyecto correctamente");
      fs.writeFile(ruta + "/index.html", "HOLA MUNDO", (err) => {
        if (err) throw err;
        console.log("Creado correctamente");
      });
      fs.mkdir("./" + ruta + "/JS", (err) => {
        if (err) throw err;
        console.log("Carpeta  js correctamente");
        if (comandoJs == "js") {
          fs.writeFile(ruta + "/JS" + "/main.js", "HOLA MUNDO", (err) => {
            if (err) throw err;
            console.log(" JS Creado correctamente");
          });
        }
      });
      fs.mkdir("./" + ruta + "/CSS", (err) => {
        if (err) throw err;
        console.log("Carpeta  css correctamente");
        if (comandoCss == "css") {
          fs.writeFile(ruta + "/CSS" + "/stlye.css", "HOLA MUNDO", (err) => {
            if (err) throw err;
            console.log(" CSS Creado correctamente");
          });
        }
      });
    });
  } else {
    console.log("Favor de escribir comando");
  }
}

crearProyecto();
