const express = require("express")

const app = express()

app.use(express.json())

let produto = [
    {id: 1, nome: "Ps4", preco:2340},
    {id: 2 , nome: "Notebook", preco:3000}
]

app.get("/produtos",(req,res)=>{
    res.json(produto)

})

app.get("/produtos/:id",(req,res)=>{
    const Ids = parseInt(req.params.id)
    const retorno = produto.find(p=> p.id === Ids)

    if(!retorno){
        return res.status(404).json({error:"Erro id nao localizado"})
    }

    res.json(retorno)
})

app.post("/produtos", (req,res)=>{
    const {nome, preco} = req.body

    if(!nome || !preco){
        return res.status(400).json({error:"nome e preço obrigatorio"})
    }

    const novoProduto = {
        id:produto.length +1,
        nome,
        preco
    }
    produto.push(novoProduto)
    res.status(201).json(novoProduto)

})




app.listen(3005,()=>{
    console.log("Servidor Rodando em http://localhost:3005")
})