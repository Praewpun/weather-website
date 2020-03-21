const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
//const command = process.argv[2]
 
//customize yargs version 
yargs.version('1.1.0')

//console.log(process.argv)
//console.log(yargs.argv)

//add,remove,read,list

//create add command (input(builder): title, body)
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true, //force to have note's title
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption : true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})
//remove (input:title)
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title: {
            describe: 'remove a note',
            damandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        //console.log('Remove a note')
        notes.removeNote(argv.title)
        //notes.removeNotes(argv.title)
    }
})

//list (print a;; title)
yargs.command({
    command: 'list',
    describe: 'list a note',
    handler(){
        notes.listNotes()
    }
})

//read (input: title output:body)
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

//console.log(yargs.argv) 
yargs.parse()