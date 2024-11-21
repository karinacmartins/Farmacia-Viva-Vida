// Variáveis globais para o carrossel
let deslocamento = 0; // Posição atual do carrossel
const carrossel = document.getElementById("carrossel"); // Seleciona o carrossel
const larguraItem = carrossel.querySelector(".produto").offsetWidth; // Largura de um item do carrossel

// Função para mover o carrossel
function moverCarrossel(direcao) {
    const maxDeslocamento = -(carrossel.scrollWidth - carrossel.offsetWidth); // Limite máximo do deslocamento

    // Atualiza o deslocamento com base na direção
    deslocamento += direcao * larguraItem;

    // Controle de limites (volta ao início ou final)
    if (deslocamento > 0) {
        deslocamento = maxDeslocamento;
    } else if (deslocamento < maxDeslocamento) {
        deslocamento = 0;
    }

    // Aplica o deslocamento no carrossel
    carrossel.style.transform = `translateX(${deslocamento}px)`;
}

// Função para iniciar o carrossel automático
function iniciarCarrossel() {
    setInterval(() => {
        moverCarrossel(1); // Move para a direita automaticamente
    }, 3000); // Intervalo de 3 segundos
}

// Função para o contador de "Últimas Horas"
function iniciarContador() {
    let horas = 24;
    let minutos = 0;
    let segundos = 0;

    // Atualiza o contador a cada segundo
    const atualizarContador = () => {
        if (segundos === 0) {
            if (minutos === 0) {
                if (horas === 0) {
                    // Reinicia o contador
                    horas = 24;
                    minutos = 0;
                    segundos = 0;
                } else {
                    horas--;
                    minutos = 59;
                    segundos = 59;
                }
            } else {
                minutos--;
                segundos = 59;
            }
        } else {
            segundos--;
        }

        // Atualiza os elementos no DOM
        document.getElementById('horas').textContent = horas.toString().padStart(2, '0');
        document.getElementById('minutos').textContent = minutos.toString().padStart(2, '0');
        document.getElementById('segundos').textContent = segundos.toString().padStart(2, '0');
    };

    setInterval(atualizarContador, 1000); // Atualiza a cada segundo
}

// Aguarda o carregamento completo da página para iniciar as funções
document.addEventListener('DOMContentLoaded', () => {
    iniciarCarrossel(); // Inicia o carrossel automático
    iniciarContador();  // Inicia o contador
});
