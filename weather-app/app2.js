const geoCode = require('./utils/geoCode')


geoCode('Boston', (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ', data)
})
