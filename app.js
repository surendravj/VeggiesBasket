// React elements configuration
 import React from 'react';
 import logo from './logo.svg';
 import ReactDom from 'react-dom';

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

//congif file for port listening
app.listen(port,()=>{
    console.log(`Server is running at port `)
})
