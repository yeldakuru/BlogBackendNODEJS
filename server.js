const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express();

mongoose.connect('mongodb://localhost/blog')

app.set('view engine','ejs')
app.use(express.urlencoded({ extended: false }))


app.get("/",(req,res)=>{
    // res.send("ServerStarted!!!");

    const articles = [{
        title: "Test Article",
        createdAt : new Date(),
        description : "Test Description"
    },{
        title: "Test Article222",
        createdAt : new Date(),
        description : "Test Description222"
    },{
        title: "Test Article333",
        createdAt : new Date(),
        description : "Test Description333"
    }]
    res.render('articles/index',{articles : articles})
});

app.use('/articles',articleRouter)

app.listen(5000)