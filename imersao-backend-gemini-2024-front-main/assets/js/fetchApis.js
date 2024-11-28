let { API_URL } = process.env;

// Função para buscar os dados do endpoint
export default async function fetchImages() {
  try {
    const response = await fetch(
      "https://back-end-363068229285.southamerica-east1.run.app/posts"
    ); // Usando a URL importada
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}
