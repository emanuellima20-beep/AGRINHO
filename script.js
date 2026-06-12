// Seleção dos elementos do DOM
const btnCalcular = document.getElementById('btnCalcular');
const tipoSolo = document.getElementById('tipoSolo');
const clima = document.getElementById('clima');
const secaoResultado = document.getElementById('resultado');
const mensagemAgua = document.getElementById('mensagemAgua');
const litrosEconomizados = document.getElementById('litrosEconomizados');

// Função para calcular a irrigação baseada nas escolhas
btnCalcular.addEventListener('click', () => {
    let economia = 0;
    let mensagem = "";

    // Lógica de decisão sustentável
    if (clima.value === "chuvoso") {
        economia = 5000; // Economiza muita água se já está chovendo
        mensagem = "🌧️ O sistema identificou chuva! A irrigação foi desligada automaticamente para evitar o encharcamento do solo e desperdício.";
    } else if (clima.value === "nublado") {
        if (tipoSolo.value === "argiloso") {
            economia = 3000;
            mensagem = "☁️ Tempo nublado e solo argiloso seguram bem a umidade. Irrigação reduzida em 70%.";
        } else {
            economia = 1500;
            mensagem = "☁️ Solo arenoso seca rápido, mas o céu nublado ajuda. Irrigação reduzida em 30%.";
        }
    } else { // Ensolarado
        if (tipoSolo.value === "argiloso") {
            economia = 1000;
            mensagem = "☀️ Sol forte, mas o solo retém água. Irrigação moderada ativada.";
        } else {
            economia = 200; // Pouca economia, necessária irrigação forte
            mensagem = "☀️ Alerta de calor extremo em solo arenoso! Irrigação de precisão acionada no volume ideal para não perder água por evaporação.";
        }
    }

    // Atualiza a tela com as informações
    mensagemAgua.textContent = mensagem;
    litrosEconomizados.textContent = `${economia} Litros`;
    
    // Revela a seção de resultados tirando a classe 'escondido'
    secaoResultado.classList.remove('escondido');
});