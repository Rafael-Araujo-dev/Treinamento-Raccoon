window.onload = function (){
    var btnPrev = document.getElementById("btn-prev");
    btnPrev.addEventListener("click", movePrev);

    var btnNext = document.getElementById("btn-next");
    btnNext.addEventListener("click", moveNext);

    var items = document.getElementsByClassName("item");
    countItems = (items.length) - 1;

    
    var element = document.getElementById("carousel-item-2");
    var element2 = document.getElementById("carousel-item-1");

    element.scrollIntoView();

    function moveNext () {
        items[2].scrollIntoView({behavior: "smooth"});
    }

    function movePrev () {
        element2.scrollIntoView({behavior: "smooth"});
    }
}

