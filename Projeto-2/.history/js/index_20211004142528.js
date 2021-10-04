window.onload = function (){
    var btnPrev = document.getElementById("btn-prev");
    btnPrev.addEventListener("click", movePrev);

    var btnNext = document.getElementById("btn-next");
    btnNext.addEventListener("click", moveNext);

    var items = document.getElementsByClassName("item-container");
    countItems = (items.length) - 1;

    let slide = 0;
    
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
    console.log(slide);
}

