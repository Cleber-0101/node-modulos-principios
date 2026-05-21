let {readFile, writeFile} = require('fs')

// lendo o arquivo 
readFile("arquivo.txt", "utf-8", (error, texto) =>{
    if(error){
        throw error
    }else{
        console.log(texto)
    }
})

// escrevendo dentro do arquivo 
writeFile("arquivo.txt", "Estou escrevendo dentro do arquivo.txt", (error) =>{
    if(error){
        throw error
    }else{
        console.log("deu certo.....")
    }
})