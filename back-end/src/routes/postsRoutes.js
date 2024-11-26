// Importa o módulo 'express' para criar o servidor e definir as rotas.
import express from "express";
import multer from "multer";
import cors from "cors";
// Importa as funções 'listarPosts' e 'postNovo' do controller, que tratam da lógica de recuperar e criar posts.
import { listarPosts, postNovo, uploadImagem, atualizarNovoPost } from "../controller/postController.js";

const corsOption = {
    origin: "http://localhost:8000",
    optionSuccessStatus: 200
}
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

// Função 'routes' que configura as rotas da aplicação.
const routes = (app) => {

    // Configura o middleware para que o Express entenda dados no formato JSON nas requisições.
    // O 'express.json()' permite que o servidor leia e entenda o corpo das requisições em formato JSON.
    app.use(express.json());
    app.use(cors(corsOption))
    // Define a rota HTTP GET para o caminho "/posts".
    // Quando o cliente acessa esta rota com um pedido GET, a função 'listarPosts' é chamada para retornar os dados dos posts.
    app.get("/posts", listarPosts);

    // Define a rota HTTP POST para o caminho "/posts".
    // Quando o cliente envia dados via POST para essa rota, a função 'postNovo' é chamada para criar um novo post.
    app.post("/posts", postNovo);

    app.post("/upload",upload.single("imagem"),uploadImagem);

    app.put("/upload/:id", atualizarNovoPost);
}

// Exporta a função 'routes' para ser usada em outro arquivo.
export default routes;
