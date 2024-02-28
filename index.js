const express=require('express');
const serveStatic=require('serve-static');


var hostname="localhost";
var port=3001;


var app=express();

app.use(serveStatic(__dirname+"/public"));


app.get("/", (req, res) => {
    res.sendFile("/public/index.html", { root: __dirname });
});


app.listen(port,hostname,function(){

    console.log(`Server hosted at http://${hostname}:${port}`);
});