window.onload = function () {
    //Adiciona evento ao elemento ao clicar executa função movePrev
    var btnPrev = document.getElementById("btn-prev");
    btnPrev.addEventListener("click", movePrev);

    //Adiciona evento ao elemento ao clicar executa função moveNext
    var btnNext = document.getElementById("btn-next");
    btnNext.addEventListener("click", moveNext);

    //Verifica a quantidade de elementos no carousel
    var itemsClassName = "item-container";
        items = document.getElementsByClassName(itemsClassName);
    countItems = (items.length) - 1;

    //Define a posição inicial do carousel
    let slidePos = 0;
    
    //Verificação para habilitar/desabilitar os botões próximo e anterior de acordo com a posição atual do carousel
    checkSlide(slidePos);

    //Função que irá exibir o conteúdo do próximo item do carousel com efeito de animação 'smooth'
    function moveNext () {
        //Verificação se existe um próximo item á ser exibido no carousel
        if (slidePos < countItems) {
            slidePos++;
            items[slidePos].scrollIntoView({behavior: "smooth"});
        }
        checkSlide(slidePos);
    }

    function movePrev () {
        //Verificação se existe um item anterior do qual está sendo exibido no carousel
        if (slidePos > 0){
            slidePos--;
            items[slide].scrollIntoView({behavior: "smooth"});
        } else {
            slidePos = 0;
        }
        checkSlide(slidePos);
    }

    //Função que faz a verificação para habilitar/desabilitar os botões próximo e anterior de acordo com a posição atual do carousel
    function checkSlide(slidePos) {
        if (slidePos == 0) {
            btnPrev.style.visibility = "hidden";
        } else {
            btnPrev.style.visibility = "visible";
        }

        if (slidePos + 1 > countItems) {
            btnNext.style.visibility = "hidden";
        } else {
            btnNext.style.visibility = "visible";
        }
    }
}

