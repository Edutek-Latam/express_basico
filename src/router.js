const express = require('express');
const router = express.Router()

const userRoute = require('./usuarios/usuarios.router')

router.use('/api',userRoute);

module.exports = router