const validator = require('validator')

const getNotes = require('./notes.js')

console.log(getNotes())
console.log(validator.isEmail('merrypraeww@gmail.com'))
console.log(validator.isURL('https://mead.io'))
console.log(validator.isURL('https//mead.io'))
//class validator function isEmail()