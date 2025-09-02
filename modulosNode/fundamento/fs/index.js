import fs from "fs"
import path from "path"
import {soma} from "./app.js"


console.log(soma())

const arquivo = path.resolve("arquivo.txt")

fs.readFile(arquivo,"utf-8",(err,data)=>{
    if(err){
        return `$ERROR: ${err}`
    } 
    return `Ok: ${data}`
})

// fs.writeFile(arquivo,"\nConteudo adicionado",(err)=>{
//     if(err){
//         return `$Error:${err}`
//     }
//     console.log("Arquivo salvo com sucesso")
// })

fs.appendFile(arquivo,"\nConteudo adicionado na proxima linha",(err)=>{
    if(err){
        return `$Error:${err}`
    }
    console.log("Conteudo adicionado com sucesso")
})