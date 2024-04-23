const botao = document.getElementById("circular-loader");
const paginaAtual = window.location.pathname.split('/').pop();
var tempoTroca;
var trocaPagina = true;
var posicaoScroll;

// Adiciona um evento de scroll à janela
window.addEventListener("scroll", function() {
    posicaoScroll = window.scrollY;
    if (posicaoScroll >= 350) {
        botao.classList.remove("animar_loading");
        trocaPagina = false; // Impede a troca de página
        clearTimeout(tempoTroca);
        console.log("Troca de página cancelada");
    } else {
        botao.classList.add("animar_loading");
        trocaPagina = true;
        clearTimeout(tempoTroca); // Cancela o timeout anterior
        tempoTroca = setTimeout(() => {
            if (trocaPagina) {
                window.location.href = 'servicos.html';
            }
        }, 5000);
    }  
  });
  
