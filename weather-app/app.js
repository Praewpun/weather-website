const request = require('request')

//visit the URL of our secret key in darksky.net
//const url1 = 'https://api.darksky.net/forecast/e63bfbba26348fcb76e990c640cec448/37.8267,-122.4233?lang=es'

const url = 'https://api.darksky.net/forecast/e63bfbba26348fcb76e990c640cec448/37.8267,-122.4233'
//default language (english)

//argument 1. is url and with url we want (we name the name) 
//2. function to run when get respond back : error(no network) or if get response
request({url: url, json: true},(error, response)=> {
    //set json: true --> meaning we would like the request to parse it as json
    
    //console.log(response)
    //print all the response that can be used --> return in JSON(string)
    
    //from JSON to object
    //const data = JSON.parse(response.body)   
    if(response){
        const current  = response.body.currently
        console.log(response.body.daily.data[0].summary +' It is currently ' + current.temperature + ' degress out. There is a '+ current.precipProbability+ '% chance of rain.')
    }else{
        console.log('No netwok connection')
    }
})

//Geocoding = convert from place name to latitude/longitude
//Address --> Lat/Long --> weather

const geoCodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoicHJhYWV3cHVuIiwiYSI6ImNrN3JqOTA3djA1bHczbGt4bm92cTAxODYifQ.E6oCz0DGz1KyHOHVhYapQw&limit=1'
//print the latitude and longitude of the location

request({url: geoCodeURL, json: true},(error, response)=> {
    //console.log(response)
    if(error){
        console.log('No network connection')
    }else if(response.body.message){
        console.log('invalid auth token')
    }else if(!response.body.features[0]){
        //response.body.festures.length === 0
        console.log('unmatch result')
    }else{
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude,longitude)
    }
})

//if it turn 'cannot read property body of undefined' means response is undefined