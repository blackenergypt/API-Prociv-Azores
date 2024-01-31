const axios = require('axios');

// URL da API
const apiUrl = 'https://prociv.azores.gov.pt/alertas/api';

// Parâmetros da solicitação
const params = {
    lang: 'pt',             // Idioma
    limit_last_alerts: 5    // Número de alertas recentes a serem retornados
};

// Função assíncrona para obter os alertas
async function getAlerts() {
    try {
        const response = await axios.get(apiUrl, { params });
        const alertas = response.data;

        // Processar e exibir os alertas usando for...of
        for (const alerta of alertas) {
            console.log(`ID do Alerta: ${alerta.idalerta}`);
            console.log(`Título do Aviso: ${alerta.titulo_aviso}`);
            console.log(`Tipo: ${alerta.tipo}`);
            console.log(`Texto do Aviso: ${alerta.aviso}`);
            console.log(`Data de Início: ${alerta.dia_inicio} às ${alerta.hora_inicio}`);
            console.log(`Data de Fim: ${alerta.dia_fim} às ${alerta.hora_fim}`);
            console.log('-'.repeat(50));
        }
    } catch (error) {
        console.error('Erro ao buscar alertas:', error);
    }
}

// Executar a função
getAlerts();
