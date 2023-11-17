//  CREAR DENTRO DE ARCHIVOS
const { error } = require("console");
const fs = require("fs");
const { json } = require("stream/consumers");

// ./ ruta actual
// call back una vez que termine de ejecutarse esa funcion

//1. ruta 2. text insertado 3. call back
// fs.writeFile("./prueba1.txt", "HOLA MUNDO", (err) => {
//   if (err) throw err;
//   console.log("Creado correctamente");
// });

// fs.readFile("./prueba.txt", "utf-8", (error, data) => {
//   if (error) throw error;
//   console.log(data);
// });

//agregar texto
// fs.appendFile("./test.txt","hola todos",(error)=>{
//     if(error)throw error;
//     console.log("archivo modificado")
// })
// //borrar un archivo
// fs.unlink("./test.text",error=>{
//     console.log("archivo borrado")
// })

//CARPETAS
// fs.mkdir("./newFolder",err=>{
//     if (err) throw err;
//     console.log("Carpeta correctamente");
// })

//BORRAR
// fs.rmdir("./newFolder",{recursive: false},(error)=>{
//     if(error) throw err
//     console.log("carpeta eliminada")
// })

// fs.readdir("./newFolder",{withFileTypes:false},(error,files)=>{
//     if(error)throw error
//     files.forEach(f=>{
//         console.log(f)
//     })
// })

//EJERCICIO
const ruta = "./practicaFileSystem.json"
// ./newFolder
fs.readFile(ruta, "utf-8", (error, data) => {
  if (error) throw error;
  console.log(data)
  const obj = json.parse(data)
  console.log(obj)
  let valor = JSON.stringify("read:true"
  fs.appendFile(ruta,,(error)=>{
    if(error)throw error;
    console.log("archivo modificado")
})

})






