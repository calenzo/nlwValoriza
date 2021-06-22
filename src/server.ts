import express from "express";

const app = express();

/*
GET     => Buscar alguma informação
POST    => Inserir/Criar
PUT     => Alterar
DELETE  => Remover
PATCH   => Alterar algo especificamente
*/

app.get("/test", (require, response) => {
    return response.send("App na NLW");
})

app.post("/test-post", (require, response) => {
    return response.send("App na NLW");
})

//http://localhost:3000/
app.listen(3000, () => {
    console.log("Server is running");
});