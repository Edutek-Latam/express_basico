const data =require('../data.json');
const { use } = require('./usuarios.router');

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

}

function update(id,usuario){

}

function delete_record(id){

}

module.exports = {
    findAll,
    findById,
    create,
    update,
    delete_record
}