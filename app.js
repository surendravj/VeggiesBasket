//external packages importing section
const express=require('express');
const bodyparser=require('body-parser');
const app=express();
const port=process.env.port||5000;
const home=require('./routes/main')

// middleware section
app.use(express.static(__dirname + '/public'))
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json())
app.set('view engine','ejs')


//middleware for home-page
app.use(home)

//this is for tesing guthub purpose


//congif file for port listening
app.listen(port,()=>{
    console.log(`Server is running at port `)
})
