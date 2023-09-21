const express = require("express")

const app = express()

app.get('/', (requicisao, resposta) => {
    resposta.send("Estou funcionando!")
})

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
})