const express = require("express")
const app = express ()

require('dotenv').config()

const postsRouter = require ('./routes/posts.router') //Inserir a constante

app.use(express.urlencoded({extended:false}))
app.use (express.json())

app.use("/api/v1/posts", postsRouter) //Utilizar a constante "postsRouter" na rota: localhost:3000/api/v1/posts

const PORT = process. env.PORT || 3000

app.listen (PORT, () => {
    console.log("Teste Servidor")
})