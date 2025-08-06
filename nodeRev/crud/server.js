const express = require("express")

const app = express()

app.use(express.json())

let produto = [
    {id: 1, nome: "Ps4", valor:2340},
    {id: 2 , nome: "Notebook", valor:3000}
]

app.get("/produtos",(req,res)=>{
    res.json(produto)

})

app.get("/produtos/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    const retorno = produto.find(p=> p.id === id)

    res.json(retorno)
})

app.listen(3005,()=>{
    console.log("Servidor Rodando em http://localhost:3005")
})