var express = require('express');
var app = express();

app.get('/',c_inicio);
app.get('/clientes',c_clientes);
app.get('/productos',c_productos);

function c_inicio(req,res){
    res.send('<h1>Express Inicio</h1>')
}

function c_clientes(req,res){
    res.send('<h1>clientes</h1><br><h3>eduardo Cabroski</h3><br><h3>Rodrigo Gomez</h3><br><h3>nicolas Garcia</h3>')
}
function c_productos(req,res){
    res.send('<h1>productos</h1><br><h3>Gaseosa   1.50</h3><br><h3>Galleta   0.50</h3><br><h3>Chizito   0.50</h3>')
}

function c_server(req,res){
   console.log('port:8000');
}

var server=app.listen(8000,c_server);