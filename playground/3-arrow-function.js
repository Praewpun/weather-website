// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    //create incomplete task
    getTasksToDo(){
        //this.tasks.forEach((tasks) => {
        //    if (this.completed = false) 
        //        console.log(this.text)
        //})
        const TasksToDo = this.tasks.filter((tasks) => tasks.completed === false)
        //const duplicateNotes = notes.filter(function(note)
        //    return note.title === title
        //})
        return TasksToDo
    }
}

console.log(tasks.getTasksToDo())