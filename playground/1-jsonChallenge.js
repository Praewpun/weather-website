const fs = require('fs')

//read data to buffer
const dataBuffer = fs.readFileSync('1-jsonChallenge.json')
//buffer to string
const dataJSON = dataBuffer.toString()
//string to object
const data = JSON.parse(dataJSON)

data.name = "Praew"
data.age = 20

//String object to JSON
const InfoJSON = JSON.stringify(data)
fs.writeFileSync('1-jsonChallenge.json',InfoJSON)
