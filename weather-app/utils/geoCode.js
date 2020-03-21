const request = require('request')

const geoCode = (address, callback) =>{
    const url= 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoicHJhYWV3cHVuIiwiYSI6ImNrN3JqOTA3djA1bHczbGt4bm92cTAxODYifQ.E6oCz0DGz1KyHOHVhYapQw&limit=1'
    request({url: url, json: true},(error, response)=> {
        if(error){
            callback('Unable to connect to location services', undefined)
        }else if(response.body.message){
            callback('invalid auth token', undefined)
        }else if(!response.body.features[0]){
            //response.body.festures.length === 0
            callback('unmatch result', undefined)
        }else{
            callback(undefined, {
                latitude : response.body.features[0].center[1],
                longitude :response.body.features[0].center[0],
                location : response.body.features[0].place_name
            })
            //error = undefined , data = latitude, longitude
        }
    })
}

module.exports = geoCode