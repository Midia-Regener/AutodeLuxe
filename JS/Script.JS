// Variável para armazenar o identificador do timeout
let timeoutId;

// Função para redirecionar entre as páginas
function redirecionarEntrePaginas() {
    // Obtém o nome da página atual
    const paginaAtual = window.location.pathname.split('/').pop();

    // Define o redirecionamento com base na página atual
    switch (paginaAtual) {
        case 'Index.html':
            timeoutId = setTimeout(() => {
                window.location.href = 'servicos.html'; // Redireciona para servicos.html após o tempo limite
            }, 4000); // Tempo limite em milissegundos (por exemplo, 10 segundos)
            break;
        case 'servicos.html':
            timeoutId = setTimeout(() => {
                window.location.href = 'equipe.html'; // Redireciona para equipe.html após o tempo limite
            }, 4000); // Tempo limite em milissegundos (por exemplo, 10 segundos)
            break;
        case 'equipe.html':
            timeoutId = setTimeout(() => {
                window.location.href = 'Index.html'; // Redireciona para Index.html após o tempo limite
            }, 4000); // Tempo limite em milissegundos (por exemplo, 10 segundos)
            break;
        default:
            break;
    }
}

// Função para verificar se o usuário fez scroll na página
function verificarScroll() {
    clearTimeout(timeoutId); // Pausa o cronômetro
    window.removeEventListener('scroll', verificarScroll); // Remove o evento de scroll
}

// Função para verificar se a seção do carrossel está visível na tela
function verificarSeccaoCarrosselVisivel() {
    const carrossel = document.querySelector('.carrossel');
    const retangulo = carrossel.getBoundingClientRect();
    const visivel = (
        retangulo.top >= 0 &&
        retangulo.left >= 0 &&
        retangulo.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        retangulo.right <= (window.innerWidth || document.documentElement.clientWidth)
    );

    // Se a seção do carrossel estiver visível, inicia o redirecionamento
    if (visivel) {
        redirecionarEntrePaginas();
        window.addEventListener('scroll', verificarScroll); // Adiciona o evento de scroll
    } else {
        // Se não estiver visível, continua verificando
        setTimeout(verificarSeccaoCarrosselVisivel, 1000);
    }
}

// Chama a função para iniciar a verificação se a seção do carrossel está visível
verificarSeccaoCarrosselVisivel();

// JavaScript para parar a animação se o usuário rolar a tela
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o botão preenchido
    const fillButton = document.querySelector('.fill-button');
    // Adiciona um evento de rolagem para parar a animação
    window.addEventListener('scroll', function() {
        fillButton.style.animationPlayState = 'paused';
    });
});