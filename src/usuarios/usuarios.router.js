const express = require('express');
const router = express.Router();
const _userController = require('./usuarios.controller');
const validator = require('./usuarios.validator');

router.get('/user',_userController.findAll);
router.get('/user/:id',_userController.findByID);
router.post('/user',validator.userMiddleware,  _userController.create);
router.put('/user/:id',validator.userUpdateValidate,   _userController.update);
router.delete('/user/:id',_userController.remove);

module.exports = router
