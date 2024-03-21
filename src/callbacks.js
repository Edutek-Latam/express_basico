function suma(val1,val2, callback){
    const suma = val1 + val2;
    callback(undefined,suma);
    return;
}

function div(val1,val2, callback){
    if(val2===0){
        callback('No se puede divir entre cero');
        return;
    }
    const divi = val1 / val2;
    
    callback(undefined,suma);
    return;
}

const datos = (error,value)=>{
    if(error){
        console.error(error)
        return;
    }
    console.log(value);
}

 

const fs = require('fs');
const filePath = './ejemplo.txt'

const callback = (error,data)=>{
    if(error){
        console.log('error')
        return;
    }

    console.log(data);
}
fs.readFile(filePath,'utf-8',callback)