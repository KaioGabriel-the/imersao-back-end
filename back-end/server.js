// Importa o framework Express, que será usado para criar o servidor e gerenciar rotas.
import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Cria uma instância do Express para configurar o servidor.
const app = express();
app.use(express.static("uploads"));
routes(app);
// Define a porta onde o servidor vai escutar as requisições (porta 3000).
const PORT = 3000;

// Inicia o servidor e faz ele escutar na porta 3000. Quando o servidor estiver pronto, ele imprime a mensagem no console.
app.listen(PORT, () => {
    console.log("Servidor escutando...");
});

// Função assíncrona que busca todos os posts no banco de dados.
// Ela acessa a base de dados "imersao-back-end" e a coleção "posts", retornando todos os documentos dessa coleção.
async function getTodosPosts() {
    // Acessa a base de dados "imersao-back-end" a partir da conexão MongoDB.
    const db = conexao.db("imersao-back-end");
    // Acessa a coleção "posts" dentro da base de dados.
    const colecao = db.collection("posts");
    // Retorna todos os documentos da coleção "posts" como um array.
    return colecao.find().toArray();
}
