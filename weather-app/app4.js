const forecast= require('./utils/forecast')
const geoCode = require('./utils/geoCode')

const address = process.argv[2]
if(!address){
    console.log('Please provide an address')
}else{
    //destructive
    //geocode(address,(error, {latitude, longitude, location}) => {})
    geoCode(address, (error,data) => {
        if(error){
            return console.log(error)
        }
        //forecast(latitude, longitude)
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if(error){
                return console.log(eror)
            }
            //location
            console.log(data.location)
            console.log(forecastData)
        })
    })
}

