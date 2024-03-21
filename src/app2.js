require('dotenv').config()
const express = require('express')
const data = require('./data.json')
const app = express()
const port = process.env.PORT || 3000;

/**
 * Configuracion para el body
 */
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).send(data)
})

app.get('/user/:id',(req,res)=>{
    const { id } = req.params;
    //const id = params.id
    res.status(200).send(id)
})

app.post('/',(req,res)=>{
    const body = req.body
    data.push(body)
    res.status(200).json(body);
})

app.put('/user/:id',(req,res)=>{
    const {id} = req.params
    const body = req.body
    const user = data.find(item=> item.id === id);
    if(!user){
        res.status(404).send('No existe');
        return
    }

    for(let keys in body){
        console.log(keys);
        user[keys] = body[keys];
    }
    res.status(200).send(user);
})

app.delete('/',(req,res)=>{
    res.status(400).json({message:'Metodo Put'})
})

app.listen(port,()=>{
    console.log(`Servidor iniciado en http://localhost:${port}`)
})