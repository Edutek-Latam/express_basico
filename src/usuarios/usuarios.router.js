const express = require('express');
const router = express.Router();
const _userController = require('./usuarios.controller');

router.get('/user',_userController.findAll);
router.get('/user/:id',_userController.findByID);

module.exports = router
