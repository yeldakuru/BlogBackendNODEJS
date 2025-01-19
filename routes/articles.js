const express= require('express')
const { model } = require('mongoose')
const router =express.Router()

router.get('/new',(rep,res)=>{
 res.send('articles/new')
})

router.post('/',(rep,res)=>{
    
})
module.exports = router