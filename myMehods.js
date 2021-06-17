const fs=require('fs')
const savetodo =(data)=>{
    fs.writeFileSync('allData.json',JSON.stringify(data))
}

const getAllData =()=>{
    try{
        data =JSON.parse(fs.readFileSync('allData.json').toString())
    }catch(e){
        data=[]
    }
    return data
}

addNewtodo=(todo)=>{
    data =getAllData()
    searchResult =data.findIndex(el=>el.id ==todo.id)
    data.push(todo)
    console.log(data)
    savetodo(data)

}
showAlltodos=()=>{
    data=getAllData()
    data.forEach(todo => {
        // title,content,dueDate,status,important,taskType
        console.log(`title :${todo.title} -content : ${todo.content} -due date :${todo.dueDate} -status :${todo.status} -important: ${todo.important} -taskType :${todo.taskType}` )
    });
}

edittodo =(id,newTodo)=>{
    data=getAllData()
    searchResult =data.findIndex(el=>el.id ==id)
    if(searchResult==-1) return console.log('not found')
    for(todoData in newTodo){
        if(newTodo[todoData]){
            data[searchResult][taskData] =newTodo[taskData]
        }
    }
    savetodo(data)
}

showSingleTodo =(id)=>{
    data =getAllData()
    searchResult =data.findIndex(el=>el.id ==id)
    if(searchResult==-1)  return console.log('not found')
    
        // title,content,dueDate,status,important,taskType
        console.log(`title :${data[searchResult].title} -content : ${data[searchResult].content} -due date :${data[searchResult].dueDate} -status :${data[searchResult].status} -important: ${data[searchResult].important} -taskType :${data[searchResult].taskType}` )
    
}

deletetodo =(id)=>{
    data =getAllData()
    searchResult =data.findIndex(el=>el.id ==id)
    if(serchResult==-1)  return console.log('not found')
   data.splice(searchResult,1)
   savetodo(data)
}
module.exports={
    addNewtodo,
    showSingleTodo,
    showAlltodos,
    edittodo,
    deletetodo
}




