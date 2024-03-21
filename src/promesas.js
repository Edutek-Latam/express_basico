/* let total = 0;

function suma(){
    return new Promise((resolve,reject)=>{
        resolve(3+3);
    })
}


console.log(total);

function setTotal(valor){
    total = valor;
    console.log(total)
}

suma()
.then(result=>{
    setTotal(result);
})

console.log(total) */

 function div(val1,val2){
    return new Promise((resolve,reject)=>{
        if(val2===0){
            reject('No se puede divir entre cero')
            return;
        }

        const result = val1/val2;
        resolve(result);
    })
}

module.exports = {
    div
}

/* function promesa(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(true);
            return
        }, 1000);
        

    });
}



div(15,5)
    .then(result=>{
        console.log(result)
    })
    .catch(error=>{
        console.log('catch')
        console.log(error)
    })

 */
/* const fs = require('fs').promises
const filePath = './ejemplo.txt'

fs.readFile(filePath,'utf-8')
    .then(data=>{
        console.log(data)
    })
    .catch(error=>{
        console.error(error)
    })
 */

