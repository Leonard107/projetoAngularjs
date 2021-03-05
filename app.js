const express = require("express");

const app = express();
//Utilizando os arquivos de forma estátitca
app.use("/static", express.static(__dirname + '/static'));


app.get("/", function(req, res){
    res.send("Site");
});

app.get("/angularjs", function(req, res){
    res.sendFile(__dirname + "/src/testAngularJS.html");
});

app.listen(8081);