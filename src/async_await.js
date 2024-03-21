async function getCountries(){
    const options = {
        method:'GET',
        redirect:'follow'
    }

    const data = await fetch("https://restcountries.com/v3.1/name/guatemala?fields=name",options);
    console.log(data.ok)
    console.log(data.status)
    console.log(await data.json());
}
//getCountries()

const fs = require('fs')
const filePath = './ejemplo.txt'

async function readFileAsync(){
    try {
        const data = await fs.readFileSync(filePath,'utf-8');
        console.log(data);
    } catch (error) {
        console.error(error)
    }
}

readFileAsync();
