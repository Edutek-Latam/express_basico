function operacionesAsincronas1(){
    setTimeout(() => {
        console.log('Uno')
    }, 10);
}

function operacionesAsincronas2(){
    setTimeout(() => {
            console.log('Dos')
    }, 1000);
}

function operacionesAsincronas3(){
    setTimeout(()=>{
        console.log('Tres')
    },0)
}

operacionesAsincronas1();
operacionesAsincronas2();
operacionesAsincronas3();