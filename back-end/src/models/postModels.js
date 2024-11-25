// Importa a função responsável por conectar ao banco de dados MongoDB.
import conectarAoBanco from "../config/bdConfig.js";

// Realiza a conexão com o banco de dados usando a string de conexão armazenada em uma variável de ambiente.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO_BD);

export default async function getTodosPosts() {
    // Acessa a base de dados "imersao-back-end" a partir da conexão MongoDB.
    const db = conexao.db("imersao-back-end");
    // Acessa a coleção "posts" dentro da base de dados.
    const colecao = db.collection("posts");
    // Retorna todos os documentos da coleção "posts" como um array.
    return colecao.find().toArray();
}