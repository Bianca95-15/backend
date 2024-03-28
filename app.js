const express = require ('express')
const mysql = require ('mysql')
const dotenv = require('dotenv')
const nodemailer = require('nodemailer')

dotenv.config()

const db = require('./config/dbConfig')
const serviceProduct = require('./services/products/serviceProduct')
const mailerService = require('./services/mailerService/mailerService')

const app = express()
const PORT = process.env.PORT || 3010






app.listen(PORT , () => {
    console.log('El servidor se esta escuchando en http://localhost:' + PORT + '/')
})
