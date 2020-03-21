//to create server
//to request server

const https = require('https')

const url = 'https://api.darksky.net/forecast/e63bfbba26348fcb76e990c640cec448/40,-75'

const request = https.request(url, (response)=>{
    let data = ''
    //read whatever chunks come in and come out

    //take data in 
    response.on('data', (chunk) =>{
        //chunk = data from url in buffer --> has to change to json
        data = data + chunk.toString()
    })
    //run when done
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(data)
    })
})

//listener
request.on('error', (error) =>{
    console.log('An error', error)
})

request.end()