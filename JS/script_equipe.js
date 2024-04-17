imgEfeito = document.querySelectorAll('.img_efeito_fade');
paragrafo = document.querySelectorAll('.p_efeito_fade');

imgEfeito.forEach((imgEfeito, index) => {
    imgEfeito.addEventListener('mouseenter', () => {
        paragrafo[index].classList.add('paragrafo_ativo');
    });
  
    imgEfeito.addEventListener('mouseleave', () => {
        paragrafo[index].classList.remove('paragrafo_ativo');
    });
  });