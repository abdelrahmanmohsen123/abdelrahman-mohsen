
// const va = require('validator');
// const chalk = require('chalk');
// const x= va.isMobilePhone('01026546598' , ['ar-EG'])



// console.log(chalk.red(x));

// let x="ali"
// const yargs =require('yargs')
// yargs.command({
//     command:x,
//     handler:function(){
//         console.log('he is my fav player')
//         console.log(x)
//     }
// })
// console.log(yargs.argv)

const myFunctions =require('./myMehods')
const yargs =require('yargs')
const { argv } = require('yargs')

yargs.command({
    command:"addTask",
    describe:"add new task to tasks file",
    builder:{
        id:{ type:"integer"},
        title:{ type:"string", demandOption:false, describe:"todo title"},
        content:{ type:"string", demandOption:false, describe:"todo content"},
        important:{type:"string", describe:"todo important"},
        taskType:{type:"string"},
        status:{type:"string"},
        duedate:{type:"string"},
    },
    handler:function(argv){
        todo={id:new Date().getTime(),
            title: argv.title,
             content:argv.content,
             important: argv.important,
             taskType:argv.taskType,
             status: argv.status,
             duedate:argv.duedate,
            
            }
        myFunctions.addNewtodo(todo)    
    }
})


yargs.command({
    command:"showAll",
    describe: "show all Tasks from tasks file",
    handler: function(){
        myFunctions.showAlltodos()
    }
})
yargs.command({
    command:"showsingletodo",
    describe: "show all Tasks from tasks file",
    builder:{
        id:{type:"integer"}
    },
    handler: function(argv){
        
        myFunctions.showSingleTodo(argv.id)
    }
})

yargs.command({
    command:"delete todo",
    describe: "show all Tasks from tasks file",
    builder:{
        id:{type:"integer"}
    },
    handler: function(argv){
        
        myFunctions.deletetodo(argv.id)
    }
})
yargs.command({
    command:"editTodo",
    describe: "add New Task to tasks file",
    builder:{
        id:{ type:"integer", demandOption:true, describe:"task title", unique:true},
        newTitle:{ type:"string", describe:"task title"},
        newContent:{ type:"string", demandOption:false, describe:"task content"},
        duedate:{ type:"string", describe:"task title"},
        status:{ type:"string", demandOption:false, describe:"task content"},
        important:{ type:"string", describe:"task title"},
        taskType:{ type:"string", demandOption:false, describe:"task content"}
  
    },
    handler: function(argv){
        task = {title: argv.newTitle, content:argv.newContent,status: argv.status, important:argv.important,taskType: argv.taskType, duedate:argv.duedate}
        myFunctions.edittodo(argv.id,todo)
    }
})
yargs.parse()





