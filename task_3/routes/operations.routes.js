const express = require('express')
const router = new express.Router()
const userController = require('../controller/operation.controller')


router.get('/operations', userController.showAllOperations)
router.get('/editOperation/:id', userController.editView)
router.post('/editOperation/:id', userController.editPost)
router.get('/singleOperation/:id', userController.showSingleOperation)
router.get('/deleteOperation/:id', userController.deleteOperation)

router.get('/addOperation', userController.addNewOperationView)
router.post('/addOperation', userController.addNewOperationPOST)

router.get('*', (req,res)=>{res.send('404')})
module.exports = router