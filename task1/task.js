
// function get all todos
const getAllTodos =()=>{
    let todos = JSON.parse(localStorage.getItem('todos')) || []
    return todos
}

// function store  todo in local storage
const saveTodos =(todos)=>{
    localStorage.setItem('todos',JSON.stringify(todos))
}
const createMyElement = (parent, element, text = false) =>{
    myElement = document.createElement(element)
    parent.appendChild(myElement)
    if(text) myElement.textContent= text
    return myElement
}
const AddForm =document.querySelector('#AddForm')
const addTask =document.querySelector('#addTask')
const showHide =document.querySelector('#showform')

showHide.addEventListener('click',function(e){
    this.textContent=='show form app'? this.textContent='HIde form' : this.textContent='show form app';
    addTask.classList.toggle('d-none')
})
t1=0
t2=1
drawTodo= (i, newTodo) =>{
    let tbody = document.querySelector('#todoAllData')  

    let tr = createMyElement(tbody, 'tr')
    tr.className ="myTr"
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
    delbtn.className="btn btn-danger"
    delbtn.addEventListener('click', function(e){
        deleteTodo(newTodo.id)
        tr.remove()
        
    })
    editbtn = createMyElement(td, 'button', 'edit')
    editbtn.className = "btn btn-success"
    editbtn.addEventListener('click', function(e){
        t1=newTodo.id
        t2=i
        showHide.textContent='HIde form'
        addTask.classList.remove('d-none')

        AddForm.elements.title.value=newTodo.title
        AddForm.elements.content.value=newTodo.content
        AddForm.elements.taskType.value=newTodo.taskType
        AddForm.elements.status.checked=newTodo.status
        AddForm.elements.important.value=newTodo.important

        AddForm.elements.dueDate.value=newTodo.dueDate

        document.querySelector('#addEditBtn').textContent="edit"    
    })
}
AddForm.addEventListener('submit', function(e){
    e.preventDefault()
    if(document.querySelector('#addEditBtn').textContent == 'add'){
        addNewTodo(this.elements.title.value, this.elements.content.value, this.elements.dueDate.value, this.elements.status.checked, this.elements.taskType.value, this.elements.important.value)
    } else{
        
        editTodo(t1, this.elements.title.value, this.elements.content.value, this.elements.dueDate.value, this.elements.status.value, this.elements.taskType.value, this.elements.important.value)
        // let x = document.querySelectorAll('.myTr')[t2-1].querySelectorAll('td')
        // console.log(x)
        showHide.textContent='show form app'
        addTask.classList.add('d-none')
        document.querySelector('#addEditBtn').textContent = 'add'
        //  document.querySelector('tbody').innerText=""
        // showAllTodos()
mySelectedTr = document.querySelectorAll('.myTr')[t2]

        x =mySelectedTr.children
        console.log(x)
        x[2].textContent=this.elements.title.value
        x[3].textContent=this.elements.content.value
        x[4].textContent=this.elements.dueDate.value
        x[5].textContent=this.elements.status.checked
        x[6].textContent=this.elements.taskType.value
        x[7].textContent=this.elements.important.value

     }
    this.reset()
    //  console.log(this.elements)
})


//function add  new todo
const addNewTodo =(title,content,dueDate,status,important,taskType)=>{
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
    drawTodo(todos.length,newTodo)
    showHide.textContent='show form app'
    addTask.classList.add('d-none')
}


//show all todos
const showAllTodos =()=>{
    todos =getAllTodos()
    let tbody = document.querySelector('#todoAllData')     

    todos.forEach((c,i)=>{
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
const editTodo = (id,new_title,new_content,new_dueDate,new_status,new_important,new_taskType) =>{
    findedTodo = getSingleTodoIndex(id)
    
    if(findedTodo == -1 ) return console.log('todo not found')
    todos = getAllTodos()
    todos[findedTodo].title = new_title
    todos[findedTodo].content = new_content
    todos[findedTodo].dueDate = new_dueDate
    todos[findedTodo].status = new_status
    todos[findedTodo].important = new_important
    todos[findedTodo].taskType = new_taskType
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