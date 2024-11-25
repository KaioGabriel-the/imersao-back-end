import getTodosPosts from "../models/postModels.js";

export async function listarPosts(req, res){
    // Chama a função que retorna todos os posts do banco de dados.
    const result = await getTodosPosts();
    // Envia a resposta ao cliente com o status HTTP 200 e os posts em formato JSON.
    res.status(200).json(result);
}