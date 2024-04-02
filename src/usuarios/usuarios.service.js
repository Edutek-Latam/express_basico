const data =require('../data.json');
const { v4: uuidv4 } = require('uuid');

function findAll(){
    return data;
}


function findById(id){
    const user = data.find(elment => elment.id === id)
    if(!user){
        return false
    }

    return user
}

function create(usuario){
    const id = uuidv4();
    const newUser = {id, ...usuario}
    data.push(newUser);
    return newUser;
}   

function update(id,usuario){
    const user = findById(id);
    if(!user){
        return {error: true, message:'Usuario no existe' }
    }

    for(let keys in usuario){
        console.log(keys);
        user[keys] = usuario[keys];
    }

    return usuario;
}

function delete_record(id){
    const indice = data.findIndex(e=> e.id === id);
    console.log(indice);
    data.splice(indice,1)
    return data
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete_record
}