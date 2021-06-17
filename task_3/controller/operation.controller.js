const dbConnection = require('../db/db')
const {ObjectID}=require('mongodb')
editView=(req,res)=>{
    let id = req.params.id
    dbConnection(db=>{
        db.collection('operation').findOne({_id:new ObjectID(id)}, (err, operation)=>{
            res.render('editOperation', {operation})
        })
    })
}
editPost=(req,res)=>{
    let id = req.params.id
    data = req.body
    dbConnection(db => {
        if(!db) return console.log('database error')
        db.collection('operation').updateOne(
                { _id:new ObjectID(id)},
                { $set:{ amount:data.amount ,date:data.date,location:data.location} }
            ).then(res=>console.log(res.modifiedCount))
            .catch(err=>{console.log(err)
            })
        
    })
    res.redirect('/operations')
}


showAllOperations = (req,res)=>{
    dbConnection(db=>{
        if(!db) return console.log('error')
        db.collection('operation').find().toArray((err, operations)=>{
            if(err)console.log(err)
            else {
                console.log(operations)
                res.render('Operations', {operations})
            }
        })
    })
}

showSingleOperation= (req,res) =>{
    let id = req.params.id
    dbConnection(db=>{
        db.collection('operation').findOne({_id:new ObjectID(id)}, (err, operation)=>{
            res.render('singleOperation', {operation})
        })
    })
}

deleteOperation = (req,res) =>{
    let id = req.params.id
    dbConnection(db=>{
        db.collection('operation').deleteOne({_id:new ObjectID(id)})
        .then(data=>{res.redirect('/operations')})
        .catch(e=>{})
    })
}


addNewOperationView = (req, res)=>{
    res.render('addOperation')
}
addNewOperationPOST = (req,res)=>{
    data = req.body
    dbConnection(db => {
        if(!db) return console.log('database error')
        db.collection('operation').insertOne(data, (e, result)=>{
            if(e) console.log(e)
            else console.log(result)
        })
    })
    res.redirect('/operations')
}
module.exports={
    addNewOperationView,
    addNewOperationPOST,
    showAllOperations,
    showSingleOperation,
    deleteOperation,
    
    editView,
    editPost
}