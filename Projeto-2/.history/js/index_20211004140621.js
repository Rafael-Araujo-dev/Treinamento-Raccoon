window.onload = function (){
    var btnPrev = document.getElementById("btn-prev");
    btnPrev.addEventListener("click", movePrev);

    var btnNext = document.getElementById("btn-next");
    btnNext.addEventListener("click", moveNext);

    var items = document.getElementsByClassName("item-container");
    countItems = (items.length) - 1;

    let slide = 0;

    function moveNext () {
        slide++;
        items[slide].scrollIntoView({behavior: "smooth"});
    }

    function movePrev () {
        slide--;
        items[slide].scrollIntoView({behavior: "smooth"});
    }
}

