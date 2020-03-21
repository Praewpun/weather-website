const fs = require('fs')
const chalk = require('chalk')

const getNote = () => {
    return "your notes...."
}

const addNote = function(title,body){
//add note into JSON file
    const notes = loadNotes()
    //check if there is any note with the same title
    //duplicateNotes array: store all duplicate note
    //if true(have duplicate)  --> keep title in duplicate array
    const duplicateNotes = notes.filter((notes) => notes.title === title)
        //if title of input note the same as title of existing note (note.title)
    const duplicateNote = notes.find((notes) => notes.title === title)
    //if(!duplicateNote === undefined){
    //    notes.push({
    //    title: title,
    //    body:body
    //    })
    //}
        //if duplaicateNotes = false (no duplicate)
    if(duplicateNotes.length === 0){
    //push then save notes
        notes.push({
        title: title,
        body:body
        })
    saveNotes(notes)
    console.log(chalk.red.inverse('New note has been added!') )
    }else{
        console.log('Note title has been taken!')
    }
}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes-json.json',dataJSON)
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes-json.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

const removeNotes = (title) => {
    //note existing note
    const notes = loadNotes()
    //all the note we want to keep
    const notesToKeep = notes.filter((notes) => {
        return notes.title != title
    })
    saveNotes(notesToKeep)
    console.log(notesToKeep)
}
//use filter efficiently

const removeNote = function(title){
    //note existing note
    const notes = loadNotes()
    //console.log("remove the note title: "+ title )
    
    //filter the matching note --> filter out mtaching note keep non match
    const matchTitle = notes.filter(function(notes){
        return notes.title == title
        //if title match --> add into array 'matchTitle'
        })
    //if no match between input and note title
    if(matchTitle.length === 0){
        console.log(chalk.red.inverse('No matching title, input new one'))
    }else{
        console.log(chalk.green.inverse('Remove note'))
        const indexOfTitle = notes.indexOf(title)
        notes.splice(indexOfTitle, 1)
    }
    //save note
    saveNotes(notes)
}

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach(function(notes){
        console.log(chalk.blueBright.inverse(notes.title))
    })
}

const readNote = (title) => {
    debugger
    const notes = loadNotes()
    const match = notes.find((notes)=> notes.title === title)
    if(!match){
        console.log(chalk.red.inverse('ERROR'))
    }else{
        console.log(chalk.blue.inverse(match.title))
        console.log(match.body)
    }
}
module.exports = {
    getNote: getNote,
    addNote: addNote,
    removeNote: removeNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
}