const express = require('express')
const router = new express.Router()
const userController = require('../controller/Account.controller')
router.get('/homepage', userController.loginView)
router.post('/homepage', userController.loginPost)

router.get('', userController.showAllUsers)
router.get('/edit/:id', userController.editView)
router.post('/edit/:id', userController.editPost)
router.get('/single/:id', userController.showSingleUser)
router.get('/delete/:id', userController.deleteUser)

router.get('/addUser', userController.addNewUserView)
router.post('/addUser', userController.addNewUserPOST)




// router.get('*', (req,res)=>{res.send('404')})
module.exports = router