const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.send("Teste deu certo")
})

app.get("/cliente",(req,res)=>{
    res.json({ambiente:{
        nome:"NodeJs",
        mensagem:"Esta Operando"
    }})
})

app.listen(3000,()=>{
    console.log("Servidor rodando em http://localhost:3000")
})
