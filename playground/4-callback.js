setTimeout(() => {
    console.log('Two seconds later') //this is a callback function
    //call back function = function as an argument in another function --> to call it later on
}, 2000)

const names = ['And', 'PP', 'Phil']
const shortNames = names.filter((names) => {
    return names.length <= 2
})

//const var = (parameter) =>
const geoCode = (address, callback) => {
    setTimeout(() =>{
        const data = {
            //property
            latitude : 0,
            longitude : 0
        }
        //return data --> return is in nested function so return nothing
        callback(data)
    },2000)
}//have to make this finish beforr the line below

//const data = geoCode('Philadelphia')
//console.log(data)

geoCode('Phuladelphia', (dataFromGeoCode)=>{
    console.log(dataFromGeoCode)
})

const add = (num1, num2, callback) => {
    setTimeout(()=>{
       const sum = num1+ num2
       callback(sum)  
    },2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

