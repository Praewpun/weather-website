const fs = require('fs')
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

//convert object book to string in JSON format
const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json',bookJSON)

//convert JSON to object
const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author)