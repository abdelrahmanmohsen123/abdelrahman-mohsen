
const AddForm =document.querySelector('#AddForm')
const addTask =document.querySelector('#addTask')
const showHide =document.querySelector('#showform')

showHide.addEventListener('click',function(e){
    this.textContent=='show form app'? this.textContent='HIde form' : this.textContent='show form app';
    addTask.classList.toggle('d-none')
})

//function to check if todos have data or not

//     if(getAllTodos()==[])
//     {
//         tr = createMyElement(tbody, 'tr' )
//    noShowData = createMyElement(tr, 'td', "no show data")
      
// }


// const taskHeads = ["id", "title", "content", "taskType", "dueDate", "status", "important"]


//function to create any element in table 
const createMyElement = (parent, element, text = false) =>{
    myElement = document.createElement(element)
    parent.appendChild(myElement)
    if(text) myElement.textContent= text
    return myElement
}
let tbody = document.querySelector('#todoAllData')  
drawTodo= (i, newTodo) =>{
     
    let tr = createMyElement(tbody, 'tr')
    createMyElement(tr, 'td', i)
    createMyElement(tr, 'td', newTodo.id)
    createMyElement(tr, 'td', newTodo.title)
    createMyElement(tr, 'td', newTodo.content)
    createMyElement(tr, 'td', newTodo.dueDate)
    createMyElement(tr, 'td', newTodo.important)
    createMyElement(tr, 'td', newTodo.status)
    createMyElement(tr, 'td', newTodo.taskType)
    td = createMyElement(tr, 'td' )
    delbtn = createMyElement(td, 'button', "delete")
    delbtn.addEventListener('click', function(e){
        deleteTodo(newTodo.id)
        // showAllCustomers()
        // let tableRows = document.querySelectorAll('#customerData tr')
        // console.log(tableRows[i-1], i-1)
        // tableRows[i-1].remove()
        tr.remove()
        
    })
    td = createMyElement(tr, 'td' )
    editbtn = createMyElement(td, 'button', "edit")
    editbtn.addEventListener('click', function(e){
        editTodo(newTodo.id)
        deleteTodo(newTodo.id)
        // showAllCustomers()
        // let tableRows = document.querySelectorAll('#customerData tr')
        // console.log(tableRows[i-1], i-1)
        // tableRows[i-1].remove()
        tr.remove()
        showHide.textContent=='show form app'? showHide.textContent='HIde form' : showHide.textContent='show form app';
    addTask.classList.toggle('d-none')
        
    })

}


// function get all todos
const getAllTodos =()=>{
    let todos = JSON.parse(localStorage.getItem('todos')) || []
    return todos
}

// function store  todo in local storage
const saveTodos =(todos)=>{
    localStorage.setItem('todos',JSON.stringify(todos))
}


//function add  new todo
const addNewTodo =(title,content,dueDate,status,taskType,important)=>{
    let newTodo ={
        id:new Date().getTime(),
        title:title,
        content:content,
        dueDate:dueDate,
        status:status,
        taskType:taskType,
        important:important
    }
    
    todos = getAllTodos()
    todos.push(newTodo)
    saveTodos(todos)
}


//show all todos
const showAllTodos =()=>{
    todos =getAllTodos()
    todos.forEach((c,i)=>{
        console.log(`id : ${c.id} and title : ${c.content} and duedate id:${c.dueDate} and status is ${c.status} and important is :${c.important}`)
        drawTodo(i+1, c)
    })

}





//get specific todo by id
const getSingleTodoIndex =(id)=>{
    todos = getAllTodos()
    findedTodos =todos.findIndex(c =>c.id==id)
    return findedTodos
}

//update specific todo
const editTodo = (id,title, content, dueDate,status,important,taskType) =>{
    findedTodo = getSingleTodoIndex(id)
    
    if(findedTodo == -1 ) return console.log('todo not found')
    todos = getAllTodos()
    todos[findedTodo].title = title
    todos[findedTodo].content = content
    todos[findedTodo].dueDate = dueDate
    todos[findedTodo].status = status
    todos[findedTodo].important = important
    todos[findedTodo].taskType = taskType
    saveTodos(todos)
    
}

//delete specific todo
const deleteTodo = (id) =>{
    findedTodo = getSingleTodoIndex(id)
    if(findedTodo === -1 ) return console.log('todo not found')
    todos = getAllTodos()
    todos.splice(findedTodo,1)
    saveTodos(todos)
}

//  showAllTodos()
AddForm.addEventListener('submit', function(e){
    e.preventDefault()
    
    addNewTodo(this.elements.title.value, this.elements.content.value , this.elements.dueDate.value, this.elements.status.checked, this.elements.important.value, this.elements.taskType.value)
    this.reset()
    showHide.textContent=='show form app'? showHide.textContent='HIde form' : showHide.textContent='show form app';
    addTask.classList.toggle('d-none')
    
    //  console.log(this.elements)
})

  showAllTodos()



//   const updateTodo = (newTodo) =>{
//     findedTodo = getSingleTodoIndex(newTodo.id)
    
//     if(findedTodo == -1 ) return console.log('todo not found')
//     todos = getAllTodos()
//      title=todos[findedTodo].title
//     content=todos[findedTodo].content 
//     dueDate=todos[findedTodo].dueDate 
//      status=todos[findedTodo].status
//      important=todos[findedTodo].important
//     taskType=todos[findedTodo].taskType 
    
//     // saveTodos(todos)
    
// }