
const {request,response} = require('express')
const _userService = require('./usuarios.service')

function findAll(req=request, res=response){
    res.status(200).send(_userService.findAll());
    //res.status(200).send(data)
}

function findByID(req=request, res=response){
    const { id } = req.params
    const user = _userService.findById(id);
    if(!user){
        res.status(404).send({erro:true,messaje:'No existe'});
        return;
    }
    res.status(200).json(user)
}

function create(req=request, res=response){

}

module.exports = {
    findAll,
    findByID
}