const express= require('express')
const { model } = require('mongoose')
const router =express.Router()

router.get('/test',(rep,res)=>{
 res.send('In articles')

})
module.exports=router