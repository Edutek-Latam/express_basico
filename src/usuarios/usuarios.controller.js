
const {request,response} = require('express')
const _userService = require('./usuarios.service')

const validation = require('./usuarios.validator')

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
    const body = req.body;
    //const isValid = validation.validateBody(body);
    //if(isValid ===true){
       const newUser =  _userService.create(body);
        res.status(200).send(newUser);
    //    return;
   // }

    //res.status(200).send({errors:isValid});


    
}

function update(req=request, res=response){
    const { id } = req.params;
    const body = req.body;

    const userUpdated =  _userService.update(id,body)
    res.status(200).send(userUpdated)
}

function remove(req=request, res=response){
    const { id } = req.params;
    const remove = _userService.delete_record(id);
    res.status(200).send(remove); 
}

module.exports = {
    findAll,
    findByID,
    create,
    update,
    remove
}