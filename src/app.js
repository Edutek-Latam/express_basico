require('dotenv').config()
const express = require('express')
const data = require('./data.json')
const router = require('./router');
const app = express()
const port = process.env.PORT || 3000;

/**
 * Configuracion para el body
 */
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(router)


app.listen(port,()=>{
    console.log(`Servidor iniciado en http://localhost:${port}`)
})