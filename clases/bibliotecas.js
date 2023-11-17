//  CREAR DENTRO DE ARCHIVOS
const fs = require("fs")
// ./ ruta actual
// call back una vez que termine de ejecutarse esa funcion

//1. ruta 2. text insertado 3. call back
fs.writeFile("./test.txt","HOLA MUNDO",(err)=>{
    if(!err) throw err
    console.log("Creado correctamente")
})

