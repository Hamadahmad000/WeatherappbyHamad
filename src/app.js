const express = require('express')
const path = require('path')
const hbs = require('hbs')
const port = 5000;
const app = express()


const templatepath = path.join(__dirname,'../templates/views')
const partialpath = path.join(__dirname,'../templates/partial')
// const staticpath = path.join(__dirname,'../public')
app.use(express.static('public'))

app.set('view engine','hbs')
app.set('views',templatepath)
hbs.registerPartials(partialpath)
app.get('',(req,res)=>{
    res.render('index')
})
app.get('/weather',(req,res)=>{
    res.render('weather')
})

app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/aboutme',(req,res)=>{
    res.render('aboutme')
})
app.get('*',(req,res)=>{
    res.render('404')
})


app.listen(port,()=>{
    console.log(`Your server is runing on port no http://localhost:${port}`);
})