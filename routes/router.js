const express = require('express');
const router = express.Router()
const {getUser,addUser,newUser}=require('./../controller/user')

/* routes */
router.get('/getuser', getUser)
router.post('/adduser',addUser)
router.post("/newuser",newUser)
module.exports=router