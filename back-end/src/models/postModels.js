// Importa a função responsável por conectar ao banco de dados MongoDB.
import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/bdConfig.js";

// Realiza a conexão com o banco de dados usando a string de conexão armazenada em uma variável de ambiente.
// A função 'conectarAoBanco' é chamada com o valor de uma variável de ambiente que contém a string de conexão do MongoDB.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO_BD);

// Função assíncrona que obtém todos os posts armazenados na coleção "posts".
export async function getTodosPosts() {
    // Acessa a base de dados "imersao-back-end" a partir da conexão MongoDB.
    // 'conexao.db()' retorna o banco de dados com o nome fornecido (neste caso, "imersao-back-end").
    const db = conexao.db("imersao-back-end");
    
    // Acessa a coleção "posts" dentro do banco de dados.
    // 'db.collection()' retorna a coleção especificada (neste caso, "posts").
    const colecao = db.collection("posts");

    // Retorna todos os documentos da coleção "posts" como um array.
    // 'colecao.find()' retorna um cursor com todos os documentos, e '.toArray()' converte o cursor em um array.
    return colecao.find().toArray();
}

// Função assíncrona que cria um novo post na coleção "posts".
export async function criarPost(novoPost){
    // Acessa novamente o banco de dados "imersao-back-end".
    const db = conexao.db("imersao-back-end");
    
    // Acessa a coleção "posts" dentro do banco de dados.
    const colecao = db.collection("posts");

    // Insere um novo post na coleção "posts".
    // 'colecao.insertOne()' insere um único documento (representado por 'novoPost') na coleção.
    return colecao.insertOne(novoPost);
}

// Função assíncrona que cria um novo post na coleção "posts".
export async function atualizarPost(id,post){
    // Acessa novamente o banco de dados "imersao-back-end".
    const db = conexao.db("imersao-back-end");
    
    // Acessa a coleção "posts" dentro do banco de dados.
    const colecao = db.collection("posts");

    // Insere um novo post na coleção "posts".
    // 'colecao.insertOne()' insere um único documento (representado por 'novoPost') na coleção.
    const objId = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id:new ObjectId(objId)},{$set:post});
}