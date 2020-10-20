const express = require('express');
const app = express();
const path = require('path');



var directoryServidor = path.dirname(__dirname);
let directory = directoryServidor.substring(0, directoryServidor.lastIndexOf('\\'));

const publicdir = directory + '\\DAW 1/avaliacao-daw-01/public';
const srcdir = directory + '\\DAW 1/avaliacao-daw-01/src';
const nodem = directory + '\\DAW 1/avaliacao-daw-01/node_modules';

app.use('/public', express.static(publicdir));
app.use('/src', express.static(srcdir));
app.use('/node', express.static(nodem));


app.use(express.urlencoded({
    extended: true
  }))

  

app.get("/", (req,res)=> {
    res.sendFile(srcdir + "/views/index.html");

});



app.get("/eu", (req,res)=> {
    res.sendFile(srcdir + "/views/eu.html");

});

app.get("/aluno", (req,res)=> {
    res.sendFile(srcdir + "/views/aluno.html");

});

app.get("/duvida", (req,res)=> {
    res.sendFile(srcdir + "/views/duvida.html");

});

app.get("/confirmacao", (req,res) =>{
    var email = req.query.email;
    var msg = req.query.msg;
    res.send("A duvida " + "'" + msg + "'" + " foi enviada com sucesso e será repondida no e-mail " + email);
});



app.listen(3000, ()=> {
    console.log("O servidor está rodando.");
});

