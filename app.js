const express =require('express')
const app=express()
const path=require('path')
const myPublicDir =path.join(__dirname,'public')


app.use(express.static(myPublicDir))
x=path.join(__dirname,'test.html')
app.get('/index',(req,res)=>{
    res.sendFile(x)
})
y=path.join(__dirname,'test2.html')
app.get('/contact',(req,res)=>{
    res.sendFile(y)
})
app.get('/about',(req,res)=>{
    res.send('hello my page about')
})



app.listen(3000,()=>{
    console.log('server on localhost:3000')
})