// Importa as funções 'getTodosPosts' e 'criarPost' do modelo de dados 'postModels.js',
// que lidam com a lógica de acessar o banco de dados para buscar e criar posts.
import { getTodosPosts, criarPost } from "../models/postModels.js";
import fs from "fs";
// Função assíncrona que lista todos os posts ao ser chamada pela rota GET.
export async function listarPosts(req, res) {
    // Chama a função 'getTodosPosts' que obtém todos os posts do banco de dados.
    const result = await getTodosPosts();
    
    // Envia a resposta ao cliente com o status HTTP 200 e os posts em formato JSON.
    // 'res.status(200)' define o código de status da resposta como 200 (OK),
    // e 'res.json(result)' envia os dados dos posts para o cliente no formato JSON.
    res.status(200).json(result);
}

// Função assíncrona que cria um novo post ao ser chamada pela rota POST.
export async function postNovo(req, res) {
    // Obtém o corpo da requisição, que contém os dados do novo post a ser criado.
    // O corpo da requisição é acessado através de 'req.body'.
    const novoPost = req.body;

    try {
        // Chama a função 'criarPost' do modelo para adicionar o novo post no banco de dados.
        // 'criarPost(novoPost)' retorna a operação de inserção no banco de dados.
        const postCriado = await criarPost(novoPost);

        // Envia a resposta ao cliente com o status HTTP 200 e os dados do post criado.
        // 'res.status(200)' define o código de status como 200 (OK),
        // e 'res.json(postCriado)' envia os dados do novo post criado em formato JSON.
        res.status(200).json(postCriado);
    } catch (erro) {
        // Se ocorrer um erro, imprime a mensagem de erro no console.
        console.error(erro.message);
        
        // Envia a resposta ao cliente com o status HTTP 500 e uma mensagem de erro.
        // 'res.status(500)' define o código de status como 500 (Erro interno do servidor),
        // e 'res.json({"Erro":"Falha na requisição"})' envia um objeto com a mensagem de erro em formato JSON.
        res.status(500).json({"Erro": "Falha na requisição"});
    }
}

export async function uploadImagem(req,res) {
    // Obtém o corpo da requisição, que contém os dados do novo post a ser criado.
    // O corpo da requisição é acessado através de 'req.body'.
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    }

    try {
        // Chama a função 'criarPost' do modelo para adicionar o novo post no banco de dados.
        // 'criarPost(novoPost)' retorna a operação de inserção no banco de dados.
        const postCriado = await criarPost(novoPost);
        const imagemAtualizado = `uploads/${postCriado.insertedId}.png`;
        fs.ranameSync(req.file.path, imagemAtualizado)
        // Envia a resposta ao cliente com o status HTTP 200 e os dados do post criado.
        // 'res.status(200)' define o código de status como 200 (OK),
        // e 'res.json(postCriado)' envia os dados do novo post criado em formato JSON.
        res.status(200).json(postCriado);
    } catch (erro) {
        // Se ocorrer um erro, imprime a mensagem de erro no console.
        console.error(erro.message);
        
        // Envia a resposta ao cliente com o status HTTP 500 e uma mensagem de erro.
        // 'res.status(500)' define o código de status como 500 (Erro interno do servidor),
        // e 'res.json({"Erro":"Falha na requisição"})' envia um objeto com a mensagem de erro em formato JSON.
        res.status(500).json({"Erro": "Falha na requisição"});
    }
}