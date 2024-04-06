//require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const rfs = require('rotating-file-stream')
const fs = require('fs');
//const data = require('./data.json')
const db = require('./config/db');
const { envs } = require('./config/env')
const router = require('./router');
const app = express()
const port = envs.PORT || 3000;



/**
 * Configuracion para el body
 */
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(router)


// create a rotating write stream
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

  app.use(morgan('combined', { stream: accessLogStream }))

app.listen(port,()=>{
    console.log(`Servidor iniciado en http://localhost:${port}`)
})