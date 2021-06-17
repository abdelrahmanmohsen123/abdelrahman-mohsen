const dbConnection = require('../db/db')
const {ObjectID}=require('mongodb')
editView=(req,res)=>{
    let id = req.params.id
    dbConnection(db=>{
        db.collection('user').findOne({_id:new ObjectID(id)}, (err, user)=>{
            res.render('editUser', {user})
        })
    })
}
editPost=(req,res)=>{
    let id = req.params.id
    data = req.body
    dbConnection(db => {
        if(!db) return console.log('database error')
        db.collection('user').updateOne(
                { _id:new ObjectID(id)},
                { $set:{ username:data.username ,password:data.password} }
            ).then(res=>console.log(res.modifiedCount))
            .catch(err=>{console.log(err)
            })
        
    })
    res.redirect('/')
}
loginView=(req,res)=>{
    res.render('homepage')
}
loginPost = (req,res)=>{
    data = req.body
    dbConnection(db => {
        if(!db) return console.log('database error')
        db.collection('user').findOne({username:data.username},{password:data.password}, (e, result)=>{
            if(e) console.log(e)
            else console.log(result)
            if(result==null) res.redirect('/homepage')
            else     res.redirect('/')

        })
    })
    
}
showAllUsers = (req,res)=>{
    dbConnection(db=>{
        if(!db) return console.log('error')
        db.collection('user').find().toArray((err, users)=>{
            if(err)console.log(err)
            else {
                console.log(users)
                res.render('allUser', {users})
            }
        })
    })
}

showSingleUser = (req,res) =>{
    let id = req.params.id
    dbConnection(db=>{
        db.collection('user').findOne({_id:new ObjectID(id)}, (err, user)=>{
            res.render('singleUser', {user})
        })
    })
}

deleteUser = (req,res) =>{
    let id = req.params.id
    dbConnection(db=>{
        db.collection('user').deleteOne({_id:new ObjectID(id)})
        .then(data=>{res.redirect('/')})
        .catch(e=>{})
    })
}


addNewUserView = (req, res)=>{
    res.render('addUser')
}
addNewUserPOST = (req,res)=>{
    data = req.body
    dbConnection(db => {
        if(!db) return console.log('database error')
        db.collection('user').insertOne(data, (e, result)=>{
            if(e) console.log(e)
            else console.log(result)
        })
    })
    res.redirect('/homepage')
}
module.exports={
    addNewUserView,
    addNewUserPOST,
    showAllUsers,
    showSingleUser,
    deleteUser,
    loginView,
    loginPost,
    editView,
    editPost
}