const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const http = require('http');
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("assets"));

app.get("/",(req,res)=>{
    res.render("index");
});
app.post("/",(req,res)=>{
    console.log(req.body);
    const btnpressed = req.body.btn;
    switch(btnpressed){
        case "books":
            res.redirect("/books");
            break;
        case "characters": 
            res.redirect("/characters");
            break;
        case "wands":
            res.redirect("/wands");
            break;
        case "species":
            res.redirect("/species");
            break;
        case "Houses":
            res.redirect('/houses');
            break;
        default:
            res.redirect('/');
            break;
    }
})

app.get("/books",(req,res)=>{
    const url = "http://legacy--api.herokuapp.com/api/v1/books";
     
             
    fetch(url)
    .then(function(response) {
    return response.json();
            }).then(function(data) {
            console.log(data); 
            res.render("books",{
                books:data 
            })
            }); 
            
        })

app.get("/characters",(req,res)=>{
    const pageNo = 1;
    const url = "http://legacy--api.herokuapp.com/api/v1/characters?page="+pageNo;
    fetch(url)
    .then(function(response) {
    return response.json();
            }).then(function(data) {
            console.log(data); 
            res.render("characters",{
                characters:data 
            }) 
            });
            
});
app.post("/characters",(req,res)=>{
    const page = Number(req.body.pageno);
    const url = "http://legacy--api.herokuapp.com/api/v1/characters?page="+page;
    fetch(url)
    .then(function(response) {
    return response.json();
            }).then(function(data) {
            console.log(data); 
            res.render("characters",{
                characters:data 
            }) 
            });
})
app.get("/wands",(req,res)=>{
    const page = 1;
    const url = "http://legacy--api.herokuapp.com/api/v1/wands?page="+page;
    fetch(url)
    .then(function(response) {
    return response.json();
            }).then(function(data) {
            console.log(data); 
            res.render("wands",{  
                wands:data 
            }) 
            });
})
app.post("/wands",(req,res)=>{
    const page = Number(req.body.pageno);
    const url = "http://legacy--api.herokuapp.com/api/v1/wands?page="+page;
    fetch(url)
    .then(function(response) {
    return response.json();
            }).then(function(data) {
            console.log(data); 
            res.render("wands",{
                wands:data 
            }) 
            });
})
app.get("/species",(req,res)=>{
    const page = 1;
    const url = "http://legacy--api.herokuapp.com/api/v1/species?page="+page;
    fetch(url)
    .then(function(response) {
    return response.json();
            }).then(function(data) {
            console.log(data); 
            res.render("species",{
                species:data 
            }) 
            });
})

app.get("/houses",(req,res)=>{
    const page = 1;
    const url = "http://legacy--api.herokuapp.com/api/v1/houses?page="+page;
    fetch(url)
    .then(function(response) {
    return response.json();
            }).then(function(data) {
            console.log(data); 
            res.render("houses",{
                houses:data 
            }) 
            });
})

app.listen(3000,()=>{
    console.log("server running at 3000");
})