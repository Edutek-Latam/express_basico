const data =require('../data.json');
const { v4: uuidv4 } = require('uuid');
const db = require('../config/db');


async function findAll(){
    const users = await db.User.findAll( {attributes: { exclude: ['isActive'] }});
    return users;
}

/**
 * 
 * @param {*} id 
 * @returns 
 */
async function findById(idUser){
    //const user = await db.User.findByPk(id);   //data.find(elment => elment.id === id)
    const user = await db.User.findOne({where:{ id:idUser, lastName:'Funtes' }});   //data.find(elment => elment.id === id)
    
    if(!user){
        return false
    }
    return user
}

async function create(usuario){
   const user = new db.User(usuario)
   const newUser =  await user.save()
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