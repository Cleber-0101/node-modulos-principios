let express = require('express');
let app = express()


//primeira rota
app.get('/testando', function(req,res){
    //resposta do Get 
    res.send("Criando rota usando Express aplicando fundamentos")
})

// segunda rota
app.get('/testando', function(req,res){
    //resposta do Get 
    res.send("Criando rota usando Express aplicando fundamentos")
})


app.listen(3000, function(){
    console.log("porta rodando e servidor escutando a porta 3000")
})