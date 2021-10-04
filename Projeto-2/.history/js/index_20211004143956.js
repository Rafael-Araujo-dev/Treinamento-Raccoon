window.onload = function (){
    //Adiciona evento ao elemento ao clicar executa função movePrev
    var btnPrev = document.getElementById("btn-prev");
    btnPrev.addEventListener("click", movePrev);

    //Adiciona evento ao elemento ao clicar executa função moveNext
    var btnNext = document.getElementById("btn-next");
    btnNext.addEventListener("click", moveNext);

    //Verifica a quantidade de elementos no carousel
    var items = document.getElementsByClassName("item-container");
    countItems = (items.length) - 1;

    //Define a posição inicial do carousel
    let slide = 0;
    
    //Verificação para habilitar/desabilitar os botões próximo e anterior de acordo com a posição do carousel
    checkSlide(slide);

    function moveNext () {
        if (slide < countItems) {
            slide++;
            items[slide].scrollIntoView({behavior: "smooth"});
        }
        checkSlide(slide);
    }

    function movePrev () {
        if (slide > 0){
            slide--;
            items[slide].scrollIntoView({behavior: "smooth"});
        } else {
            slide = 0;
        }
        checkSlide(slide);
    }

    function checkSlide(slide) {
        if (slide == 0) {
            btnPrev.style.visibility = "hidden";
        } else {
            btnPrev.style.visibility = "visible";
        }

        if (slide + 1 > countItems) {
            btnNext.style.visibility = "hidden";
        } else {
            btnNext.style.visibility = "visible";
        }
    }
}

