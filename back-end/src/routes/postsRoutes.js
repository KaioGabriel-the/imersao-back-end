import express from "express";
import { listarPosts } from "../controller/postController.js";

const routes = (app) => {

    // Configura o middleware para que o Express entenda dados no formato JSON nas requisições.
    app.use(express.json());

    // Define a rota HTTP GET para o caminho "/posts".
    // Quando o cliente acessa esta rota, a função é executada para retornar os dados dos posts.
    app.get("/posts", listarPosts);

}

export default routes;
