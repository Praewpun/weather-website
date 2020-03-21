//const yargs = require('yargs')

//yargs.command({
//    command: 'number',
//    builder: {
//        title : {
//            demandOption: true,
//            type: Int8Array
//        }
//    },
//    handler: function(argv){
//        console.log('The square is '+square(argv))
//    }
//})
    //take a number and return a square of the inout
//const square = function(argv){
//    return argv*argv
//}
//yargs.parse()

//arrow function is lambda function in python
//arrow means 'return' => x*x
const square = (x) => x*x
console.log(square(3))

//event = an object
const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jan' , 'Mike'],
    printGuestList() {
        console.log('Guest list for '+ this.name)
        //this called out for tits own object 'birthday party
        this.guestList.forEach((guest) =>{
            console.log(guest+ ' is attending ' + this.name)
        })
    }
} 

//call event function and method printGuestList()
event.printGuestList()