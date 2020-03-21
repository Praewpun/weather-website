//help make HTTP request easier
const request = require('request')
//easier than writing your own request npm

const forecast = (latitude, longitude, callback) =>{
    const url = 'https://api.darksky.net/forecast/e63bfbba26348fcb76e990c640cec448/' + latitude +',' + longitude
    //request({url ,json:true},(error, {body}) => {})
    request({url: url, json: true},(error, response)=> {
        if(error){
            callback('Error', undefined)
        }else if(response.body.code === 400){
            callback('Coordinate error', undefined)
        }else{
            callback(undefined, {
                forecast: response.body.daily.summary,
                weather: response.body.currently.temperature
            })
        }
    })
}
 
module.exports = forecast