const path = require("path")
// const express = require("express")
// const app = express()
// app.use(express.static(path.join(__dirname, "public")))
// app.get("/",(req,res)=>{
//     res.sendFile(path.resolve(__dirname,"views","index.html"))
// })

// app.listen(3000,()=>{
//     console.log("servidor rodando")
// })

const caminho = path.join("pasta","arquivo","arquivo.txt")// junta pedaço de um caminho

console.log(caminho)

const absoluto= path.resolve("pasta","arquivo", "arquivo.txt") //traz o caminho absoluto desde a raiz

console.log(absoluto)

const arquibo = "pasta/arquivo/arquivo.txt"
const nomeArq = path.basename(arquibo, ".txt") // tras o nome do arquivo sem extensao

console.log(nomeArq)

const arquivoEncontrado = path.basename(arquibo) //tras o nome do arquivo 

console.log(arquivoEncontrado)