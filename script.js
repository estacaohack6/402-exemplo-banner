let imagens = document.querySelectorAll('.container div');

let imagemAtiva = 0;

setInterval(function(){
    imagens[imagemAtiva].classList.remove('ativa');

    imagemAtiva++;

    if(imagemAtiva == imagens.length){
        imagemAtiva = 0;
    }

    imagens[imagemAtiva].classList.add('ativa');

    
}, 1000);

