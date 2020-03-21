const fs = require('fs')

//read file
//it will return in buffer(binary)
const dataBuffer = fs.readFileSync('1-json.json')
//console.log(dataBuffer)

//buffer to string(JSON)
const dataJSON = dataBuffer.toString()
//string(JSON) to object
const data = JSON.parse(dataJSON)
console.log(data.title)