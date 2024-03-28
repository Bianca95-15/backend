//LLAMAR A LAS VARIABLES DE ENTORNO DEL .ENV

const mysql = require('mysql')
const fs = require ('fs')

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_MYSQL_DATABASE

})

//CONFIGURAR UN EVENTO (SI OCURRE UNA CONEXION C/ LA DB VAMOS A CAPTURAR UN ERROR CON LA CALLBACK Y MOSTRARLA X CONSOLA DE TIPO ERROR)

let counter =Number (fs.readFileSync('./static/dbErrorCounter.txt' , 'utf-8'))

db.connect((error) => {
    if(error){
        fs.promises.writeFile('./logs/errors/db/error-' + counter++ +'.txt' , JSON.stringify(error), 'utf-8') 
        fs.promises.writeFile('./static/dbErrorCounter.txt', String(counter),'utf-8')
        console.error('Error al conectar a Mysql')
    }
    else{
        console.log('conectado con exito a la base de datos')
    }
})







module.exports = db